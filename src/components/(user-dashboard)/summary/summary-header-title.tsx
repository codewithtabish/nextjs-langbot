"use client";

/**
 * @author: @dorian_baffier (modified by @codewithtabish)
 * @description: Matrix Text Animation with Theme-Aware Primary Color
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface LetterState {
  char: string;
  isMatrix: boolean;
  isSpace: boolean;
}

interface MatrixTextProps {
  text?: string;
  className?: string;
  initialDelay?: number;
  letterAnimationDuration?: number;
  letterInterval?: number;
}

const SummaryHeaderTitle = ({
  text = "HelloWorld!",
  className,
  initialDelay = 200,
  letterAnimationDuration = 500,
  letterInterval = 100,
}: MatrixTextProps) => {
  const [letters, setLetters] = useState<LetterState[]>(() =>
    text.split("").map((char) => ({
      char,
      isMatrix: false,
      isSpace: char === " ",
    }))
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const { theme } = useTheme();

  // 🎨 Detect primary color (light/dark mode)
  const primaryColor =
    theme === "dark"
      ? "rgb(34, 211, 238)" // cyan-400
      : "rgb(99, 102, 241)"; // indigo-500

  const getRandomChar = useCallback(
    () => (Math.random() > 0.5 ? "1" : "0"),
    []
  );

  const animateLetter = useCallback(
    (index: number) => {
      if (index >= text.length) return;

      requestAnimationFrame(() => {
        setLetters((prev) => {
          const newLetters = [...prev];
          if (!newLetters[index].isSpace) {
            newLetters[index] = {
              ...newLetters[index],
              char: getRandomChar(),
              isMatrix: true,
            };
          }
          return newLetters;
        });

        setTimeout(() => {
          setLetters((prev) => {
            const newLetters = [...prev];
            newLetters[index] = {
              ...newLetters[index],
              char: text[index],
              isMatrix: false,
            };
            return newLetters;
          });
        }, letterAnimationDuration);
      });
    },
    [getRandomChar, text, letterAnimationDuration]
  );

  const startAnimation = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    let currentIndex = 0;
    const animate = () => {
      if (currentIndex >= text.length) {
        setIsAnimating(false);
        return;
      }

      animateLetter(currentIndex);
      currentIndex++;
      setTimeout(animate, letterInterval);
    };

    animate();
  }, [animateLetter, text, isAnimating, letterInterval]);

  useEffect(() => {
    const timer = setTimeout(startAnimation, initialDelay);
    return () => clearTimeout(timer);
  }, []);

  const motionVariants = useMemo(
    () => ({
      matrix: {
        color: primaryColor,
        textShadow: `0 2px 6px ${primaryColor}`,
      },
      normal: {
        color: "inherit",
        textShadow: "none",
      },
    }),
    [primaryColor]
  );

  return (
    <div
      className={cn(
        "flex items-center justify-center text-black dark:text-white",
        className
      )}
      aria-label="Matrix text animation"
    >
      <div className="h-24 flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center">
          {letters.map((letter, index) => (
            <motion.div
              key={`${index}-${letter.char}`}
              className="font-mono text-4xl md:text-6xl w-[1ch] text-center overflow-hidden"
              initial="initial"
              animate={letter.isMatrix ? "matrix" : "normal"}
              variants={motionVariants}
              transition={{
                duration: 0.1,
                ease: "easeInOut",
              }}
              style={{
                display: "inline-block",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {letter.isSpace ? "\u00A0" : letter.char}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryHeaderTitle;

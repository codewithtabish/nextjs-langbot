'use client'

import { usePathname, useRouter } from "next/navigation";
import { Globe, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { avalible_languages, isUrduTypedLanguage } from "@/constants/languages";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const isRtl = isUrduTypedLanguage(currentLocale);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    setLoading(true);
    setOpen(false);

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || `/${newLocale}`;

    router.push(newPath);
  };

  const filteredLanguages = avalible_languages.filter((lang: any) =>
    lang.nativeName.toLowerCase().includes(search.toLowerCase()) ||
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center backdrop-blur-sm transition-all">
          <Loader2 className="animate-spin text-primary" size={48} />
        </div>
      )}

      <div
        className="cursor-pointer"
        style={{
          userSelect: "none",
          direction: isRtl ? "rtl" : "ltr",
        }}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className={cn(
                "rounded-full border border-muted bg-background shadow-sm hover:bg-muted/50 transition-colors p-2",
                open && "ring-2 ring-primary"
              )}
              aria-label="Change language"
              disabled={loading}
            >
              <Globe size={20} className="text-primary" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            align="end"
            className="w-56 p-2 rounded-xl border bg-background shadow-xl animate-fade-in"
            sideOffset={8}
          >
            <CommandDialog open={open} onOpenChange={setOpen}>
              <Command className="relative">
                {/* Search input */}
                <div
                  className={cn(
                    "flex items-center border-b mb-2",
                    isRtl ? "flex-row-reverse pr-2" : "flex-row pl-2"
                  )}
                >
                  <CommandInput
                    placeholder="Search language..."
                    value={search}
                    onValueChange={setSearch}
                    className={cn(
                      "flex-1 pb-1 bg-transparent focus:outline-none",
                      isRtl && "text-right"
                    )}
                  />
                  {/* Close Icon fixed for RTL */}
                  <button
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="p-1 text-muted-foreground hover:text-foreground"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Language list */}
                <CommandList className="max-h-64 overflow-y-auto scrollbar-hide">
                  <CommandEmpty>No languages found.</CommandEmpty>
                  <CommandGroup>
                    {filteredLanguages.map((lang: any) => (
                      <CommandItem
                        key={lang.code}
                        onSelect={() => handleLocaleChange(lang.code)}
                        className={cn(
                          "justify-start w-full text-sm px-3 py-2 rounded-lg transition-all",
                          lang.code === currentLocale &&
                            "pointer-events-none font-semibold bg-primary/90 text-white"
                        )}
                        aria-current={lang.code === currentLocale}
                      >
                        {lang.nativeName}
                        {loading && lang.code !== currentLocale && (
                          <Loader2
                            className={isRtl ? "mr-2 animate-spin" : "ml-2 animate-spin"}
                            size={16}
                          />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </CommandDialog>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

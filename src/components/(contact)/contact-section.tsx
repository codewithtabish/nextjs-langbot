"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { useTheme } from "next-themes"
import { dark } from "@clerk/themes"
import { contactContent } from "@/constants/translations/contact-content"
import { LocaleType, isUrduTypedLanguage } from "@/constants/languages"
import { sendEmail } from "@/actions/send-email"
import { countries } from "@/utils/countries"

export default function ContactSection({ locale = "en" }: { locale?: LocaleType }) {
  const content = contactContent[locale] || contactContent["en"]
  const isRTL = isUrduTypedLanguage(locale || "en")
  const { theme } = useTheme()
  const redirectUrl = process.env.NEXT_PUBLIC_CONTACT_REDIRECT_URL || "/"

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const payload = {
      fullName: formData.get("name") as string,
      email: formData.get("email") as string,
      country: formData.get("country") as string,
      message: formData.get("msg") as string,
    }

    try {
      const res = await sendEmail(payload)
      if (res.success) {
        setSuccess(locale === "ur" || locale === "ar" ? "پیغام بھیج دیا گیا!" : "Message sent successfully!")
        e.currentTarget.reset()
      } else {
        setError(locale === "ur" || locale === "ar" ? "پیغام بھیجنے میں ناکامی" : "Failed to send message. Try again later.")
      }
    } catch (err) {
      setError(locale === "ur" || locale === "ar" ? "پیغام بھیجنے میں ناکامی" : "Failed to send message. Try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-32" dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }}>
      <div className="mx-auto max-w-6xl px-8 lg:px-0">
        {/* Header */}
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">{content.title}</h1>
        <p className="mt-4 text-center text-muted-foreground md:max-w-[70%] mx-auto">{content.intro}</p>

        {/* Form Container */}
        <div className="mx-auto mt-12 w-full p-8 sm:p-12 rounded-2xl shadow-sm bg-background/5">
          <div>
            <h2 className="text-xl font-semibold">{content.subtitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{content.description}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6 w-full">
            <Input type="text" name="name" placeholder={content.placeholders.name} required className="rounded-xl w-full shadow-md py-6" />
            <Input type="email" name="email" placeholder={content.placeholders.email} required className="rounded-xl shadow-md py-6 w-full" />
            
            <Select name="country">
              <SelectTrigger className="rounded-xl shadow-md py-6 w-full">
                <SelectValue placeholder={content.placeholders.country} />
              </SelectTrigger>
              <SelectContent className="max-h-64">
                {countries.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Textarea name="msg" placeholder={content.placeholders.message} rows={6} required className="rounded-xl shadow-md min-h-[120px] py-6 w-full" />

            {/* Clerk login check */}
            <SignedOut>
              <SignInButton
                mode="modal"
                fallbackRedirectUrl={redirectUrl}
                appearance={{
                  baseTheme: theme === "dark" ? dark : undefined,
                  variables: { borderRadius: "0.75rem", colorPrimary: theme === "dark" ? "#22d3ee" : "#6366f1" },
                }}
              >
                <Button className="w-full rounded-xl shadow-md py-6">
                  {locale === "ur" || locale === "ar" ? "لاگ ان کریں" : "Login to Continue"}
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button type="submit" disabled={loading} className="w-full rounded-xl shadow-md py-6">
                {loading ? (locale === "ur" || locale === "ar" ? "بھیج رہے ہیں..." : "Sending...") : content.button}
              </Button>
            </SignedIn>

            {success && <p className="text-green-600 mt-2">{success}</p>}
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

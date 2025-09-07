"use client"

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

import { contactContent } from "@/constants/translations/contact-content"
import { LocaleType, isUrduTypedLanguage } from "@/constants/languages"

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Jordan",
  "Kenya",
  "Kuwait",
  "Latvia",
  "Lebanon",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Mexico",
  "Monaco",
  "Morocco",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Saudi Arabia",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Thailand",
  "Tunisia",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
  "Yemen",
]

export default function ContactSection({ locale = "en" }: { locale?: LocaleType }) {
  const content = contactContent[locale] || contactContent["en"]
  const isRTL = isUrduTypedLanguage(locale || "en")

  return (
    <section
      className="py-32"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ textAlign: isRTL ? "right" : "left" }}
    >
      <div className="mx-auto max-w-6xl px-8 lg:px-0">
        {/* Header */}
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          {content.title}
        </h1>
        <p className="mt-4 text-center text-muted-foreground md:max-w-[70%] mx-auto">
          {content.intro}
        </p>

        {/* Form */}
        <div className="mx-auto mt-12 max-w-xl p-8 sm:p-12 rounded-2xl shadow-xl bg-white dark:bg-neutral-900">
          <div>
            <h2 className="text-xl font-semibold">{content.subtitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {content.description}
            </p>
          </div>

          <form action="" className="mt-8 space-y-6">
            {/* Name */}
            <Input
              type="text"
              id="name"
              placeholder={content.placeholders.name}
              required
              className="rounded-xl shadow-md py-6"
            />

            {/* Email */}
            <Input
              type="email"
              id="email"
              placeholder={content.placeholders.email}
              required
              className="rounded-xl shadow-md py-6"
            />

            {/* Country */}
            <Select>
              <SelectTrigger className="rounded-xl shadow-md w-full py-6">
                <SelectValue placeholder={content.placeholders.country} />
              </SelectTrigger>
              <SelectContent className="max-h-64">
                {countries.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Message */}
            <Textarea
              id="msg"
              placeholder={content.placeholders.message}
              rows={6}
              required
              className="rounded-xl shadow-md min-h-[120px] py-6"
            />

            {/* Submit */}
            <Button type="submit" className="w-full rounded-xl shadow-md py-3">
              {content.button}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

// app/api/generate-meta/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const { title, shortDesc, category, slug } = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // must be server-side
    });

    const prompt = `
You are a professional SEO and blogging assistant.
I will provide blog metadata: title, short description, category.
Generate for SEO:

- metaTitle (max 60 chars)
- metaDescription (max 160 chars)
- ogTitle
- ogDescription
- tags (comma separated)
- keywords (comma separated)

Return JSON only, no extra text.

Title: ${title}
Short Description: ${shortDesc}
Category: ${category}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [{ role: "user", content: prompt }],
    });

    // Ensure we always have a string to parse
    const content = response.choices?.[0]?.message?.content?.trim() || "{}";

    let parsed: any = {};

    try {
      // Try parsing AI response
      parsed = JSON.parse(content);
    } catch (err) {
      console.error("❌ Failed to parse AI response:", err);
      console.log("AI returned:", content);

      // Fallback to defaults
      parsed = {
        metaTitle: title,
        metaDescription: shortDesc,
        ogTitle: title,
        ogDescription: shortDesc,
        tags: [],
        keywords: [],
      };
    }

    return NextResponse.json({
      metaTitle: parsed.metaTitle || title,
      metaDescription: parsed.metaDescription || shortDesc,
      ogTitle: parsed.ogTitle || title,
      ogDescription: parsed.ogDescription || shortDesc,
      tags: Array.isArray(parsed.tags)
        ? parsed.tags.map((t: string) => t.trim())
        : parsed.tags
        ? parsed.tags.split(",").map((t: string) => t.trim())
        : [],
      keywords: Array.isArray(parsed.keywords)
        ? parsed.keywords.map((k: string) => k.trim())
        : parsed.keywords
        ? parsed.keywords.split(",").map((k: string) => k.trim())
        : [],
    });
  } catch (err: any) {
    console.error("❌ Generate Meta Error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to generate metadata" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma-client";
import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Create the SEO record first
    const seo = await prisma.seo.create({
      data: {
        metaTitle: body.seo.metaTitle,
        metaDescription: body.seo.metaDescription,
        ogTitle: body.seo.ogTitle,
        ogDescription: body.seo.ogDescription,
        tags: body.seo.tags || [],
        keywords: body.seo.keywords || [],
        canonicalUrl: body.canonicalUrl,
        updatedAt: new Date(), // Fix for required field
      },
    });

    // ✅ Then create the Blog record and link to the SEO record
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        shortDesc: body.shortDesc,
        content: body.content ?? undefined, // optional JSON content
        category: body.category,
        bannerImageUrl: body.bannerImageUrl,
        ogImageUrl: body.ogImageUrl,
        sidebarLinks: body.sidebarLinks || [],
        slug: body.slug,
        seoId: seo.id, // Link with SEO
        updatedAt: new Date(), // Fix for required field
      },
      include: { Seo: true }, // Return SEO details as well
    });

    revalidateTag("all:blogs"); // Revalidate the blogs list page

    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (error: any) {
    console.error("❌ Create Blog Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create blog." },
      { status: 500 }
    );
  }
}

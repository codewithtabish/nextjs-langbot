import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma-client";
import { revalidateTag } from "next/cache";

// ✅ Update blog content only
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> } // ✅ Next.js 15.5+ async params
) {
  const { slug } = await context.params; // ✅ await the params

  try {
    const body = await req.json();
    const { content } = body;

    if (!content) {
      return NextResponse.json(
        { success: false, error: "Content is required" },
        { status: 400 }
      );
    }

    const updatedBlog = await prisma.blog.update({
      where: { slug },
      data: { content },
    });

    // Revalidate cache for blog lists and single blog
    revalidateTag("all:blogs");
    revalidateTag(`single:blog:${slug}`);

    return NextResponse.json(
      { success: true, updatedBlog },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Content Update Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update content" },
      { status: 500 }
    );
  }
}

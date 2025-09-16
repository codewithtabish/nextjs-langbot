import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma-client";

// GET handler (already existing)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  try {
    if (slug) {
      const blog = await prisma.blog.findUnique({
        where: { slug },
        include: { Seo: true },
      });

      if (!blog) {
        return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json({ success: true, blog }, { status: 200 });
    }

    const blogs = await prisma.blog.findMany({
      include: { Seo: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

// DELETE handler
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ success: false, error: "Slug is required" }, { status: 400 });
  }

  try {
    const deletedBlog = await prisma.blog.delete({
      where: { slug },
    });

    return NextResponse.json({ success: true, deletedBlog }, { status: 200 });
  } catch (error) {
    console.error("❌ Delete Error:", error);
    return NextResponse.json({ success: false, error: "Failed to delete blog" }, { status: 500 });
  }
}

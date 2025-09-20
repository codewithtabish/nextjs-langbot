import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from 'next/cache';

// ✅ Fetch a single blog by slug
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ slug: string }> } // ✅ updated
) {
  const { slug } = await context.params; // ✅ await

  try {
    const blog = await prisma.blog.findUnique({
      where: { slug },
      include: { Seo: true },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching single blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// ✅ Update a single blog by slug
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> } // ✅ updated
) {
  const { slug } = await context.params; // ✅ await

  try {
    const body = await req.json();
    const {
      title,
      slug: newSlug,
      shortDesc,
      bannerImageUrl,
      ogImageUrl,
      sidebarLinks,
    } = body;

    const updatedBlog = await prisma.blog.update({
      where: { slug },
      data: {
        title,
        slug: newSlug ?? slug,
        shortDesc,
        bannerImageUrl,
        ogImageUrl,
        sidebarLinks,
      },
    });

    revalidateTag("all:blogs");
    revalidateTag(`single:blog:${slug}`);
    revalidateTag("related:blogs");

    return NextResponse.json({ success: true, updatedBlog }, { status: 200 });
  } catch (error) {
    console.error("❌ Update Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// ✅ Delete a single blog by slug
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ slug: string }> } // ✅ updated
) {
  const { slug } = await context.params; // ✅ await

  try {
    const deletedBlog = await prisma.blog.delete({
      where: { slug },
    });

    revalidateTag("all:blogs");
    revalidateTag("related:blogs");

    return NextResponse.json({ success: true, deletedBlog }, { status: 200 });
  } catch (error) {
    console.error("❌ Delete Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}

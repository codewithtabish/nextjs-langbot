import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma-client";
import { revalidateTag } from "next/cache";

// ✅ Get a single blog
export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const blog = await prisma.blog.findUnique({
      where: { slug },
      include: { Seo: true },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("❌ Error fetching single blog:", error);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}

// ✅ Update a single blog
export async function PUT(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

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

    // ✅ Revalidate cache
    revalidateTag("all:blogs");
    revalidateTag("related:blogs");
    revalidateTag(`single:blog:${slug}`);
    if (newSlug && newSlug !== slug) {
      revalidateTag(`single:blog:${newSlug}`);
    }

    return NextResponse.json({ success: true, updatedBlog }, { status: 200 });
  } catch (error) {
    console.error("❌ Update Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// ✅ Delete a single blog
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const deletedBlog = await prisma.blog.delete({
      where: { slug },
    });

    // ✅ Revalidate cache
    revalidateTag("all:blogs");
    revalidateTag("related:blogs");
    revalidateTag(`single:blog:${slug}`);

    return NextResponse.json({ success: true, deletedBlog }, { status: 200 });
  } catch (error) {
    console.error("❌ Delete Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}

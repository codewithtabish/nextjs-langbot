import { NextResponse } from "next/server";
import prisma from "@/lib/prisma-client"; // ✅ Adjust path if needed

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const blog = await prisma.blog.findUnique({
      where: { slug },
      include: { Seo: true }, // ✅ include related SEO if needed
    });

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("❌ Error fetching single blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

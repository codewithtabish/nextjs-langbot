import { NextResponse } from "next/server";
import prisma from "@/lib/prisma-client"; // ✅ Adjust path if needed

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    // Fetch 3 latest blogs except the current one
    const blogs = await prisma.blog.findMany({
      where: { slug: { not: slug } },
      orderBy: { createdAt: "desc" },
      take: 3,
      select: {
        id: true,
        title: true,
        slug: true,
        bannerImageUrl: true,
        shortDesc: true,
      },
    });

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch related blogs" },
      { status: 500 }
    );
  }
}

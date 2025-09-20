import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";

// ✅ GET all blogs
export async function GET(_req: NextRequest) {
  try {
    const blogs = await prisma.blog.findMany({
      include: { Seo: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


// DELETE handler
// export async function DELETE(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const slug = searchParams.get("slug");

//   if (!slug) {
//     return NextResponse.json({ success: false, error: "Slug is required" }, { status: 400 });
//   }

//   try {
//     const deletedBlog = await prisma.blog.delete({
//       where: { slug },
//     });

//     return NextResponse.json({ success: true, deletedBlog }, { status: 200 });
//   } catch (error) {
//     console.error("❌ Delete Error:", error);
//     return NextResponse.json({ success: false, error: "Failed to delete blog" }, { status: 500 });
//   }
// }



// // PUT handler



// export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
//   const slug = params.slug;

//   try {
//     const body = await req.json();
//     const {
//       title,
//       slug: newSlug,
//       shortDesc,
//       bannerImageUrl,
//       ogImageUrl,
//       sidebarLinks,
//     } = body;

//     const updatedBlog = await prisma.blog.update({
//       where: { slug },
//       data: {
//         title,
//         slug: newSlug ?? slug,
//         shortDesc,
//         bannerImageUrl,
//         ogImageUrl,
//         sidebarLinks,
//       },
//     });

//     return NextResponse.json({ success: true, updatedBlog });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to update blog" }, { status: 500 });
//   }
// }

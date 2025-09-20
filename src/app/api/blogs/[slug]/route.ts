import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma-client"; // ✅ Adjust path if needed
import { revalidateTag } from "next/cache";
// import { revalidateTag } from "next/cache";

export async function GET(
  req: Request,
    params: Promise<{ slug: string }>

  // { params }: { params: Promise<{ slug: string }> } // ⬅️ make params a Promise
) {
  const { slug } = await params; // ⬅️ await params before using

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





// ✅ Update a single blog by slug
export async function PUT(
  req: NextRequest,
    params: Promise<{ slug: string }>

  // { params }: { params: { slug: string } }
) {
  const { slug } = await params;

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
        revalidateTag("related:blogs")
                // tags:["related:blogs"]
 
                  // tags: [`single:blog:${slug}`],   // ✅ tag includes the slug
                   // For all blogs list page


    return NextResponse.json({ success: true, updatedBlog }, { status: 200 });
  } catch (error) {
    console.error("❌ Update Error:", error);
    return NextResponse.json({ success: false, error: "Failed to update blog" }, { status: 500 });
  }
}



// ✅ Delete a single blog by slug (optional)
export async function DELETE(
  _req: NextRequest,
    params: Promise<{ slug: string }>

  // { params }: { params: { slug: string } }
) {
  const { slug } =await  params;

  try {
    const deletedBlog = await prisma.blog.delete({
      where: { slug },
    });

        revalidateTag("all:blogs"); // Revalidate the blogs list page
        revalidateTag("related:blogs")



    

    return NextResponse.json({ success: true, deletedBlog }, { status: 200 });
  } catch (error) {
    console.error("❌ Delete Error:", error);
    return NextResponse.json({ success: false, error: "Failed to delete blog" }, { status: 500 });
  }
}

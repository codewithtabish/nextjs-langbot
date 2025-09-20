"use server";

import prisma  from "@/lib/prisma-client";


export async function getAllBlogsAction() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_NORMAL_URL}/api/blogs`, {
      cache: "force-cache", // Always fresh
      next:{
        revalidate:60*60*24*90,  // 90 days
        tags:["all:blogs"]
      }
    });

    if (!res.ok) {
      let errorMsg = `Failed to fetch blogs. Status: ${res.status}`;
      try {
        const errData = await res.json();
        if (errData?.message) errorMsg += ` - ${errData.message}`;
      } catch {}
      // ❌ Instead of throwing, return error info
      return { blogs: [], error: errorMsg };
    }


    const data = await res.json();
    return { blogs: data.blogs ?? [], error: null };
  } catch (error: any) {
    console.error("❌ Error fetching blogs:", error);
    return { blogs: [], error: error.message || "Unknown error" };
  }
}






export async function getBlogBySlugAction(slug: string) {
  try {
    // ais-5-year-takeover-how-artificial-intelligence-will-dominate-the-tech-world-by-2030
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_NORMAL_URL}/api/blogs/${slug}`,
      {
        // ✅ Choose your caching strategy:
        cache: "force-cache",           // Always fresh
        next: { revalidate: 60*60*24*90 ,
          tags: [`single:blog:${slug}`],   // ✅ tag includes the slug

          // tags:["single:blog"]
        },       // Revalidate every 60 seconds
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch blog (status: ${res.status})`
      );
    }

    const data = await res.json();
    return data.blog; // ✅ Single blog object
  } catch (error) {
    console.error("Error in getBlogBySlugAction:", error);
    return null; // ✅ Return null so UI doesn't break
  }
}






export async function getRelatedBlogsAction(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_NORMAL_URL}/api/blogs/related?slug=${slug}`,
      {
        cache: "force-cache",
         next:{
        revalidate:60*60*24*90,  // 90 days
        tags:["related:blogs"]
      }
      }
    );

    if (!res.ok) throw new Error("Failed to fetch related blogs");

    const data = await res.json();
    return data.blogs as {
      id: string;
      title: string;
      slug: string;
    }[];
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
}



// 'use server';


// import prisma from "@/lib/prisma"; // ✅ Adjust to your prisma path


export async function getRelatedBlogsActionAgain(slug: string) {
  try {
    const cleanSlug = slug.trim().toLowerCase(); // ✅ normalize input

    const blogs = await prisma.blog.findMany({
      where: {
        slug: {
          notIn: [cleanSlug], // ✅ exclude the current blog reliably
          mode: "insensitive", // ✅ ignore case (Prisma >=4.8)
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        bannerImageUrl: true,
        shortDesc: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    return blogs;
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
}


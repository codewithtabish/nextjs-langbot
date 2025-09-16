"use server";

export async function getAllBlogsAction() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_NORMAL_URL}/api/blogs`, {
      // ✅ Choose caching strategy
      cache: "no-store",            // Always fresh (no cache)
      // next: { revalidate: 60 },       // ✅ Cache & revalidate every 60s
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs. Status: ${res.status}`);
    }

    const data = await res.json();
    return data.blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return []; // ✅ Return empty array to avoid breaking UI
  }
}





export async function getBlogBySlugAction(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_NORMAL_URL}/api/blogs/${slug}`,
      {
        // ✅ Choose your caching strategy:
        // cache: "no-store",           // Always fresh
        next: { revalidate: 60 },       // Revalidate every 60 seconds
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
        cache: "no-store", // ✅ Always fresh data
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

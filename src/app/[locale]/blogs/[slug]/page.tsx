import { getBlogBySlugAction, getRelatedBlogsAction, getRelatedBlogsActionAgain } from "@/actions/blogs";
import { BlogWithSideBarPreviewer } from "@/components/(blogs)/blog-with-sidebar-previewer";
import BackButton from "@/components/generals/back-button";
import Image from "next/image";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;

    // ✅ Fetch main blog safely
    const blog = await getBlogBySlugAction(slug);
    if (!blog) {
      return <div className="p-10 text-center">Blog not found</div>;
    }

    // ✅ Fetch related blogs safely
    let relatedBlogs: {
      id: string;
      title: string;
      slug: string;
    }[] = [];
    try {
      relatedBlogs = await getRelatedBlogsActionAgain(slug);
    } catch (err) {
      console.error("Error fetching related blogs:", err);
      relatedBlogs = []; // fallback to empty array
    }

    return (
      <div className="max-w-6xl mx-auto  flex flex-col md:flex-row gap-10 py-20">
        {/* {JSON.stringify(relatedBlogs)} */}

        {/* ---------- MAIN BLOG CONTENT ---------- */}
        <div className="flex-1 min-w-0">
          {blog.bannerImageUrl && (
            <div className="mb-6 w-full max-h-[400px] overflow-hidden rounded-lg">
              <Image
                src={blog.bannerImageUrl}
                alt={blog.title}
                width={1200}
                height={600}
                className="w-full h-auto max-h-[400px] object-cover"
                priority
              />
            </div>
          )}

         <div className="md:max-w-[85%]">
           <h1 className="text-3xl font-bold mb-4 ">{blog.title}</h1>

          <p className="text-gray-700 mb-6 text-sm leading-relaxed ">
            {blog.shortDesc}
          </p>
         </div>
                 <BackButton />


          {/* ✅ Sidebar + Ads + Related Blogs handled inside */}
          <BlogWithSideBarPreviewer
            content={blog.content}
            sidebarLinks={blog.sidebarLinks}
            relatedBlogs={relatedBlogs}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading blog page:", error);
    return <div className="p-10 text-center">Failed to load blog page.</div>;
  }
}

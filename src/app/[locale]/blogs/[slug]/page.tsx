import { getBlogBySlugAction, getRelatedBlogsAction } from "@/actions/blogs";
import { BlogPreviewer } from "@/components/(blogs)/blog-previwer";
import BackButton from "@/components/generals/back-button";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlugAction(params.slug);
  if (!blog) {
    return <div className="p-10 text-center">Blog not found</div>;
  }

  const relatedBlogs = await getRelatedBlogsAction(params.slug);

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-10 py-20">
        <BackButton/>
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


                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>


        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
          {blog.shortDesc}
        </p>
        <BlogPreviewer content={blog?.content}/>




      

        {/* ---------- RELATED BLOGS ---------- */}
        {relatedBlogs.length > 0 && (
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-6">Related Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block border rounded-lg overflow-hidden shadow hover:shadow-md transition"
                >
                  {related.bannerImageUrl && (
                    <div className="relative w-full h-40">
                      <Image
                        src={related.bannerImageUrl}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className=" font-bold text-sm dark:text-gray-300 mb-2  line-clamp-2 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {related.shortDesc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ---------- RIGHT SIDEBAR ---------- */}
      {blog.sidebarLinks?.length > 0 && (
        <aside className="w-full ml-11 md:w-40 flex-shrink-0 md:sticky md:top-6 h-fit  ">
          <h3 className="text-lg font-semibold mb-3 text-center">Quick Links</h3>

          <ul className="flex flex-col gap-2 text-sm ">
            {(blog.sidebarLinks.length === 1
              ? blog.sidebarLinks[0].split(",").map((s) => s.trim()) // ✅ split if single string
              : blog.sidebarLinks
            ).map((link: string, idx: number) => (
              <li key={idx} className="text-center text-[12px]">
                <a
                  href={`#section-${idx}`}
                  className="block text-gray-700 text-[12px] hover:text-blue-600 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          {/* ---------- ADS BELOW QUICK LINKS ---------- */}
<div className="mt-6 space-y-4">
  <div className="w-full h-40 bg-gradient-to-br from-white to-gray-100 border border-gray-300 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105">
    <span className="text-gray-400 text-xs mb-1">Sponsored</span>
    <span className="text-gray-700 font-semibold text-center">Ad 1</span>
  </div>
  <div className="w-full h-40 bg-gradient-to-br from-white to-gray-100 border border-gray-300 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105">
    <span className="text-gray-400 text-xs mb-1">Sponsored</span>
    <span className="text-gray-700 font-semibold text-center">Ad 2</span>
  </div>
</div>

        </aside>
      )}
    </div>
  );
}

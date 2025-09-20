import React from 'react';
import BlogEditor from '@/components/dashboard/(blogs)/blog-editor';
import { getBlogBySlugAction } from '@/actions/blogs';
import BlogFormData from '@/components/(blogs)/blog-from-data';

interface DashboardBlogEditPageProps {
  params: Promise<{ slug: string }>; // 👈 params is now a Promise
}

export default async function DashboardBlogEditPage(props: DashboardBlogEditPageProps) {
  const { slug } = await props.params; // ✅ Await params here

  try {
    const blog = await getBlogBySlugAction(slug);

    if (!blog) {
      return (
        <div className="p-10 text-center text-red-500">
          Blog not found
        </div>
      );
    }

    return (
      <div className="p-6">
  {/* category: initialCategory = "",
  keywords: initialKeywords = "",
  ogImageUrl: initialOg = "",
  sidebarLinks: initialSidebarLinks = [], */}
        <BlogFormData
        title={blog?.title && blog.title}
        shortDesc={blog?.shortDesc && blog.shortDesc}
        slug={blog?.slug && blog.slug}
        bannerImageUrl={blog?.bannerImageUrl && blog.bannerImageUrl}
        category={blog?.bannerImageUrl && blog.category}
        keywords={blog?.keywords && blog.keywords}
        ogImageUrl={blog?.ogImageUrl && blog.ogImageUrl}
        sidebarLinks={blog?.sidebarLinks && blog.sidebarLinks}

        />

        <BlogEditor blog={blog} />
        
      </div>
    );
  } catch (err) {
    console.error('❌ Failed to load blog:', err);
    return (
      <div className="p-10 text-center text-red-500">
        Failed to load blog
      </div>
    );
  }
}

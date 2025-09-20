import { getAllBlogsAction } from '@/actions/blogs';
import { DataTable } from '@/components/dashboard/(blogs)/blog-table';
import React from 'react';
import { AlertCircle } from 'lucide-react'; // ⚠️ Error icon
import Link from 'next/link';

type BlogRow = {
  id: number;
  slug: string;
  header: string;
  type: string;
  status: string;
  content: any;
};

const DashboardBlogsPage = async () => {
  let blogs: BlogRow[] = [];
  let errorMessage: string | null = null;

  try {
    const result = await getAllBlogsAction(); // ✅ get object { blogs, error }

    if ("error" in result && result.error) {
      errorMessage = result.error;
      blogs = [];
    } else {
      const data = "blogs" in result ? result.blogs : result;
      blogs = data.map((b: any) => ({
        id: b?.id,
        slug: b?.slug,
        header: b.header ?? b.title ?? 'Untitled',
        type: b.type ?? b.category ?? 'N/A',
        status: b.status ?? 'Published',
        content: b.content ?? ''
      }));
    }
  } catch (error: any) {
    console.error('❌ Failed to load blogs:', error);
    errorMessage = 'Failed to fetch blogs. Please check the server or database.';
    blogs = [];
  }

  return (
    <div className="p-6">
      {/* Show error banner if there’s an error */}
      {errorMessage && (
        <div className="flex items-center gap-2 mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span className="font-medium">{errorMessage}</span>
        </div>
      )}
      <div className='flex justify-end items-center mb-4'>
        <Link href={`/en/dashboard/blogs/create`} className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Create Blog
        </Link>
      </div>

      {/* Show DataTable only if there is no error */}
      {!errorMessage && <DataTable data={blogs} />}
    </div>
  );
};

export default DashboardBlogsPage;

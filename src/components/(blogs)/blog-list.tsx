"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

type Blog = {
  id: string | number;
  slug: string;
  title: string;
  shortDesc: string;
  bannerImageUrl: string;
  category?: string;
  author?: string;
  createdAt?: string;
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600">
        No blogs available at the moment.
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Latest Articles
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover our latest insights, stories, and updates to stay informed
          and inspired.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="rounded-xl shadow-md overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative w-full">
              <Image
                width={400}
                height={250}
                src={blog?.bannerImageUrl || "/placeholder.jpg"}
                alt={blog.title}
                className="object-cover w-full h-[200px]"
              />
            </div>

            <CardContent className="px-5 py-4">
              {/* ✅ Title: clamp to 3 lines */}
              <h3 className="font-bold mb-2  line-clamp-2">
             
                  {blog.title}
                {/* </Link> */}
              </h3>

              {/* ✅ Short description: clamp to 2 lines */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                {blog.shortDesc}
              </p>

              <Link
                href={`/en/blogs/${blog.slug}`}
                className="inline-block mt-3 text-sm text-blue-600 hover:underline"
              >
                View more ...
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

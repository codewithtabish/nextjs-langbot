import { getAllBlogsAction } from "@/actions/blogs";
import BlogList from "@/components/(blogs)/blog-list";
import React from "react";

const AllBlogs = async () => {
  let blogs: any[] = [];

  try {
    blogs = await getAllBlogsAction(); // ✅ Fetch from API with server action
  } catch (error) {
    console.error("❌ Failed to load blogs:", error);
    // fallback to empty list so UI won’t break
    blogs = [];
  }

  return (
    <div className="min-h-screen py-10">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default AllBlogs;

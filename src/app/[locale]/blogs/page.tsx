import { getAllBlogsAction } from "@/actions/blogs";
import BlogList from "@/components/(blogs)/blog-list";
import React from "react";
import { AlertCircle } from "lucide-react";
import BackButton from "@/components/generals/back-button";

const AllBlogs = async () => {
  const { blogs, error } = await getAllBlogsAction();

  return (
    <div className="min-h-screen py-10 px-6">
      <BackButton/>
      {error ? (
        <div className="flex items-center gap-2 mb-6 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span className="font-medium">{error}</span>
        </div>
      ) : (
        <BlogList blogs={blogs} />
      )}
    </div>
  );
};

export default AllBlogs;

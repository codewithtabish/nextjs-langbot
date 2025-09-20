"use client";

import React, { ChangeEvent } from "react";
import Image from "next/image";
import { categories } from "@/constants/data";

interface CreateBlogMetaFormProps {
  content?: any;
  title: string;
  setTitle: (val: string) => void;
  shortDesc: string;
  setShortDesc: (val: string) => void;
  category: string;
  setCategory: (val: string) => void;
  bannerImageUrl: string;
  setBannerImageUrl: (val: string) => void;
  ogImageUrl: string;
  setOgImageUrl: (val: string) => void;
  sidebarLinks: string;
  setSidebarLinks: (val: string) => void;
}

const CreateBlogMetaForm: React.FC<CreateBlogMetaFormProps> = ({
  content,
  title,
  setTitle,
  shortDesc,
  setShortDesc,
  category,
  setCategory,
  bannerImageUrl,
  setBannerImageUrl,
  ogImageUrl,
  setOgImageUrl,
  sidebarLinks,
  setSidebarLinks,
}) => {
  // Generic uploader
  const uploadFile = async (
    file: File,
    setter: (url: string) => void,
    endpoint: string
  ) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(endpoint, { method: "POST", body: formData });
      const data = await res.json();
      if (data.file?.url) setter(data.file.url);
    } catch (err) {
      console.error(`Upload failed to ${endpoint}:`, err);
    }
  };

  const handleBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadFile(e.target.files[0], setBannerImageUrl, "/api/upload-file");
    }
  };

  const handleOgImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadFile(e.target.files[0], setOgImageUrl, "/api/upload-og"); // ✅ new endpoint
    }
  };

  return (
    <form className="max-w-6xl mx-auto space-y-6">
      {/* Title */}
      <div>
        <label className="block mb-1 font-semibold">Title *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter blog title"
          required
        />
      </div>

      {/* Short Description */}
      <div>
        <label className="block mb-1 font-semibold">Short Description *</label>
        <textarea
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a short description"
          rows={3}
          required
        />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-1 font-semibold">Category *</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Sidebar Links */}
      <div>
        <label className="block mb-1 font-semibold">
          Sidebar Links (comma separated)
        </label>
        <textarea
          value={sidebarLinks}
          onChange={(e) => setSidebarLinks(e.target.value)}
          className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter links separated by commas"
          rows={2}
        />
      </div>

      {/* Banner Image */}
      <div>
        <label className="block mb-1 my-3 font-semibold">Banner Image</label>
        {!bannerImageUrl ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleBannerChange}
            className="block mb-2"
          />
        ) : (
          <div className="flex items-center gap-4">
            <Image
              src={bannerImageUrl}
              alt="Banner Preview"
              width={120}
              height={120}
              className="object-cover rounded-lg border max-h-[120px]"
            />
            <button
              type="button"
              onClick={() => setBannerImageUrl("")}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      {/* OG Image */}
      <div>
        <label className="block mb-1 my-3 font-semibold">OG Image</label>
        {!ogImageUrl ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleOgImageChange}
            className="block mb-2"
          />
        ) : (
          <div className="flex items-center gap-4">
            <Image
              src={ogImageUrl}
              alt="OG Preview"
              width={120}
              height={120}
              className="object-cover rounded-lg border"
            />
            <button
              type="button"
              onClick={() => setOgImageUrl("")}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default CreateBlogMetaForm;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { generateSlug } from "@/utils/slug";

interface BlogFormDataProps {
  slug: string;
  title: string;
  shortDesc: string;
  bannerImageUrl: string;
  category?: string;
  keywords?: string;
  ogImageUrl?: string;
  sidebarLinks?: string[];
}

const BlogFormData: React.FC<BlogFormDataProps> = ({
  slug,
  title: initialTitle,
  shortDesc: initialShortDesc,
  bannerImageUrl: initialBanner,
  category: initialCategory = "",
  keywords: initialKeywords = "",
  ogImageUrl: initialOg = "",
  sidebarLinks: initialSidebarLinks = [],
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [shortDesc, setShortDesc] = useState(initialShortDesc);
  const [bannerImage, setBannerImage] = useState(initialBanner);
  const [ogImage, setOgImage] = useState(initialOg);
  const [category, setCategory] = useState(initialCategory);
  const [keywords, setKeywords] = useState(initialKeywords);
  const [sidebarLinks, setSidebarLinks] = useState(
    initialSidebarLinks.filter(Boolean).map((s) => s.trim()).join(", ")
  );
  const [uploadingBanner, setUploadingBanner] = useState(false);
  const [uploadingOg, setUploadingOg] = useState(false);
  const [saving, setSaving] = useState(false);

  // Generic image uploader with loading indicator
  const uploadImage = async (
    file: File,
    setter: (url: string) => void,
    setLoading: (v: boolean) => void
  ) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload-file", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data?.file?.url) {
        setter(data.file.url); // Update image immediately
      } else {
        console.error("No file URL returned", data);
        alert("Upload failed: no URL returned");
      }
    } catch (err) {
      console.error("Upload failed", err);
      alert("Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  // Save blog updates
  const handleSave = async () => {
    setSaving(true);
    try {
      const newSlug = generateSlug(title);

      const res = await fetch(`/api/blogs/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: newSlug,
          title,
          shortDesc,
          bannerImageUrl: bannerImage,
          ogImageUrl: ogImage,
          sidebarLinks: sidebarLinks
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        }),
      });

      if (!res.ok) throw new Error("Failed to update blog");
      alert("✅ Blog updated successfully");
    } catch (err) {
      console.error(err);
      alert("Error updating blog");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="border rounded-xl p-6 space-y-6 bg-white dark:bg-slate-900 shadow max-w-3xl mx-auto">
      {/* Banner Image */}
      <ImageUploader
        label="Banner Image"
        imageUrl={bannerImage}
        uploading={uploadingBanner}
        onFileSelect={(file) => uploadImage(file, setBannerImage, setUploadingBanner)}
        onRemove={() => setBannerImage("")}
      />

      {/* OG Image */}
      <ImageUploader
        label="Open Graph (OG) Image"
        imageUrl={ogImage}
        uploading={uploadingOg}
        onFileSelect={(file) => uploadImage(file, setOgImage, setUploadingOg)}
        onRemove={() => setOgImage("")}
      />

      {/* Title */}
      <InputField label="Title" value={title} onChange={setTitle} />

      {/* Short Description */}
      <TextAreaField label="Short Description" value={shortDesc} onChange={setShortDesc} />

      {/* Category */}
      {/* <InputField label="Category" value={category} onChange={setCategory} /> */}

      {/* Keywords */}
      {/* <InputField label="Keywords" value={keywords} onChange={setKeywords} /> */}

      {/* Sidebar Links */}
      <InputField
        label="Sidebar Links (comma separated URLs)"
        value={sidebarLinks}
        onChange={setSidebarLinks}
        placeholder="e.g. /link1, /link2"
      />

      {/* Actions */}
      <div className="flex gap-4 pt-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "💾 Save"}
        </button>

      </div>
    </div>
  );
};

export default BlogFormData;

/* ------------------ Reusable Components ------------------ */

function ImageUploader({
  label,
  imageUrl,
  uploading,
  onFileSelect,
  onRemove,
}: {
  label: string;
  imageUrl: string;
  uploading: boolean;
  onFileSelect: (file: File) => void;
  onRemove: () => void;
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">{label}</label>
      <div className="relative w-full h-56 border rounded-lg overflow-hidden flex justify-center items-center bg-gray-100 dark:bg-gray-800">
        {imageUrl && (
          <Image
            key={imageUrl} // force re-render when URL changes
            src={imageUrl}
            alt={label}
            fill
            className="object-cover transition-opacity duration-300"
          />
        )}

        {/* Upload overlay */}
        {uploading && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium text-lg">
            Uploading...
          </div>
        )}

        {/* Upload button */}
        {!uploading && (
          <label className="absolute cursor-pointer text-blue-500 underline">
            {imageUrl ? "Change Image" : "Select Image"}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onFileSelect(file);
              }}
            />
          </label>
        )}

        {/* Remove button */}
        {imageUrl && !uploading && (
          <button
            onClick={onRemove}
            className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black/70"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border rounded-md p-2 bg-white dark:bg-slate-800"
      />
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-md p-2 h-24 bg-white dark:bg-slate-800"
      />
    </div>
  );
}

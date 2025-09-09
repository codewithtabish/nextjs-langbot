"use client";

import React, { useState, DragEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Upload,
  FileText,
  FileJson,
  FileSpreadsheet,
  FileType,
  FileCode,
  File,
} from "lucide-react";

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Allowed extensions
  const allowedExtensions = [
    "pdf",
    "txt",
    "csv",
    "json",
    "docx",
    "pptx",
    "xlsx",
    "html",
  ];

  // Map extension -> icon
  const getFileIcon = (ext: string) => {
    switch (ext) {
      case "pdf":
      case "txt":
        return <FileText className="w-5 h-5 text-red-500" />;
      case "json":
      case "html":
        return <FileCode className="w-5 h-5 text-blue-500" />;
      case "csv":
      case "xlsx":
        return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
      case "docx":
      case "pptx":
        return <FileType className="w-5 h-5 text-purple-500" />;
      default:
        return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  const handleFile = (selectedFile: File) => {
    const extension = selectedFile.name.split(".").pop()?.toLowerCase();

    if (!extension || !allowedExtensions.includes(extension)) {
      toast.error(
        `❌ Invalid file type. Allowed: ${allowedExtensions.join(", ")}`
      );
      setFile(null);
      return;
    }

    setFile(selectedFile);
    toast.success("✅ File is valid!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("⚠️ Please select a valid file first!");
      return;
    }

    try {
      setUploading(true);

      // Create form data
      const formData = new FormData();
      formData.append("file", file);

      // Send to your API (replace with your endpoint, e.g. S3 presigned)
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      toast.success(`🚀 Uploaded: ${file.name}`);
      setFile(null);
    } catch (err) {
      toast.error("❌ Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <div
        className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition cursor-pointer ${
          dragActive
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
            : "border-gray-300 hover:border-gray-400 dark:border-gray-600"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-3" />
        <p className="text-gray-600 dark:text-gray-300 font-medium">
          Drag & drop your file here, or{" "}
          <span className="text-blue-600 dark:text-blue-400">browse</span>
        </p>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
          accept={allowedExtensions.map((ext) => `.${ext}`).join(",")}
        />
      </div>

      {file && (
        <div className="mt-4 flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 shadow-sm">
          {getFileIcon(file.name.split(".").pop() || "")}
          <span className="truncate">{file.name}</span>
        </div>
      )}

      <Button
      variant={'outline'}
        onClick={handleUpload}
        className="w-full mt-5 rounded-xl font-semibold py-6"
        disabled={!file || uploading}
      >
        {uploading ? "Uploading..." : "Upload File"}
      </Button>
    </div>
  );
}

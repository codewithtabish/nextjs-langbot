"use client";

import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import CreateBlogMetaForm from "./blog-form-data";
import { BlogPreviewer } from "@/components/(blogs)/blog-previwer";
import { Button } from "@/components/ui/button";
import { ChevronUpCircle, Eye } from "lucide-react";

type EditorJSInstance = any;

const CreateBlogEditor: React.FC = () => {
  const editorRef = useRef<EditorJSInstance | null>(null);
  const holderId = "editorjs";

  const [isReady, setIsReady] = useState(false);
  const [savedData, setSavedData] = useState<any>({ blocks: [] });
  const [overlay, setOverlay] = useState<"none" | "json" | "preview">("none");
  const [loading, setLoading] = useState(false);

  // Meta form states
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [category, setCategory] = useState("");
  const [bannerImageUrl, setBannerImageUrl] = useState("");
  const [ogImageUrl, setOgImageUrl] = useState("");
  const [sidebarLinks, setSidebarLinks] = useState("");

  // Initialize EditorJS
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (editorRef.current) return;

      const EditorJS = (await import("@editorjs/editorjs")).default;
      const Header = (await import("@editorjs/header")).default;
      const RawTool = (await import("@editorjs/raw")).default;
      const Checklist = (await import("@editorjs/checklist")).default;
      const EditorjsList = (await import("@editorjs/list")).default;
      const Embed = (await import("@editorjs/embed")).default;
      const Quote = (await import("@editorjs/quote")).default;
      const Warning = (await import("@editorjs/warning")).default;
      const CodeTool = (await import("@editorjs/code")).default;
      const Delimiter = (await import("@editorjs/delimiter")).default;
      const Marker = (await import("@editorjs/marker")).default;
      const ImageTool = (await import("@editorjs/image")).default;
      const InlineImage = (await import("editorjs-inline-image")).default;
      const MermaidTool = (await import("editorjs-mermaid")).default;
      const Title = (await import("title-editorjs")).default;
      const TextStyleTool = (await import("@skchawala/editorjs-text-style")).default;
      const ColorPicker = (await import("editorjs-color-picker")).default;

      const editor = new EditorJS({
        holder: holderId,
        autofocus: true,
        placeholder: "Start writing your blog here...",
        data: { blocks: [] },
        tools: {
          header: { class: Header, inlineToolbar: true },
          title: Title,
          raw: RawTool,
          checklist: { class: Checklist, inlineToolbar: true },
          list: { class: EditorjsList, inlineToolbar: true },
          embed: Embed,
          quote: Quote,
          warning: Warning,
          code: CodeTool,
          delimiter: Delimiter,
          marker: { class: Marker, inlineToolbar: true },
          mermaid: { class: MermaidTool, config: { theme: "forest" } },
          ColorPicker: { class: ColorPicker as any },
          image: {
            class: ImageTool,
            config: { endpoints: { byFile: "/api/upload-file" }, field: "file", types: "image/*" },
          },
          inlineImage: {
            class: InlineImage,
            inlineToolbar: true,
            config: { endpoints: { byFile: "/api/upload-file", unsplashSearch: "/api/unsplash" }, field: "file", types: "image/*", embed: { display: true } },
          },
          textStyle: { class: TextStyleTool, config: { fontSizeEnabled: true, fontFamilyEnabled: true } },
        },
        onChange: async () => {
          if (editorRef.current) {
            const saved = await editorRef.current.save();
            setSavedData(saved);
          }
        },
      });

      editorRef.current = editor;
      await editor.isReady;
      if (mounted) setIsReady(true);
    };

    init();

    return () => {
      mounted = false;
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  // Handle Save
  const handleSave = async () => {
    try {
      setLoading(true);
      toast.info("Saving content...");

      // Get latest editor data
      const latestData = editorRef.current ? await editorRef.current.save() : savedData;
      setSavedData(latestData);

      // Slug & canonical URL
      const slug = title ? title.toLowerCase().replace(/\s+/g, "-") : "new-blog";
      const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${slug}`;

      // Convert sidebarLinks to array
      const sidebarLinksArray = sidebarLinks
        .split(",")
        .map((l) => l.trim())
        .filter((l) => l.length > 0);

      // Generate SEO
      const seoRes = await fetch("/api/generate-meta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, shortDesc, category, slug }),
      });

      const seoData = await seoRes.json();
      if (seoData.error) throw new Error(seoData.error);

      // Save blog
      const blogRes = await fetch("/api/blogs/create-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          shortDesc,
          category,
          bannerImageUrl,
          ogImageUrl,
          canonicalUrl,
          sidebarLinks: sidebarLinksArray,
          slug,
          seo: seoData,
          content: latestData,
        }),
      });

      const createdBlog = await blogRes.json();
      if (!createdBlog.success) throw new Error(createdBlog.error || "Failed to create blog");

      toast.success("Blog saved successfully ✅");
    } catch (error: any) {
      console.error("Save error:", error);
      toast.error(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 space-y-6">
      {/* Toolbar */}
      <div className="flex gap-3 justify-end sticky top-0 z-10">
        <Button
          className="text-sm"
          variant={overlay === "json" ? "default" : "outline"}
          onClick={() => setOverlay(overlay === "json" ? "none" : "json")}
        >
          <Eye />
        </Button>
        <Button
          className="text-sm"
          variant={overlay === "preview" ? "default" : "outline"}
          onClick={() => setOverlay(overlay === "preview" ? "none" : "preview")}
        >
          <ChevronUpCircle />
        </Button>
      </div>

      {/* Meta Form */}
      <CreateBlogMetaForm
        content={savedData}
        title={title}
        setTitle={setTitle}
        shortDesc={shortDesc}
        setShortDesc={setShortDesc}
        category={category}
        setCategory={setCategory}
        bannerImageUrl={bannerImageUrl}
        setBannerImageUrl={setBannerImageUrl}
        ogImageUrl={ogImageUrl}
        setOgImageUrl={setOgImageUrl}
        sidebarLinks={sidebarLinks}
        setSidebarLinks={setSidebarLinks}
      />

      {/* EditorJS container */}
      <div id={holderId} className="p-4 min-h-[500px] border rounded-lg">
        {!isReady && <div className="text-sm text-muted-foreground">Loading editor…</div>}
      </div>

      {/* JSON Output */}
      {overlay === "json" && (
        <div className="mt-6 bg-white dark:bg-slate-900 p-4 border rounded-lg overflow-auto shadow">
          <pre className="text-sm">{JSON.stringify(savedData, null, 2)}</pre>
        </div>
      )}

      {/* Preview */}
      {overlay === "preview" && (
        <div className="mt-6 p-4 border rounded-lg overflow-auto shadow">
          <BlogPreviewer content={savedData} />
        </div>
      )}

      {/* Save Button */}
      <div className="flex justify-center">
        <Button className="mt-4 w-1/2 mx-auto p-4" onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "SAVE BLOG"}
        </Button>
      </div>
    </div>
  );
};

export default CreateBlogEditor;

"use client";

import { BlogPreviewer } from "@/components/(blogs)/blog-previwer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import React, { useEffect, useRef, useState } from "react";
import CreateBlogMetaForm from "@/components/dashboard/(blogs)/(create)/blog-form-data";

type SuggestionItem = {
  id: string | number;
  name: string;
  avatar?: string;
  slug?: string;
};

const DEFAULT_SUGGESTIONS: SuggestionItem[] = [
  { id: "1", name: "Alice Johnson", avatar: "https://i.pravatar.cc/40?img=1", slug: "alice" },
  { id: "2", name: "Bob Martin", avatar: "https://i.pravatar.cc/40?img=2", slug: "bob" },
  { id: "3", name: "Charlie Smith", avatar: "https://i.pravatar.cc/40?img=3", slug: "charlie" },
];

type BlogEditorProps = {
  blog: { slug: string; content?: any };       // ✅ require slug to update
  mentionSuggestions?: SuggestionItem[];
  fetchSuggestions?: (query: string) => Promise<SuggestionItem[]>;
  onChange?: (data: any) => void;
};

const BlogEditor: React.FC<BlogEditorProps> = ({
  blog,
  mentionSuggestions,
  fetchSuggestions,
  onChange,
}) => {
  const editorRef = useRef<any>(null);
  const holderId = "editorjs";
  const [isReady, setIsReady] = useState(false);
  const [savedData, setSavedData] = useState<any>(blog?.content ?? {});
  const [overlay, setOverlay] = useState<"none" | "json" | "preview">("none");
  const [loading, setLoading] = useState(false);

  // ✅ Init EditorJS
  useEffect(() => {
    let mounted = true;

    const getSuggestions = async (query: string) => {
      if (typeof fetchSuggestions === "function") {
        return fetchSuggestions(query).catch(() => []);
      }
      const q = (query || "").trim().toLowerCase();
      const list = mentionSuggestions ?? DEFAULT_SUGGESTIONS;
      return list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          (s.slug || "").toLowerCase().includes(q)
      );
    };

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
      const MentionTool = (await import("editorjs-mention-tool")).default;
      const MermaidTool = (await import("editorjs-mermaid")).default;
      const Title = (await import("title-editorjs")).default;
      const TextStyleTool = (await import("@skchawala/editorjs-text-style")).default;
      const ColorPicker = (await import("editorjs-color-picker")).default;

      const editor = new EditorJS({
        holder: holderId,
        autofocus: true,
        placeholder: "Start writing here...",
        data: blog?.content ?? {},
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

          mention: {
            class: MentionTool,
            inlineToolbar: true,
            config: {
              accessKey: "@",
              allUsers: mentionSuggestions ?? DEFAULT_SUGGESTIONS,
              fetch: getSuggestions,
            },
          },

          image: {
            class: ImageTool,
            config: {
              endpoints: { byFile: "/api/upload-file" },
              field: "file",
              types: "image/*",
            },
          },

          // textStyle: {
            // class: TextStyleTool,
            // config: { fontSizeEnabled: true, fontFamilyEnabled: true },
          // },

          inlineImage: {
            class: InlineImage,
            inlineToolbar: true,
            config: {
              endpoints: {
                byFile: "/api/upload-file",
                unsplashSearch: "/api/unsplash",
              },
              field: "file",
              types: "image/*",
              embed: { display: true },
            },
          },
        },
        onChange: async () => {
          if (editorRef.current) {
            const saved = await editorRef.current.saver.save();
            setSavedData(saved);
            onChange?.(saved);
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
  }, [blog, mentionSuggestions, fetchSuggestions, onChange]);

  // ✅ Update Content API Call
  const updateContent = async () => {
    try {
      setLoading(true);
      toast.info("Updating content...");

      // ensure latest saved data
      let latestData = savedData;
      if (editorRef.current) {
        latestData = await editorRef.current.saver.save();
        setSavedData(latestData);
      }

      const res = await fetch(`/api/blogs/${blog.slug}/content`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: latestData }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to update content");
      }

      toast.success("Content updated successfully ✅");
    } catch (error: any) {
      console.error("Update error:", error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* ✅ Toggle Buttons - Always Visible */}
      <div className="flex gap-3 mb-4 justify-center sticky top-0 bg-background z-10 p-2">
        <Button
          variant={overlay === "json" ? "default" : "outline"}
          onClick={() => setOverlay((v) => (v === "json" ? "none" : "json"))}
        >
          {overlay === "json" ? "Back to Editor" : "View JSON"}
        </Button>

        <Button
          variant={overlay === "preview" ? "default" : "outline"}
          onClick={() => setOverlay((v) => (v === "preview" ? "none" : "preview"))}
        >
          {overlay === "preview" ? "Back to Editor" : "Preview"}
        </Button>
      </div>

      {/* ✅ Editor - Always Visible */}
      <div
        id={holderId}
        className="border rounded p-2 min-h-[400px] bg-white dark:bg-slate-900"
      >
        {!isReady && (
          <div className="text-sm text-muted-foreground">Loading editor…</div>
        )}
      </div>


      {/* ✅ Below Editor Views */}
      {overlay === "json" && (
        <div className="mt-6 bg-white dark:bg-slate-900 p-4 border rounded overflow-auto">
          <pre className="text-sm">{JSON.stringify(savedData, null, 2)}</pre>
        </div>
      )}

      {overlay === "preview" && (
        <div className="mt-6 p-4 border rounded overflow-auto">
          <BlogPreviewer content={savedData} />
        </div>
      )}

      {/* ✅ Save Button */}
      <Button
        className="mt-4 w-full sm:w-auto"
        onClick={updateContent}
        disabled={loading}
      >
        {loading ? "Updating..." : "UPDATE CONTENT"}
      </Button>
    </div>
  );
};

export default BlogEditor;

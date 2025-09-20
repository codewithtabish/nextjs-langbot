'use client';

import React, { useState, useEffect } from 'react';
import createDOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import Link from 'next/link';

type Block = any;
type RelatedBlog = { slug: string; title: string; bannerImageUrl?: string };

type Props = {
  content: { blocks: Block[] };
  sidebarLinks: string[];
  relatedBlogs: RelatedBlog[];
};

const DOMPurify = typeof window !== 'undefined' ? createDOMPurify(window) : null;

const MermaidBlock: React.FC<{ code: string; caption?: string }> = ({ code, caption }) => {
  useEffect(() => {
    import('mermaid').then((m) => {
      m.default.initialize({ startOnLoad: true });
      m.default.contentLoaded();
    });
  }, [code]);
  if (!code) return null;
  return (
    <div className="mb-2 mt-2 flex flex-col my-5 items-center justify-center">
      <hr className="mb-4 border-b border-gray-400 w-full" />
      {caption && <p className="font-semibold mb-2 text-center">{caption}</p>}
      <div className="w-full flex justify-center overflow-hidden">
        <div className="mermaid text-xl mx-auto text-center" style={{ width: '800px', height: '450px' }}>
          {code}
        </div>
      </div>
    </div>
  );
};

const ImageBlock: React.FC<{ file?: any; caption?: string }> = ({ file, caption }) => {
  if (!file?.url) return null;
  return (
    <div className="my-6 flex flex-col items-center">
      <Image
        src={file.url}
        alt={caption || 'Image'}
        width={800}
        height={350}
        className="object-contain max-h-[350px] rounded"
      />
      {caption && <p className="mt-2 text-gray-500 text-sm">{caption}</p>}
    </div>
  );
};

const CodeBlock: React.FC<{ code?: string }> = ({ code }) => {
  if (!code) return null;
  return (
    <pre className="mb-4 overflow-x-auto p-4 bg-gray-300 dark:bg-gray-800 rounded text-sm">
      <code>{code}</code>
    </pre>
  );
};

export const BlogWithSideBarPreviewer: React.FC<Props> = ({
  content,
  sidebarLinks,
  relatedBlogs,
}) => {
  const [openToggles, setOpenToggles] = useState<Record<string, boolean>>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Track active heading while scrolling
  useEffect(() => {
    const headings = sidebarLinks
      .map((text) => document.getElementById(text.replace(/\s+/g, '-').toLowerCase()))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      let currentId: string | null = null;
      for (const heading of headings) {
        if (heading.offsetTop <= scrollPos) {
          currentId = heading.id;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [sidebarLinks]);

  const renderHTML = (html: string) => ({
    __html: DOMPurify?.sanitize(html || '') || '',
  });

  const alertClasses: Record<string, string> = {
    primary: 'bg-blue-100 border border-blue-400 text-blue-800',
    secondary: 'bg-gray-100 border border-gray-400 text-gray-800',
    info: 'bg-sky-100 border border-sky-400 text-sky-800',
    success: 'bg-green-100 border border-green-400 text-green-800',
    warning: 'bg-yellow-100 border border-yellow-400 text-yellow-800',
    danger: 'bg-red-100 border border-red-400 text-red-800',
    light: 'bg-white border border-gray-300 text-gray-900',
    dark: 'bg-gray-800 border border-gray-900 text-white',
  };

  const alignClasses: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const handleToggleClick = (id: string) =>
    setOpenToggles((prev) => ({ ...prev, [id]: !prev[id] }));

  if (!content?.blocks?.length) return null;

  return (
    <div className="  grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* {JSON.stringify(relatedBlogs)} */}
            {/* ---------- STATIC SIDEBAR (No scroll inside) ---------- */}

      {/* ---------- LEFT: Blog Content ---------- */}
      <div className="lg:col-span-3 prose dark:prose-invert max-w-none">
        {content.blocks.map((block: Block, index: number) => {
          const type = block.type.toLowerCase();
          switch (type) {
            case 'toggle': {
              const isOpen = openToggles[block.id] ?? block.data.status === 'open';
              return (
                <div key={index} className="mb-4 border rounded-md shadow-sm">
                  <button
                    onClick={() => handleToggleClick(block.id)}
                    className="w-full text-left px-4 py-2 bg-gray-100 dark:bg-gray-700 font-semibold flex justify-between items-center"
                  >
                    <span>{block.data.text}</span>
                    <span>{isOpen ? '▼' : '►'}</span>
                  </button>
                  {isOpen && block.data.itemsContent && (
                    <div
                      className="px-4 py-2 dark:text-gray-400"
                      dangerouslySetInnerHTML={renderHTML(block.data.itemsContent)}
                    />
                  )}
                </div>
              );
            }

            case 'paragraph':
            case 'aitext':
              return (
                <p
                  key={index}
                  className="text-justify leading-loose text-lg text-gray-800 dark:text-gray-400 mb-4"
                  dangerouslySetInnerHTML={renderHTML(block.data.text)}
                />
              );

            case 'mermaid':
              return (
                <MermaidBlock
                  key={index}
                  code={block.data.code || ''}
                  caption={block.data.caption}
                />
              );

            case 'image':
              return <ImageBlock key={index} file={block.data.file} caption={block.data.caption} />;

            case 'code':
              return <CodeBlock key={index} code={block.data.code} />;

            case 'header': {
              const Tag =
                block.data.level === 1
                  ? 'h1'
                  : block.data.level === 2
                  ? 'h2'
                  : block.data.level === 3
                  ? 'h3'
                  : 'h4';
              const id = block.data.text.replace(/\s+/g, '-').toLowerCase();
              const classes =
                block.data.level === 1
                  ? 'text-4xl font-bold mt-5 mb-4'
                  : block.data.level === 2
                  ? 'text-3xl font-semibold mt-5 mb-1'
                  : block.data.level === 3
                  ? 'text-2xl font-semibold mt-8 mb-1'
                  : 'text-xl font-semibold mt-6 mb-1';
              return (
                <Tag key={index} id={id} className={classes}>
                  {block.data.text}
                </Tag>
              );
            }

            case 'list': {
              const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
              const listClass =
                block.data.style === 'ordered'
                  ? 'list-decimal list-inside space-y-1'
                  : 'list-disc list-inside space-y-1';
              return (
                <ListTag key={index} className={listClass}>
                  {block.data.items.map((item: any, i: number) => (
                    <li
                    className='py-1'
                      key={i}
                      dangerouslySetInnerHTML={renderHTML(
                        typeof item === 'string' ? item : item.content || ''
                      )}
                    />
                  ))}
                </ListTag>
              );
            }

            case 'quote':
              return (
                <blockquote
                  key={index}
                  className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-300 mb-4"
                >
                  {block.data.text}
                  {block.data.caption && (
                    <footer className="mt-2 text-sm text-gray-400">— {block.data.caption}</footer>
                  )}
                </blockquote>
              );

            case 'alert':
              return (
                <div
                  key={index}
                  className={`mb-4 p-4 rounded ${alertClasses[block.data.type || 'primary']} ${
                    alignClasses[block.data.align || 'left']
                  }`}
                  dangerouslySetInnerHTML={renderHTML(block.data.message)}
                />
              );

            default:
              return null;
          }
        })}


        {/* ---------- Related Blogs ---------- */}
{relatedBlogs?.length > 0 && (
  <div className="mt-12 border-t pt-8">
    <h2 className="text-2xl font-semibold mb-6">Related Blogs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {relatedBlogs.map((blog) => (
        <Link
          key={blog.slug}
          href={`/en/blogs/${blog.slug}`}
          className="group block border rounded-lg overflow-hidden shadow hover:shadow-md transition"
        >
          {blog.bannerImageUrl && (
            <div className="relative w-full h-40">
              <Image
                src={blog.bannerImageUrl}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="font-bold text-sm dark:text-gray-300 mb-2 line-clamp-2 transition-colors">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
              {
                // @ts-ignore
              blog.shortDesc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
)}


 
      </div>

      <aside className="lg:col-span-1 space-y-8 flex justify-center">
  {sidebarLinks?.length > 0 && (
    <div className="sticky top-24 self-start">   {/* ✅ Keeps sidebar fixed on screen */}
      <h3 className="font-semibold text-lg mb-3 text-center text-gray-800 dark:text-gray-200">
        Quick Links
      </h3>
      <ul className="space-y-2">
        {sidebarLinks.map((text, idx) => {
          const id = text.replace(/\s+/g, '-').toLowerCase();
          const isActive = activeId === id;
          return (
            <li key={idx}>
              <button
                onClick={() => {
                  const el = document.getElementById(id);
                  el?.scrollIntoView({ behavior: 'smooth' });
                  setActiveId(id);
                }}
                className={`block w-full text-left border-l-4 px-2 py-1 rounded transition-colors
                  ${
                    isActive
                      ? 'border-blue-600 text-blue-600 font-semibold bg-blue-50 dark:bg-blue-900/20'
                      : 'border-transparent text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:border-blue-500'
                  }`}
              >
                {text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  )}
</aside>




    </div>
  );
};

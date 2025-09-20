-- CreateTable
CREATE TABLE "public"."Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDesc" TEXT NOT NULL,
    "content" JSONB,
    "category" TEXT NOT NULL,
    "bannerImageUrl" TEXT NOT NULL,
    "ogImageUrl" TEXT NOT NULL,
    "sidebarLinks" TEXT[],
    "seoId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Seo" (
    "id" TEXT NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "ogTitle" TEXT NOT NULL,
    "ogDescription" TEXT NOT NULL,
    "tags" TEXT[],
    "keywords" TEXT[],
    "canonicalUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Blog_seoId_key" ON "public"."Blog"("seoId");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_slug_key" ON "public"."Blog"("slug");

-- AddForeignKey
ALTER TABLE "public"."Blog" ADD CONSTRAINT "Blog_seoId_fkey" FOREIGN KEY ("seoId") REFERENCES "public"."Seo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

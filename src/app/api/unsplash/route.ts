import { uploadFileToS3 } from "@/lib/s3-utils";
import { NextResponse } from "next/server";

// ✅ Match: /api/unsplash/search/photos?query=xyz
export async function GET(req: Request) {
  try {
    const { searchParams, pathname } = new URL(req.url);
    console.log('I AM IN UNSPLASH ROUTE')

    // Unsplash inlineImage sends /search/photos
    const query = searchParams.get("query");
    if (!query) {
      return NextResponse.json(
        { success: 0, error: "Missing search query" },
        { status: 400 }
      );
    }

    const perPage = searchParams.get("per_page") || "30";

    // 1️⃣ Call Unsplash API
    const unsplashRes = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        query
      )}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!unsplashRes.ok) {
      throw new Error(`Unsplash API error: ${unsplashRes.statusText}`);
    }

    const unsplashData = await unsplashRes.json();

    // InlineImage only needs a list of results, not S3 upload
    return NextResponse.json(unsplashData);
  } catch (err: any) {
    console.error("Unsplash API proxy error:", err);
    return NextResponse.json(
      { success: 0, error: err.message || "Upload failed" },
      { status: 500 }
    );
  }
}

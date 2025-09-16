import { getAllBlogsAction } from '@/actions/blogs'
import { DataTable } from '@/components/dashboard/(blogs)/blog-table'
import React from 'react'

type BlogRow = {
  id: number
  header: string
  type: string
  status: string
  slug:string
}

const DashboardBlogsPage = async () => {
  let blogs: any[] = []

  try {
    const data = await getAllBlogsAction()
    // Map only required fields
    blogs = data.map((b: any) => ({
      id: b?.id,
      slug: b?.slug,
      header: b.header ?? b.title ?? 'Untitled',
      type: b.type ?? b.category ?? 'N/A',
      status: b.status ?? 'Published',
    }))
  } catch (error) {
    console.error("❌ Failed to load blogs:", error)
    blogs = []
  }

  return (
    <div className="p-6">
      <DataTable data={blogs} />
    </div>
  )
}

export default DashboardBlogsPage

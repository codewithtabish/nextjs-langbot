'use client'

import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="h-8 w-auto">
      <Image
        src="/logo.svg"   // path from public folder
        alt="Logo"
        width={120}       // adjust width as needed
        height={32}       // adjust height as needed
        priority          // optional: makes logo load faster
      />
    </div>
  )
}

export default Logo

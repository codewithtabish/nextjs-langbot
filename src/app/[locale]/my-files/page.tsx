import ChatFilesCard from '@/components/generals/(my-files)/chat-file-card'
import SummaryFilesCard from '@/components/generals/(my-files)/chat-summary-card'
import React from 'react'

const MyFileMainPage = () => {
  return (
         <main className="md:min-w-6xl md:max-w-6xl mx-auto py-12  min-h-screen">
      <div className="flex gap-10 w-full ">
        <div className='flex-1'>
        <SummaryFilesCard />

        </div>
        <div className='flex-1'>
        <ChatFilesCard />

        </div>
      </div>
    </main>
    
  )
}

export default MyFileMainPage

import React from 'react'
import SummaryHeaderTitle from './summary-header-title'

const SummaryTopHeader = () => {
  return (
    <div className='md:max-w-4xl mx-auto flex justify-center flex-col'>
        <SummaryHeaderTitle text='Your Summarized Files'/>
        <p className="mt-4 text-base md:text-lg text-gray-600 md:max-w-[80%] mx-auto dark:text-gray-300 leading-relaxed">
          Manage, explore, and access all your summarized files in one
          organized space. Each summary gives you the essence of your content —
          clear, concise, and ready whenever you need it.
        </p>
      
    </div>
  )
}

export default SummaryTopHeader

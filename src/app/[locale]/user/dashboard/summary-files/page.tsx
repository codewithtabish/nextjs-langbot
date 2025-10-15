import SummaryList from '@/components/(user-dashboard)/summary/summary-list'
import SummaryTopHeader from '@/components/(user-dashboard)/summary/summary-top-header'
import React from 'react'

const SummaryFiles = () => {
  return (
    <div className='min-h-screen pb-32 '>
      <SummaryTopHeader/>
     <SummaryList/>

    </div>
  )
}

export default SummaryFiles



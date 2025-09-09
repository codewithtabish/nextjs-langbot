import DashboardBentoGrid from '@/components/dashboard/(main)/dashboard-bento-grid'
import { DashboardSectionCards } from '@/components/dashboard/(main)/dashboard-section-card'
import { ChartAreaInteractive } from '@/components/dashboard/(main)/interactive-chart'
import { ModeToggle } from '@/components/generals/mode-toggle'
import React from 'react'

const DashboardHomePage = () => {
  return (
    <
  div
    >
      <DashboardSectionCards/>
      <ChartAreaInteractive/>
      <DashboardBentoGrid/>
      
     
      
    
    </div>
  )
}

export default DashboardHomePage

import WelcomeBack from '@/components/(user-dashboard)/dashboard-welcome'
import SmoothTabHeader from '@/components/(user-dashboard)/header-tabs'
import { UserDashboardSectionCards } from '@/components/(user-dashboard)/user-dashboard-cards'
import { UserChartAreaInteractive } from '@/components/(user-dashboard)/user-dashboard-chararea'
import { ModeToggle } from '@/components/generals/mode-toggle'
import ProfileDropdown from '@/components/kokonutui/profile-dropdown'
import BentoGrid1 from '@/components/mvpblocks/bento-grid-1'
import ScrollableCardStack from '@/components/smoothui/ui/ScrollableCardStack'
import React from 'react'
import { Home, Settings, User } from "lucide-react";

const UserDahboardPage = () => {
  const recentItems = [
  {
    id: "1",
    name: "AI Assistant",
    handle: "Answered your question",
    avatar: "/icons/one.jpg", // custom icon or your logo
    video: "/videos/answer-demo.mp4", // optional background demo
    href: "#", // maybe link to the chat session
  },
  {
    id: "2",
    name: "Summary Bot",
    handle: "Summarized your PDF",
    avatar: "/icons/two.jpg",
    video: "/videos/summary-demo.mp4",
    href: "#", // link to summary page
  },
  {
    id: "3",
    name: "Translator",
    handle: "Converted doc into Spanish",
    avatar: "/icons/translate.png",
    video: "/videos/translate-demo.mp4",
    href: "#",
  },
  {
    id: "4",
    name: "File Upload",
    handle: "Uploaded research_paper.pdf",
    avatar: "/icons/upload.png",
    video: "/videos/upload-demo.mp4",
    href: "#",
  },
  {
    id: "5",
    name: "Knowledge Base",
    handle: "Extracted insights from data.xlsx",
    avatar: "/icons/excel.png",
    video: "/videos/excel-demo.mp4",
    href: "#",
  },
];
// const tabs = [
//   { id: "home", title: "Home", icon: Home, color: "bg-blue-500" },
//   { id: "settings", title: "Settings", icon: Settings, color: "bg-purple-500" },
//   { id: "profile", title: "Profile", icon: User, color: "bg-emerald-500" },
// ];
const tabs = [
  { id: 'home', title: 'Home', icon: 'home', color: '#06b6d4' },
  { id: 'summary', title: 'Summary', icon: 'file-text', color: '#8b5cf6' },
  { id: 'settings', title: 'Settings', icon: 'settings', color: '#10b981' },
];

  return (
    <div className='py-10 '>
      {/* <SmoothTabHeader items={tabs}/> */}
      <div className='flex justify-end items-center'>

        <div className='flex gap-6 items-center'>
      <ProfileDropdown/>
          <ModeToggle/>

        </div>

      </div>
        {/* <WelcomeBack/> */}
        <BentoGrid1/>
        <hr />
        {/* <UserDashboardSectionCards/> */}
        <UserChartAreaInteractive/>
        {/* <div>
          <h2 className='py-16 font-bold '>Recent Activity</h2>
        <ScrollableCardStack items={recentItems}/>

        </div> */}
        
      
    </div>
  )
}

export default UserDahboardPage




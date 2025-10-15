import PricingTopHeader from '@/components/(user-dashboard)/pricing/pricing-header'
import Pricing from '@/components/generals/(home)/pricing-section'
import React from 'react'

const UserPricingPage = () => {
  return (
    <div className='min-h-screen pb-32'>
{/* <PricingTopHeader/>      */}
    <Pricing locale={'en'} />
 
    </div>
  )
}

export default UserPricingPage

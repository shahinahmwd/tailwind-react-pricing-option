import { ShieldCheckIcon } from 'lucide-react';
import React from 'react'

const PricingFeature = ({feature}) => {
  return (
    <p className='flex mt-4'><ShieldCheckIcon className='mr-2'></ShieldCheckIcon> {feature}</p>
  )
}

export default PricingFeature;
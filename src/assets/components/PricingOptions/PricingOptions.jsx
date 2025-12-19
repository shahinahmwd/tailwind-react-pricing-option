import React from 'react'
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import Daisypricing from '../Daisypricing/Daisypricing';

const PricingOptions = ({PricingPromise}) => {

    const PricingData = use(PricingPromise);
    console.log(PricingData);
  return (
    <div>
        <h3 className='text-5xl mb-4'>Get our membership</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* {
                PricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
            } */}
            {
                PricingData.map(pricing => <Daisypricing
                    key={pricing.id}
                    pricing={pricing}>
                    </Daisypricing>)
            }
        </div>
    </div>
  )
}

export default PricingOptions;
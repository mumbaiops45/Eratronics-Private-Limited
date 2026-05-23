import React from 'react'
import TopHeading from '@/componentes/TopHeading'
import CoreServices from '@/componentes/services/services'

const OilAndGasIndustry = () => {
  return (
    <>
<TopHeading
  title={
    <>
      <span className="text-[var(--secondary)]">Services
</span>
    </>
  }
/>
   <CoreServices />
    </>
  )
}

export default OilAndGasIndustry
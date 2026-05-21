import React from 'react'
import TopHeading from '@/componentes/TopHeading'
import OilGasSolutions from '@/componentes/Industry/OilGasSolutions'

const OilAndGasIndustry = () => {
  return (
    <>
<TopHeading
  title={
    <>
      <span className="text-[var(--secondary)]">Oil & Gas</span> Industry
    </>
  }
/>
   <OilGasSolutions />
    </>
  )
}

export default OilAndGasIndustry
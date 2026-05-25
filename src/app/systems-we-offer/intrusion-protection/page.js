import React from 'react'
import TopHeading from '@/componentes/TopHeading'
import IntrusionProtectionSystems from '@/componentes/systems-we-offer/IntrusionProtectionSystems'



const SystemWeOfferPage = () => {
    return (
        <>
          <TopHeading
  title={
    <>
      Advanced Intrusion Detection Systems for{" "}
      <span className="text-[var(--secondary)]">
        Prevention & Protection
      </span>
    </>
  }
/>
            <IntrusionProtectionSystems />
        </>
    )
}

export default SystemWeOfferPage

import React from 'react'
import TopHeading from '@/componentes/TopHeading'
import SystemWeOffer from '@/componentes/systems-we-offer/SystemsWeOffer'



const SystemWeOfferPage = () => {
    return (
        <>
           <TopHeading
  title={
    <>
      <span className="text-[var(--secondary)]">Systems</span> we Offer
    </>
  }
/>
            <SystemWeOffer />
        </>
    )
}

export default SystemWeOfferPage

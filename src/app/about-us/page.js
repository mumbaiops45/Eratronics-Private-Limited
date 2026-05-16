import React from 'react'
import TopHeading from '@/componentes/TopHeading'
import CompanyOverview from '@/componentes/About/CompanyOverview'
import DeliveryPhilosophy from '@/componentes/About/DeliveryPhilosophy'
import CoreValues from '@/componentes/About/CoreValues'
import OurCulture from '@/componentes/About/OurCulture'
const About = () => {
  return (
    <>
    <TopHeading title={"About Us"} />
    <CompanyOverview />
    <DeliveryPhilosophy />
    <CoreValues />
    <OurCulture />
    </>
  )
}

export default About
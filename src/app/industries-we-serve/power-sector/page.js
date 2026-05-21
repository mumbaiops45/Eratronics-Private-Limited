import React from 'react'
import TopHeading from '@/componentes/TopHeading'
import PowerSectorSolutions from '@/componentes/Industry/PowerSectorSolutions'


const PowerSectorSolutionsPage = () => {
    return (
        <>
<TopHeading
  title={
    <span className="text-[var(--secondary)]">
      Power Sector
    </span>
  }
/>
            <PowerSectorSolutions />
        </>
    )
}

export default PowerSectorSolutionsPage

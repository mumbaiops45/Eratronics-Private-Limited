import React from 'react'
import TopHeading from '@/componentes/TopHeading'
import MetroRailSolutions from '@/componentes/Industry/MetroRailSolutions'

const MetroRailSolutionsPage = () => {
    return (
        <>
           <TopHeading
  title={
    <span className="text-[var(--secondary)]">
      Metro Rail
    </span>
  }
/>
     
            <MetroRailSolutions />
        </>
    )
}

export default MetroRailSolutionsPage

import TopHeading from '@/componentes/TopHeading'
import EWaste from '@/componentes/EWaste/EWaste'

const EWastePage = () => {
    return (
        <>
           <TopHeading
  title={
    <>
      <span className="text-[var(--secondary)]">E Waste</span> Management
    </>
  }
/>
            <EWaste />
        </>
    )
}

export default EWastePage

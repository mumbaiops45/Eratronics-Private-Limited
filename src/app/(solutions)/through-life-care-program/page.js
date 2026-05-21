import TopHeading from "@/componentes/TopHeading";

import ServicePillars from "@/componentes/Solutions/ServicePillars";
import LifecycleSupportServices from "@/componentes/Solutions/LifecycleSupportServices";
export default function TurnkeySolutionsPage() {

  return (
    <>
    <TopHeading
  title={
    <>
      <span className="text-[var(--secondary)]">
        Eratronics Through-Life Care
      </span>{" "}
      Program (ETCP)
    </>
  }
/>
      <ServicePillars />
      <LifecycleSupportServices />
    </>
  );
}
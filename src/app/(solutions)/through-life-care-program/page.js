import TopHeading from "@/componentes/TopHeading";

import ServicePillars from "@/componentes/services/ServicePillars";
import LifecycleSupportServices from "@/componentes/services/LifecycleSupportServices";
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
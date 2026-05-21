import SystemIntegrationServices from "@/componentes/Solutions/SystemIntegrationServices";
import TopHeading from "@/componentes/TopHeading";
export default function TurnkeySolutionsPage() {

  return (
    <>
     <TopHeading
  title={
    <>
      <span className="text-[var(--secondary)]">
        System Integration
      </span>{" "}
      Services
    </>
  }
/>
      <SystemIntegrationServices />
    </>
  );
}
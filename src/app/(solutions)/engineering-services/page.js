import EngineeringServices from "@/componentes/services/EngineeringServices";
import TopHeading from "@/componentes/TopHeading";
export default function TurnkeySolutionsPage() {

  return (
    <>
  <TopHeading
  title={
    <>
      <span className="text-[var(--secondary)]">
        Engineering
      </span>{" "}
      Services
    </>
  }
/>
      <EngineeringServices />
    </>
  );
}
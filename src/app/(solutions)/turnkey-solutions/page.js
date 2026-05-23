
import TurnkeySolutions from "@/componentes/services/TurnkeySolutions";
import TopHeading from "@/componentes/TopHeading";
export default function TurnkeySolutionsPage() {

  return (
    <>
      <TopHeading
        title={
          <>
            <span className="text-[var(--secondary)]">
              Turnkey
            </span>{" "}
            Solutions
          </>
        }
      />
      <TurnkeySolutions />
    </>
  );
}
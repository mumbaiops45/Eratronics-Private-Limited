import Hero from "@/componentes/Hero";
import HomeStats from "@/componentes/home/HomeStats";
import GlobalCapability from "@/componentes/GlobalCapability";
import HomeIndustries from "@/componentes/home/HomeIndustries";
import HomeSystemsTeaser from "@/componentes/home/HomeSystemsTeaser";
import HomeWhyUs from "@/componentes/home/HomeWhyUs";
import HomeCTA from "@/componentes/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HomeStats /> */}
      <GlobalCapability />
      <HomeIndustries />
      <HomeSystemsTeaser />
      <HomeWhyUs />
      <HomeCTA />
    </>
  );
}

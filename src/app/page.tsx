import Hero from "@/components/Hero";
import Perfect from "@/components/Perfect";
import Sec from "@/components/Sec";
import Cottages from "@/components/Cottages";

import Deals from "@/components/Deals";

export default function Home() {
  return (
   <>
   <Hero/>
   <Sec/>
   <Perfect/>
   <Cottages/>
   {/* <Moments/> */}
   <Deals/>
   </>
  );
}

// import HeroSection from "../../components/homeComponents/HeroSection";
// import React from "react";
// import { EmpowerSection, StatsSection } from "../../components";
// import Founders from "../../components/foundersSection/Founders";
// import OurPartners from "../../components/PartnersSection/OurPartners";
// import Services from "../../components/OurServices/OurServices";
// import VisionMission from "../../components/VisionMission/VisionMission";
// import IntegratedSolutions from "../../components/IntegratedSolutions/IntegratedSolutions";

// export default function HomePage() {
//   return (
//     <div>
//       <HeroSection />
//       <IntegratedSolutions />
//       <VisionMission />
//       <StatsSection />
//       <EmpowerSection />
//       <Services />
//       <Founders />
//       <OurPartners />
//     </div>
//   );
// }
import React, { Suspense, lazy } from "react";
const HeroSection = lazy(() =>
  import("../../components/homeComponents/HeroSection")
);
const IntegratedSolutions = lazy(() =>
  import("../../components/IntegratedSolutions/IntegratedSolutions")
);
const VisionMission = lazy(() =>
  import("../../components/VisionMission/VisionMission")
);
const StatsSection = lazy(() =>
  import("../../components/StatsSection/StatsSection")
);
const EmpowerSection = lazy(() =>
  import("../../components/EmpowerSection/EmpowerSection")
);
const Services = lazy(() => import("../../components/OurServices/OurServices"));
const Founders = lazy(() =>
  import("../../components/foundersSection/Founders")
);
const OurPartners = lazy(() =>
  import("../../components/PartnersSection/OurPartners")
);

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <HeroSection />
        <IntegratedSolutions />
        <VisionMission />
        <StatsSection />
        <EmpowerSection />
        <Services />
        <Founders />
        <OurPartners />
      </div>
    </Suspense>
  );
}

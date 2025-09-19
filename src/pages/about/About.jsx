import React, { useRef } from "react";
import { Hero, Mission, OurJourney, Vision } from "../../components";
import VisionMission from "../../components/VisionMission/VisionMission";
import IntegratedSolutions from "../../components/IntegratedSolutions/IntegratedSolutions";

const About = () => {
  const heroRef = useRef();

  return (
    <>
      <div ref={heroRef}>
        <Hero />
      </div>
      <IntegratedSolutions />
      <VisionMission />
    </>
  );
};

export default About;

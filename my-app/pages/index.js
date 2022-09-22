import React from "react";
//import Footer from './Footer';
import Intro from "./components/Intro";
import CapsuleStatic from "./components/CapsuleStatic";
// import CapsulePage from "./capsule/CapsulePage";
import MidSection from "./components/MidSection";

const index = () => {
  return (
    <div>
      <Intro />
      <CapsuleStatic />
      <MidSection />
    </div>
  );
};

export default index;

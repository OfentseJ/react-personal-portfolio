import { useState } from "react";
import NavBar from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <NavBar />
      <IntroSection />
      <AboutSection />
    </>
  );
}

export default App;

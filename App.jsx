import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";

function App() {
  const heroData = [
    { text1: "Give in to", text2: "your passions" },
    { text1: "Indulge", text2: "your senses" },
    { text1: "Experience", text2: "the thrill" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  // Auto-change background/hero every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % heroData.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [heroData.length]);

  return (
    <div className="app">
      <Background playStatus={playStatus} heroCount={heroCount} />

      <Navbar />

      <Hero
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  );
}

export default App;

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "./pages/hero";
// import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5, // Increased duration for smoother scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -15 * t)), // Adjusted easing curve
      orientation: "vertical",
      gestureOrientation: "vertical", 
      smoothWheel: true,
      smoothTouch: true, // Enabled smooth touch
      touchMultiplier: 1.5, // Reduced touch multiplier for smoother touch scrolling
      wheelMultiplier: 0.8, // Added wheel multiplier for smoother wheel scrolling
      lerp: 0.1, // Added lerp for smoother interpolation
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Hero />
      
      <Page3/>
      <Page4/>
      <Page5/>
      {/* <Page2 /> */}
      <Page6/>
    </div>
  );
}

export default App;

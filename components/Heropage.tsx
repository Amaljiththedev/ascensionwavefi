import React from "react";
import Hero from "./Herobackground";  // Ensure this component is properly exported
import { HeroScrollDemo } from "./Containerscrollanimation";  // Ensure this is properly exported

// Define the functional component `Heropage` with correct types
const Heropage: React.FC = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen w-full mt-10">
        <Hero /> {/* Hero background component */}
        
        <div className="absolute top-1/2 left-1/2 transform  mt-10 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
          {/* Main title */}
          <h1 className="relative z-50 mx-auto mb-6 max-w-4xl text-center text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-700 dark:text-neutral-300">
            <span
              data-br=":r76:"
              data-brr="1"
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                textWrap: "balance",
              }}
            >
              Empowering Your Digital Vision.
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="text-black [text-shadow:0_0_rgba(0,0,0,0.1)] dark:text-white">
                  <span>Realized.</span>
                </div>
              </div>
            </span>
          </h1>

          {/* Description text */}
          <p className="text-base text-white dark:text-white mt-4 mb-8 max-w-3xl mx-auto sm:text-sm md:text-base leading-relaxed px-4 sm:px-8">
            Building your brand with precision, speed, and no compromises.
          </p>

          {/* Action Button */}
          <button 
  className="z-50 z-index: 9999 inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-12 py-3 px-6 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 group transform hover:scale-105 transition-transform duration-200"
  onClick={() => window.location.href = "#contact-section"}>
  <span className="flex items-center space-x-2">
    <span>Start Your Project</span>
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-slate-900 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-white dark:bg-slate-900"></span>
    </span>
  </span>
</button>

        </div>
      </div>

      {/* Adjusting the margin-top to make HeroScrollDemo closer */}
      <div className="-mt-96 -z-10 style={{ zIndex: -1 }">
        <HeroScrollDemo /> {/* Scrollable demo component */}
      </div>
    </>
  );
};

export default Heropage;

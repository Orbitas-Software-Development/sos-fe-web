import { useState } from "react";
import "./App.css";

{
  /*import Example from "./pages/Index/IndexSection/Example";*/
}

import IndexSection from "./pages/Index/IndexLanding";
import { scroll } from "framer-motion/dom";

function App() {
  const [count, setCount] = useState(0);
  scroll((progress) => {
    const progressWheel = document.querySelector(".progress");
    progressWheel.style.strokeDasharray = `${progress}, 1`;
  });
  return (
    <>
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        className="progress-wheel"
      >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
      </svg>
      <IndexSection />
    </>
  );
}

export default App;

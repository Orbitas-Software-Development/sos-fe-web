import { useState } from "react";

import "./App.css";

import IndexLanding from "./pages/Index/IndexLanding";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IndexLanding />
    </>
  );
}

export default App;

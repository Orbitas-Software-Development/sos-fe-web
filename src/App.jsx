import { useState } from "react";
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
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

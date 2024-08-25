import { useState } from "react";
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
function App() {
  const [count, setCount] = useState(0);

  return <Login />;
}

export default App;

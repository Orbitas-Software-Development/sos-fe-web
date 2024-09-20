import React from "react";
import Navigator from "../../components/Nav/Nav";
import Home from "./IndexSection/Home";
import Features from "./IndexSection/features";
export default function IndexLanding() {
  return (
    <>
      <Navigator />
      <Home />
      <Features />
    </>
  );
}

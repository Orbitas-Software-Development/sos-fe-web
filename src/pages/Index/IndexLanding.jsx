import React from "react";
import Navigator from "../../components/Nav/Nav";
import Home from "./IndexSection/Home";
import Feature from "./IndexSection/Feature";
import Download from "./IndexSection/Download";
export default function IndexLanding() {
  return (
    <>
      <Navigator />
      <Home />
      <Feature /> <Download />
    </>
  );
}

import React from "react";
import { withExpoSnack } from "nativewind";
import { Home } from "./src/screens/Home";

const App = () => {
  return (
    <Home />
  );
};

export default withExpoSnack(App);

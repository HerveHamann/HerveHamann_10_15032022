import React from "react";
import Aboutaccordion from "./components/Aboutaccordion";
import Accordion from "./components/Accordion";
import Rating from "./components/Rating";
import Tag from "./components/Tag";
import Thumb from "./components/Thumb";

const App = () => {
  return (
    <div>
      <Tag />
      <Thumb />
      <Accordion />
      <Aboutaccordion />
      <Rating />
    </div>
  );
};

export default App;

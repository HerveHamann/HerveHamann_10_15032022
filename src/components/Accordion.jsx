import React, { useState } from "react";
import arrowdown from "../assets/img/arrowdown.svg";
import arrowup from "../assets/img/arrowup.svg";

const Accordion = () => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="accordion">
      <div className="title" onClick={() => (opened ? setOpened(false) : setOpened(true))}>
        <p>Equipements</p>
        <img src={opened ? arrowdown : arrowup} alt="arrow" />
      </div>
      <div className={opened ? "container" : "container-closed"}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
    </div>
  );
};

export default Accordion;

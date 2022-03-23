import React, { useState } from "react";
import aboutarrowdown from "../assets/img/aboutarrowdown.svg";
import aboutarrowup from "../assets/img/aboutarrowup.svg";

const Aboutaccordion = ({ header, text }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="aboutaccordion">
      <div className="abouttitle" onClick={() => (opened ? setOpened(false) : setOpened(true))}>
        <p>{header}</p>
        <img src={opened ? aboutarrowdown : aboutarrowup} alt="arrow" className="arrowdownup" />
      </div>
      <div className={opened ? "aboutcontainer" : "container-closed"}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Aboutaccordion;

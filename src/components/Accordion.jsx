import React, { useState } from "react";
import arrowdown from "../assets/img/arrowdown.svg";
import arrowup from "../assets/img/arrowup.svg";

const Accordion = ({ header, description, equipments }) => {
  const [opened, setOpened] = useState(false);
  // console.log({ description });

  let content = header === "Description" ? description : equipments;
  console.log(content);
  return (
    <div className="accordion">
      <div className="title" onClick={() => (opened ? setOpened(false) : setOpened(true))}>
        <p>{header}</p>
        <img src={opened ? arrowdown : arrowup} alt="arrow" className="arrowupdown" />
      </div>
      <div className={opened ? "container" : "container-closed"}>
        {description
          ? content
          : content.map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
      </div>
    </div>
  );
};

export default Accordion;

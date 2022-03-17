import React, { useState } from "react";
import aboutarrowdown from "../assets/img/aboutarrowdown.svg";
import aboutarrowup from "../assets/img/aboutarrowup.svg";

const Aboutaccordion = () => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="aboutaccordion">
      <div className="title" onClick={() => (opened ? setOpened(false) : setOpened(true))}>
        <p>Fiabilité</p>
        <img src={opened ? aboutarrowdown : aboutarrowup} alt="arrow" />
      </div>
      <div className={opened ? "container" : "container-closed"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque, suscipit nesciunt sit voluptas maxime
          doloribus rerum qui quae molestiae voluptatum minima eveniet sint natus sapiente. Aspernatur minus veniam
          incidunt. Fugit ex delectus autem nihil, sequi harum dolore perferendis dolor, voluptatum totam soluta.
          Consequatur rerum assumenda cumque ipsa explicabo voluptate.
        </p>
      </div>
    </div>
  );
};

export default Aboutaccordion;

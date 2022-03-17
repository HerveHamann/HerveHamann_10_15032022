import React, { useState } from "react";
import greystar from "../assets/img/greystar.svg";
import redstar from "../assets/img/redstar.svg";
const Rating = () => {
  const [statisfaction, setStatisfaction] = useState(0);
  const starNumber = [1, 2, 3, 4, 5];

  return (
    <div>
      {starNumber.map((number) => (
        <img
          key={number}
          src={statisfaction >= number ? redstar : greystar}
          alt="star"
          onClick={() => (statisfaction !== number ? setStatisfaction(number) : setStatisfaction(number - 1))}
        />
      ))}
    </div>
  );
};

export default Rating;

import React, { useState } from "react";

import arrowleft from "../assets/img/arrowleft.svg";
import arrowright from "../assets/img/arrowright.svg";
import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/image2.jpg";
import image3 from "../assets/img/image3.jpg";
import image4 from "../assets/img/image4.png";
import image5 from "../assets/img/image5.jpg";
import image6 from "../assets/img/image6.jpg";

const Slider = () => {
  const picture = [image1, image2, image3, image4, image5, image6];
  const [displayedImage, setDisplayedImage] = useState(picture[0]);
  let i = picture.indexOf(displayedImage);

  return (
    <div className="container">
      <img src={displayedImage} alt="name" className="slider" />
      <img
        src={arrowleft}
        alt="arrowleft"
        className={picture.length > 1 ? "arrowleft" : "hide"}
        onClick={() =>
          displayedImage === picture[0]
            ? setDisplayedImage(picture[picture.length - 1])
            : setDisplayedImage(picture[i - 1])
        }
      />
      <img
        src={arrowright}
        alt="arrowright"
        className={picture.length > 1 ? "arrowright" : "hide"}
        onClick={() =>
          displayedImage === picture[picture.length - 1]
            ? setDisplayedImage(picture[0])
            : setDisplayedImage(picture[i + 1])
        }
      />
      <p className={picture.length > 1 ? "slidenumber" : "hide"}>
        {i + 1}/{picture.length}
      </p>
    </div>
  );
};

export default Slider;

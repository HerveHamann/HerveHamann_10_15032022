import React, { useState } from "react";

import mobilearrowleft from "../assets/img/mobilearrowleft.svg";
import mobilearrowright from "../assets/img/mobilearrowright.svg";
import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/image2.jpg";
import image3 from "../assets/img/image3.jpg";
import image4 from "../assets/img/image4.png";
import image5 from "../assets/img/image5.jpg";
import image6 from "../assets/img/image6.jpg";

const Mobileslider = () => {
  const picture = [image1, image2, image3, image4, image5, image6];
  const [displayedImage, setDisplayedImage] = useState(picture[0]);
  let i = picture.indexOf(displayedImage);

  return (
    <div className="mobileslider">
      <img src={displayedImage} alt="name" className="mobiledisplayedimage" />
      <img
        src={mobilearrowleft}
        alt="arrowleft"
        className={picture.length > 1 ? "mobilearrowleft" : "mobilehide"}
        onClick={() =>
          displayedImage === picture[0]
            ? setDisplayedImage(picture[picture.length - 1])
            : setDisplayedImage(picture[i - 1])
        }
      />
      <img
        src={mobilearrowright}
        alt="arrowright"
        className={picture.length > 1 ? "mobilearrowright" : "mobilehide"}
        onClick={() =>
          displayedImage === picture[picture.length - 1]
            ? setDisplayedImage(picture[0])
            : setDisplayedImage(picture[i + 1])
        }
      />
    </div>
  );
};

export default Mobileslider;

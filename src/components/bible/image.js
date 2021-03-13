import React from "react";
import imageCss from './image.module.css'

const Image = ({image, title}) => {
  return (
    <>
      <div
        className={`position-absolute w-100 h-100 ${imageCss.background} `}
        style={{ background: `url(${image}) no-repeat center/cover` }}
      ></div>
      <div className={`w-100 h-100 position-absolute`}>
        <img
          src={image}
          alt={`${title} image`}
          className={`w-100 h-100 ${imageCss.img}`}
        />
      </div>
    </>
  );
};

export default Image;

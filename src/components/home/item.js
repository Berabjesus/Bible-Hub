import React from "react";
import itemCss from "./item.module.css";

const Item = ({ description, image, title }) => {
  return (
    <section
      className={`d-flex col-12 col-sm-6 col-lg-4 p-0 m-0 ${itemCss.wrapper} `}
    >
      <div
        className={`w-100 h-100 ${itemCss.background}`}
        style={{ background: `url(${image}) no-repeat center/cover` }}
      ></div>
      <img
        src={image}
        alt={`${title} image`}
        className={`${itemCss.image} mx-auto`}
      />
      <div className={`d-flex flex-column w-100 py-1 ${itemCss.description} `}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
};
export default Item;

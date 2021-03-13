import React from "react";
import { Link } from 'react-router-dom';
import itemCss from "./item.module.css";

const Item = ({ description, image, title, languages}) => {
  return (
    <Link
      className={`d-flex col-12 col-sm-6 col-lg-4 p-0 m-0 ${itemCss.wrapper} `} to={
        {
          pathname: "/bible",
          state: {description, image, title, languages}
        }
      }
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
      <div className={`d-flex flex-column w-100 py-1 font-josefin ${itemCss.description} `}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
};
export default Item;

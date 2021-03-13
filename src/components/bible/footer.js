import React from "react";
import { Link } from "react-router-dom";
import footerCss from "./headerAndFooter.module.css";
import {
  faBookOpen,
  faStar as faStarChecked,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTrashAlt,
  faStar as faStarUnchecked,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ description, title, languages }) => {
  const [favorite, setFavorite] = React.useState(faStarUnchecked);
  const handleFavoriteCheck = () => {
    favorite === faStarUnchecked
      ? setFavorite(faStarChecked)
      : setFavorite(faStarUnchecked);
  };
  return (
    <footer className={`d-flex flex-column px-2 py-1 ${footerCss.footer}`}>
      <div className={`border-bottom border-white ${footerCss.description}`}>
        <p>{description}</p>
      </div>
      <div className="d-flex justify-content-between py-2">
        <button className={`${footerCss.button}`} onClick={handleFavoriteCheck}>
          <FontAwesomeIcon
            icon={favorite}
            style={{ color: "White", fontSize: "25px" }}
          />
          <small className='text-white d-block'>Favorite</small>
        </button>
        <Link
          to={{
            pathname: "/read",
            state: {title, languages },
          }}
          className={`${footerCss.button}`}
        >
          <FontAwesomeIcon
            icon={faBookOpen}
            style={{ color: "White", fontSize: "25px" }}
          />
          <small className='text-white d-block'>Read</small>
        </Link>
        <button className={`${footerCss.button}`}>
          <FontAwesomeIcon
            icon={faTrashAlt}
            style={{ color: "White", fontSize: "25px" }}
          />
          <small className='text-white d-block'>Delete</small>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import panelCss from "./panel.module.css";
import { faStar as faStarUnchecked } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarChecked } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Panel = () => {
  const [favorite, setFavorite] = React.useState(faStarUnchecked);
  const handleFavoriteCheck = () => {
    favorite === faStarUnchecked
      ? setFavorite(faStarChecked)
      : setFavorite(faStarUnchecked);
  };
  return (
    <div className={`d-flex align-items-center ${panelCss.bottom}`}>
      <button className={`mx-auto ${panelCss.button}`}  onClick={handleFavoriteCheck}>
        <FontAwesomeIcon
          icon={favorite}
          style={{ color: "White", fontSize: "25px" }}
        />
        <small className="text-white d-block">Favorite</small>
      </button>
    </div>
  );
};

export default Panel;

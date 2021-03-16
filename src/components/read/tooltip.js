import React from "react";
import tooltipCss from "./tooltip.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToolTip = ({ style }) => {
  const [showHide, setShowHide] = React.useState(tooltipCss.hide)
  return (
    <div className={` ${tooltipCss.div} ${showHide}` }  style={style} >
      <button className={`d-flex align-items-center ${tooltipCss.button}`}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "black", fontSize: "15px" }}
        />
        <p className='ml-2'>favorites</p>
      </button>
    </div>
  );
};

export default ToolTip;

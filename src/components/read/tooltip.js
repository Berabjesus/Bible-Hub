import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import tooltipCss from './tooltip.module.css';

const ToolTip = ({ style }) => (
  <div className={` ${tooltipCss.div}`} style={style}>
    <button
      type="button"
      className={`d-flex align-items-center ${tooltipCss.button}`}
    >
      <FontAwesomeIcon
        icon={faPlus}
        style={{ color: 'black', fontSize: '15px' }}
      />
      <p className="ml-2">favorites</p>
    </button>
  </div>
);

ToolTip.propTypes = {
  style: PropTypes.instanceOf(Object).isRequired,
};
export default ToolTip;

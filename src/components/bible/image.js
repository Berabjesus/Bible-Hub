import React from 'react';
import PropTypes from 'prop-types';
import imageCss from './image.module.css';

const Image = ({ image, title }) => (
  <>
    <div
      className={`position-absolute w-100 h-100 ${imageCss.background} `}
      style={{ background: `url(${image}) no-repeat center/cover` }}
    />
    <div className="w-100 h-100 position-absolute">
      <img
        src={image}
        alt={`${title}`}
        className={`w-100 h-100 ${imageCss.img}`}
      />
    </div>
  </>
);

Image.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;

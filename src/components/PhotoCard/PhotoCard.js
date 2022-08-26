import React from "react";
import "./PhotoCard.css";

const PhotoCard = ({ image, language }) => {
  return (
    <div className='photo-card__container'>
      <img
        className='photo-card__image'
        src={image.photo_small}
        alt={image.photo_desc_eng}
      />
      <div className='photo-card__desc'>
        <span>{image.desc[language]}</span>
      </div>
    </div>
  );
};

export default PhotoCard;

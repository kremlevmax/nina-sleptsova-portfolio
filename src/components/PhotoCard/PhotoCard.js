import React from "react";
import "./PhotoCard.css";

const PhotoCard = ({ image }) => {
  return (
    <div className='photo-card__container'>
      <img
        className='photo-card__image'
        src={image.photo_small}
        alt={image.photo_desc_eng}
      />
    </div>
  );
};

export default PhotoCard;

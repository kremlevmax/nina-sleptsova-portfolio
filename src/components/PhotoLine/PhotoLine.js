import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoLine.css";

const PhotoLine = ({ projectNumber, docs }) => {
  const album = docs[projectNumber];
  const arrayOfImages = album === undefined ? [] : Object.values(album?.photos);

  const images = arrayOfImages.map((image) => (
    <PhotoCard image={image} key={image.id} />
  ));

  return <div className='photo-line__container'>{images}</div>;
};

export default PhotoLine;

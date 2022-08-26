import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoLine.css";
import { useLocation } from "react-router-dom";
import cover from "../../images/cover.jpg";

const PhotoLine = ({ projectNumber, docs, language }) => {
  const pathname = useLocation().pathname;
  const album = docs[projectNumber];
  const arrayOfImages = album === undefined ? [] : Object.values(album?.photos);

  const images =
    pathname === "/projects" ? (
      arrayOfImages.map((image) => (
        <PhotoCard image={image} key={image.id} language={language} />
      ))
    ) : (
      <div className='photo-card__container'>
        <img className='photo-card__image' src={cover} alt='Cover' />
      </div>
    );

  return <div className='photo-line__container'>{images}</div>;
};

export default PhotoLine;

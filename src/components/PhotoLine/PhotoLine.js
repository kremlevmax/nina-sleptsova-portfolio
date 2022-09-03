import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoLine.css";
import { useLocation } from "react-router-dom";
import cover from "../../images/cover.jpg";

const PhotoLine = ({ projectNumber, docs, language, setSelectedImage }) => {
  const pathname = useLocation().pathname;
  const album = docs[projectNumber];
  const arrayOfImages = album === undefined ? [] : Object.values(album?.photos);

  const images = arrayOfImages.map((image) => (
    <PhotoCard
      image={image}
      key={image.id}
      language={language}
      setSelectedImage={setSelectedImage}
    />
  ));

  const result =
    pathname === "/projects" ? (
      <div className='photo-line__container'>{images}</div>
    ) : (
      <div className='photo-card__cover-container'>
        {/* <div className='placeholder'></div> */}
        <img className='photo-card__cover' src={cover} alt='Cover' />
      </div>
    );

  return result;
};

export default PhotoLine;

import React from "react";
import "./Modal.css";

const Modal = ({ setSelectedImage, selectedImage }) => {
  return (
    <div className='backdrop' onClick={() => setSelectedImage(null)}>
      <img src={selectedImage} alt='Enlarged Pic' />
    </div>
  );
};

export default Modal;

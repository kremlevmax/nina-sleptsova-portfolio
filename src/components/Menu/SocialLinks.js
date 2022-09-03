import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const SocialLinks = () => {
  return (
    <div className='social-links'>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
        className='social-link'
        id='facebook'
      >
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a
        href='https://www.instagram.com/n.in.stagram/'
        target='_blank'
        rel='noreferrer'
        className='social-link'
        id='insta'
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
        className='social-link'
        id='envelope'
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};

export default SocialLinks;

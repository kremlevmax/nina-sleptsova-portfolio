import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ language }) => {
  return (
    <nav>
      <div className='logo__container'>
        <Link to='/' className='logo'>
          Nina Sleptsova
        </Link>
      </div>
      <div className='menu__container'>
        <ul className='menu'>
          <li className='menu__item'>
            <Link to='/projects' className='menu__item-link'>
              Projects
            </Link>
          </li>
          <li className='menu__item'>
            <Link to='/contact' className='menu__item-link'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='social-links'>
        <a href='#' className='social-link'>
          Facebook
        </a>
        /
        <a
          href='https://www.instagram.com/n.in.stagram/'
          className='social-link'
        >
          Instagram
        </a>
        /
        <a href='#' className='social-link'>
          Email
        </a>
      </div>
    </nav>
  );
};

export default Menu;

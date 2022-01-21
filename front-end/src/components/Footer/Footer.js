import React from "react";
import ADT from "../NavBar/logoTag.png";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaRedditSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div id="foots-container">
      <div className="logo-tag">
        <Link to="/">
          <img src={ADT} alt="Logo" height="35" width="200" />
        </Link>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About</Link>
        <Link to="/faq">FAQ</Link>
        <a
          href="https://twitter.com/login?lang=en-gb"
          target="_blank"
          rel="noreferrer nofollow"
        >
          Login
        </a>
      </div>
      <div className="icons-container">
        <a
          href="https://www.facebook.com/alldaytrends/"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <FaFacebookSquare className="icons" />
        </a>
        <a
          href="https://www.instagram.com/alldaytrends1/"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <FaInstagram className="icons" />
        </a>
        <a
          href="https://twitter.com/alldaytrends1"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <FaTwitterSquare className="icons" />
        </a>
        <a
          href="https://www.reddit.com/user/alldaytrends"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <FaRedditSquare className="icons" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

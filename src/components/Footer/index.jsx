import React from "react";

import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <p className="footer__legend">Made by @pabloverduzcos</p>
    <ul className="footer__icons-list">
      <li>
        <a
          href="https://github.com/pabloverduzcos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/material-outlined/24/000000/github.png"
            alt="GitHub profile"
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/pabloverduzcos_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/android/24/000000/twitter.png"
            alt="GitHub profile"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/pabloverduzcos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png"
            alt="GitHub profile"
          />
        </a>
      </li>
    </ul>
  </footer>
);

export { Footer };

import React from "react";

import "./Footer.scss";

const index = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Developed with{" "}
        <img src="./images/heart.png" alt="heart" className="footer__heart" />{" "}
        Firstminster {new Date().getFullYear()}
        &copy;
      </p>
    </footer>
  );
};

export default index;

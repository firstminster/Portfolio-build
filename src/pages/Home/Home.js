import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HashLoader from "react-spinners/HashLoader";

import SocialMedia from "../../component/SocialMedia";
import "./Home.scss";

const Home = () => {
  const [loading, setLoading] = useState(false);
  let [color] = useState("#17ccca");

  // Loads when the components mounts
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <main className="home">
      {loading ? (
        <HashLoader color={color} loading={loading} size={50} />
      ) : (
        <>
          <div className="home__brief">
            <h1>Welcome</h1>
            <p className="home__brief-text">
              Hello! <strong> Chinecherem Harry</strong> here, i'm a software
              developer with a zeal for developing innovative programs that
              improve the productivity and effectiveness of businesses.
              Well-versed in technology and coding to create robust and
              user-friendly solutions. With every line of code, I strive to make
              the web a beautiful place.
              <span className="readmore-icon">
                <Link to="/profile" className="home__brief-link">
                  Read More <i className="fas fa-chevron-right"></i>
                </Link>
              </span>
            </p>
            <button className="btn btn-primary">Download CV</button>
          </div>
          <div className="home__content">
            <img src="./images/buzzme.jpg" alt="buzz-me" loading="lazy" />
          </div>
          <div className="home__social">
            <SocialMedia />
          </div>
        </>
      )}
    </main>
  );
};

export default Home;

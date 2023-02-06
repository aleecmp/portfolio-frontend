import React, { useState, useEffect } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"][0]';

    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Empowered by <span>Full Stack Development</span>
        <br /> to Build <span>Innovative Solutions</span>
      </h2>
      <div className="container">
        <div className="card">
      
          <img
            src={images.about_photo}
            className="app__about-photo"
            alt="about_photo"
          />
        </div>

        <div className="card">
          <h2 className="bold-text-style about-title">{about.title}</h2>
          <p className="p-text-style">{about.description}</p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);

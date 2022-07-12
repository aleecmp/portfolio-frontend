import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <div className='app__about'>

        <h2 className='head-text'>About me</h2>
        <div className='badge-cmp app__flex'>
          <motion.div
            whileInview={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'keyframes' }}
          >
            <p className='p-about'>Hello there! I'm moving from biotech to development. My first approach to code was through data analysis with Python, from then on I decided that I wanted to make a living from this and make it my profession.

              I am looking forward to my first professional experience in the IT area. I enjoy being part of a teams, learn from others and expressing my views on decisions. I focus on learning and personal development so that I can become a better professional.

              My primary motivation is that there is a technological revolution in the world that I want to be part of and I do not want to be left behind.</p>
          </motion.div>
        </div>

        <img src={images.about_photo} className='app__about-photo' alt="about_photo" />
      </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);

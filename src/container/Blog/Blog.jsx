import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Blog.scss';

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "blog"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setBlogs(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>

      <h2 className='head-text'>Blog (Soon...)</h2>
      {blogs.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img
              src={urlFor(blogs[currentIndex].imgurl)}
              alt={blogs[currentIndex].name}
            />
            <div className='app__testimonial-content'>
              <p className='p-text'>{blogs[currentIndex].feedback}</p>
              <div>
                <h4 className='bold-text'>{blogs[currentIndex].name}</h4>
                <h5 className='p-text'>{blogs[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? blogs.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === blogs.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Blog, 'app__blog'),
  'blog',
  'app__primarybg'
);

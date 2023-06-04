import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './Navbar.scss';
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const navbarTitles = ['home', 'about', 'work', 'skills', 'blog', 'contact']

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <a href="#home">
                    <img src={images.logo} alt='logo' />
                </a>
            </div>
            <ul className='app__navbar-links'>
                {navbarTitles.map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <DarkMode />
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {navbarTitles.map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

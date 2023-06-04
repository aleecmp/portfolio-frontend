import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a
        href='https://www.linkedin.com/in/alexiscampusanodev/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href='https://www.github.com/aleecmp/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;

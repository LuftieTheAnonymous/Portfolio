import React, { Suspense } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

import image from '@/public/textures/astronout.png';
import classes from '@/styles/me.module.css';

import Loader from '../Loader';


function HeroSection() {

  const variants={
    outview:{
     scale:0,
     opacity:0,
      x:-100,
      y:0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }

    },
    inview:{
      scale:1,
      opacity:1,
      x:0,
      y:0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }
  return (
      <div>
        
      </div>

  )
}

export default HeroSection
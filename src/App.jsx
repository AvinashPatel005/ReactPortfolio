import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import './App.scss'
import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/hero';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import EducationCard from './components/skill_card';
import Skill from './components/skill';
import Drag from './components/cursor';
import Project from './components/project';
import About from './components/about';
import MotionPath from './components/contact/motion_path';
import Contact from './components/contact';

const App = () => {
  useEffect(() => {
    new Lenis({
      autoRaf: true,
    });
  }, [])

  const wrapperRef = useRef(null)
  const { scrollYProgress: mainScrollProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] })
  const scaleY = useSpring(mainScrollProgress);

  return (
    <div className='wrapper' ref={wrapperRef}>
      <Navbar />
      <Hero />
      <Skill/>
      <Project/>
      <About/>
      <Contact/>
      <footer><motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} > Designed by Team Diversity</motion.p></footer>
      <motion.div className='scroll-progress-bar' style={{ scaleY: scaleY }}></motion.div>
      <Drag/>
    </div>
  )
}

export default App

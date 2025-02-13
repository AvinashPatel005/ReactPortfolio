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

const App = () => {
  useEffect(() => {
    new Lenis({
      autoRaf: true,
    });
  }, [])
  const wrapperRef = useRef(null)
  const { scrollYProgress: mainScrollProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] })
  const scaleY = useSpring(mainScrollProgress);

  const ref = useRef(null)
  const {scrollYProgress:lastSec} = useScroll({ target: ref ,offset:["start end","start start"]})

  const color = useTransform(lastSec,[0,1],["rgb(80 201 80)","rgb(127 35 169)"])
  return (
    <div className='wrapper' ref={wrapperRef}>
      <Navbar />
      <Hero />
      <Skill/>
      <Project/>
      <motion.section className='last' ref={ref} style={{backgroundColor:color}}>
      </motion.section>
      <motion.div className='scroll-progress-bar' style={{ scaleY: scaleY }}></motion.div>
      <Drag/>
    </div>
  )
}

export default App

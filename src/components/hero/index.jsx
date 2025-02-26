import React, { useEffect, useRef } from 'react'
import './index.scss'
import { motion, useScroll, useTransform } from 'motion/react'
const Hero = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target:ref,offset:["start start","end start"]})
    const heroInfoParallax = useTransform(scrollYProgress,[0,1],[0,-500])
    const opacity = useTransform(scrollYProgress,[0,1],[0,0])
    const variants = {
      visible:{
        opacity:1,
        x:0,
        transition:{
          duration:0.5,
          staggerChildren:0.2
        }
      },
      hidden:{
        opacity:0,
        x:20
      }
    }
  return (
    <motion.div id='home' className='hero' ref={ref} variants={variants}
    initial="hidden"
    animate="visible"
    >
        <motion.img className='scroll-img' src="/assets/bottom.png" width="100" height="100" alt="scroll"  variants={variants} />
        <motion.div className='hero-info' style={{y:heroInfoParallax}}  variants={variants} >
            <motion.p variants={variants} >Hello, I'm</motion.p>
            <motion.h1 variants={variants}>AVINASH PATEL</motion.h1>
            <motion.p variants={variants}>Full Stack Developer</motion.p>
        </motion.div>
        <motion.img className='hero-img' src="/assets/hero_image.png" alt="heroImg"  variants={variants} />

        
        
    </motion.div>
  )
}

export default Hero

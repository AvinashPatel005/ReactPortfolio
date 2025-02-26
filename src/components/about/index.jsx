import React, { useEffect, useRef } from 'react'
import './index.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
const About = () => {
    const aboutRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: aboutRef, offset: ["start end", "end end"], })

    const leftLid = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.8, 1], ["-100%", "0%", "0%", window.innerWidth>900? "-30%":"-100%",window.innerWidth>900? "-35%":"-100%"])
    const rightLid = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.8, 1], ["100%", "0%", "0%",  window.innerWidth>900? "30%":"100%",window.innerWidth>900? "35%":"100%"])

    const letter = useTransform(scrollYProgress,[0,0.2,0.3, 0.8],[0,0,0.5,1])

    const { scrollYProgress: headingScroll } = useScroll({ target: aboutRef, offset: ["start end", "start start"], })
    const headingY = useTransform(headingScroll, [0, 1], [-100, 0])
    const headingOpacity = useTransform(headingScroll, [0.2, 1], [0, 1])

    return (
        <section className="about"  ref={aboutRef}>

            <div className='slider-container'>
                <motion.div className='left-lid' style={{ x: leftLid }}></motion.div>
                <motion.div className='right-lid' style={{ x: rightLid }}></motion.div>
                <motion.div className='letter' style={{scale:letter}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
                    <motion.h1 style={{ y: headingY, opacity: headingOpacity }}>ABOUT ME</motion.h1>
                    <img src="assets/dp.jpg" alt="dp" />
                    <h3>Full Stack Developer</h3>
                    <p>Hi, I'm Avinash Patel, a passionate and dedicated software developer with a knack for turning ideas into reality through code. I've had the privilege to work on a diverse range of projects and collaborate with some amazing teams.</p>
                    <p>I specialize in Web development, App development, and I'm always eager to explore new tools and technologies. Whether it's crafting responsive web interfaces, building scalable backend systems, or developing mobile apps, I relish the opportunity to create solutions that make a difference.</p>
                    <p>I'm open to freelance work, exciting collaborations, or just a tech chat. Let’s connect and build something amazing!</p>
                </motion.div>
            </div>
            <div className='about-pointer' id="about"></div>
        </section>
    )
}

export default About

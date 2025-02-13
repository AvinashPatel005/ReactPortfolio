import { useScroll, useTransform } from 'motion/react';
import React, { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import './index.scss'
import projects from '../../utils/projects.json'
import ProjectCard from '../project_card';
const Project = () => {
    const pinnedRef = useRef(null)

    const { scrollYProgress:headingOpacityScroll } = useScroll({ target: pinnedRef, offset: ["start end", "end start"], })
    const { scrollYProgress:headingTranslateScroll } = useScroll({ target: pinnedRef, offset: ["start end", "start start"], })
    const headingOpacity = useTransform(headingOpacityScroll, [0.1,0.2, 0.8,0.9], [0,1,1,0])
    const headingY = useTransform(headingTranslateScroll, [0, 1], [-100,0])
  
    const {scrollYProgress:cardResizeScroll} = useScroll({target:pinnedRef,offset:["start start",'end end']})


    return (
      <section id='projects' className='projects-wrapper' ref={pinnedRef}>
            <motion.h1
            style={{y:headingY,opacity:headingOpacity}}
              >PROJECTS</motion.h1>
            <motion.ul>
              {projects.map((project, index) => (
                <ProjectCard key={index} index={index} {...project} range={[index*0.33,1]} progress={cardResizeScroll} targetScale={1-(projects.length-index)*0.05} />
              ))}
              {/* <div className='pin-delay'></div> */}
            </motion.ul>
        </section>
    )
}


export default Project

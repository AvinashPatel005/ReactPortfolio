import { useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react'
import {motion} from 'framer-motion'
import './index.scss'
import SkillCard from '../skill_card';
import skills from '../../utils/skills.json'
const Skill = () => {
  const pinnedRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: pinnedRef, offset: ["start end", "end start"], })
  
  const y = useTransform(scrollYProgress, [0, 1], ["115%", "-500%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-515%", "100%"]);

  const { scrollYProgress:headingScroll } = useScroll({ target: pinnedRef, offset: ["start end", "start start"], })
  const headingY = useTransform(headingScroll, [0, 1], [-100,0])
  const headingOpacity = useTransform(headingScroll, [0.2, 1], [0,1])
  return (
    <section id='skill' className='skills-wrapper' ref={pinnedRef}>
        <motion.div className='skills-container' >
          <motion.h1
          style={{y:headingY,opacity:headingOpacity}}
            >SKILLS</motion.h1>
          <motion.ul style={{ x: y2 }}>
            {skills.slice(0,5).map((skill, index) => (
              <motion.div key={index}><SkillCard {...skill}/></motion.div>
            ))}
          </motion.ul>
          <motion.ul style={{ x: y }}>
            {skills.slice(5).map((skill, index) => (
              <motion.div key={index}><SkillCard {...skill} inverted={1}/></motion.div>
            ))}
          </motion.ul>
        </motion.div>
      </section>
  )
}

export default Skill

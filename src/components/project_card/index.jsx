import React, { useEffect, useRef } from 'react'
import './index.scss'
import { useTransform, motion, useScroll, stagger } from 'framer-motion'

const ProjectCard = ({ name, description, techStack, imageUrl, color, index, range, targetScale, progress, url }) => {
    const cardRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start center"],
    })
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
    const scale = useTransform(progress, range, [1, targetScale])

    const variants = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.1,
                duration: 0.4
            }

        }
    }

    return (
        <div className='project-card-wrapper' >
            <motion.div className='project-card' style={{ top: 10 + index * 25, scale }} ref={cardRef}>
                <motion.img className='project-img' src={imageUrl} alt="image" style={{ scale: imageScale }} />

                <motion.div className='project-info' style={{ backgroundColor: color }}>
                    <motion.h3 >{name}</motion.h3>
                    <motion.p >{description}</motion.p>
                    <motion.div className='tech-stack' style={url==null?{
                        justifyContent:"flex-end"
                    }:{}}>
                        {
                            url &&
                            <motion.a className='project-url' href={url} target='_blank'>{<i className="bi bi-arrow-up-right-circle-fill"></i>}</motion.a>
                        }

                        <motion.div  variants={variants} initial="hidden" whileInView="visible" >
                        {techStack.map(({ name, imageUrl }, index) => (
                            <motion.img variants={variants} className='tech' src={imageUrl} alt={name} width={50} height={50} key={index} />
                        ))}
                        </motion.div>

                    </motion.div>

                </motion.div>
            </motion.div>
        </div>
    )
}

export default ProjectCard

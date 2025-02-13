import React, { useEffect } from 'react'
import './index.scss'
import { useTransform, motion } from 'framer-motion'

const ProjectCard = ({ name, description, techStack, imageUrl, color, index, range, targetScale, progress }) => {
    const scale = useTransform(progress, range, [1, targetScale])
    return (
        <div className='project-card-wrapper' >
            <motion.div className='project-card' style={{ top: 10 + index * 25, backgroundColor: color, scale }}>
                    <img className='project-img' src={imageUrl} alt="image" />

                <div className='project-info'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className='tech-stack'>
                        {techStack.map(({ name, imageUrl }, index) => (
                            <img className='tech' src={imageUrl} alt={name} width={50} height={50} key={index} />
                        ))}

                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard

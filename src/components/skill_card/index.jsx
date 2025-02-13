import './index.scss'
import { motion } from 'motion/react'
const SkillCard = ({name,description,imageUrl,color ,inverted=0}) => {

    return (
        <motion.div className='ed-card' 
        initial={{ 
            opacity: 0,
            scale: 0.5,
            rotateZ:5,
            y:inverted?80:-80
        }}
        whileInView={{ 
            opacity: 1,
            scale: 1,
            rotateZ:0,
            y:0
         }}
        transition={{
            duration: 1,
            type: "spring",
        }}
        style={{backgroundColor:color,flexDirection:inverted?'row-reverse':'row'}}>
            
            <div className="ed-card-left">
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} src={imageUrl} alt="" />
            </div>
            <div className="ed-card-left" >
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className='spacer'></div>
        </motion.div>
    )
}

export default SkillCard

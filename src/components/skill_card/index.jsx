import './index.scss'
import { motion } from 'motion/react'
const SkillCard = ({ name, description, imageUrl, color, inverted = 0 }) => {
    const variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeInOut', staggerChildren: 0.2 }
        },
    }

    return (
        <motion.div className='ed-card'
            initial={{
                opacity: 0,
                scale: 0.5,
                rotateZ: 5,
                y: inverted ? 80 : -80
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                rotateZ: 0,
                y: 0
            }}
            transition={{
                duration: 1,
                type: "spring",
            }}
            style={{ backgroundColor: color, flexDirection: inverted ? 'row-reverse' : 'row' }}>

            <div className="ed-card-left">
                <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} src={imageUrl} alt="" />
            </div>
            <motion.div className="ed-card-left"  initial="hidden" whileInView="visible" variants={variants}  >
                <motion.h2 variants={variants}>{name}</motion.h2>
                <motion.p variants={variants}>{description}</motion.p>
            </motion.div>
            <div className='spacer'></div>
        </motion.div>
    )
}

export default SkillCard

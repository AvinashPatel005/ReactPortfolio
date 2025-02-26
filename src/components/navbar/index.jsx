import React from 'react'
import './index.scss'
import { motion } from 'motion/react'
const Navbar = () => {
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
        <div className='navbar'>
            <div className='navbar-background'></div>
            <div className='navbar-content'>
                <motion.div className='brand'
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 1,
                        type: "spring"
                    }}
                >
                    <img src="assets/logo.png" width={60} alt="logo" />
                </motion.div>
                <motion.ul className='nav-links'
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    <motion.li variants={variants}><a href='#home'>Home</a></motion.li>
                    <motion.li variants={variants}><a href='#skill'>Skills</a></motion.li>
                    <motion.li variants={variants}><a href='#projects'>Projects</a></motion.li>
                    <motion.li variants={variants}><a href='#about'>About</a></motion.li>
                    <motion.li variants={variants}><a href='#contact'>Contact</a></motion.li>
                </motion.ul>
            </div>
        </div>
    )
}

export default Navbar

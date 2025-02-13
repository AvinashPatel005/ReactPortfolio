import React from 'react'
import './index.scss'
import logo from '../../assets/logo.png'
import { motion } from 'motion/react'
const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='navbar-background'></div>
            <div className='navbar-content'>
                <motion.div className='brand'
                initial={{
                    opacity:0,
                    x:-40
                }}
                whileInView={{
                    opacity:1,
                    x:0
                }}
                transition={{
                    duration:1,
                    type:"spring"
                }}
                >
                    <img src={logo} width={60} alt="logo" />
                </motion.div>
                <motion.ul className='nav-links' 
                initial={{
                    opacity:0,
                    x:100
                }}
                whileInView={{
                    opacity:1,
                    x:0
                }}
                transition={{
                    duration:1,
                    type:"spring"
                }}
                >
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#skill'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </motion.ul>
            </div>
        </div>
    )
}

export default Navbar

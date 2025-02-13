import {motion} from "framer-motion"
import './index.scss'
const transition = { duration: 1, yoyo: Infinity, ease: "easeInOut" }

export default function MotionPath() {
    return (
        <div style={{ position: "absolute",right:0 }}>
            <motion.div id="box"
                initial={{ offsetDistance: "100%", scale: 2.5 }}
                whileInView={{ offsetDistance: "0%", scale: 0.8 }}
                transition={transition}
            />
        </div>
    )
}


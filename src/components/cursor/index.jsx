import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import './index.scss'
export default function Drag() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return <motion.div id="ball" ref={ref} style={{ top:y, left:x }} />;
}

const spring = { damping: 10, stiffness: 100, restDelta: 0.001 };

function useFollowPointer(ref) {
    const xPoint = useMotionValue(-100);
    const yPoint = useMotionValue(-100);
    const x = useSpring(xPoint, spring);
    const y = useSpring(yPoint, spring);

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
    
            
            xPoint.set(clientX - rect.width/2 );
            yPoint.set(clientY - rect.height/2);
        };

        window.addEventListener("mousemove", handlePointerMove);

        return () => window.removeEventListener("mousemove", handlePointerMove);
    }, [xPoint, yPoint]);

    return { x, y };
}

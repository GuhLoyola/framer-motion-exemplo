import MenuItem from "../MenuItem/MenuItem"
import { motion } from "framer-motion"

const navigationVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
}

const Navigation = () => {
  return (
    <motion.ul variants={navigationVariants}>
        {
            [...Array(5)].map((_, i) => (
                <MenuItem key={i}/>
            ))
        }
    </motion.ul>
  )
}

export default Navigation
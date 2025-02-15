import { motion } from "framer-motion"

const Path = ({openPath, closedPath, ...rest} : any) => {
  return (
    <motion.path
    fill="transparent"
    strokeWidth='3'
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"

    variants={{
        open: { d: openPath, transition: { duration: 0.3} },
        closed: { d: closedPath, transition: { duration: 0.3} },
    }}

    {...rest}
    >

    </motion.path>
  )
}

const MenuToggler = ({ toggle } : any) => {
  return (
    <button onClick={toggle}>
        <svg width='23' height='23' viewBox="0 0 23 23">
            {/* <Path d="M 2 2.5 L 20 2.5" />
            <Path d="M 2 9.423 L 20 9.423" />
            <Path d="M 2 16.346 L 20 16.346" /> */}

            <Path openPath='M 3 16.5 L 17 2.5' closedPath='M 2 2.5 L 20 2.5' />
            <Path openPath='' closedPath='M 2 9.423 L 20 9.423' />
            <Path openPath='M 3 2.5 L 17 16.346' closedPath='M 2 16.346 L 20 16.346' />

            
        </svg>
    </button>
  )
}

export default MenuToggler
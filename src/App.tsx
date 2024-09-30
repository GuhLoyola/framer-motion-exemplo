import { motion, useCycle, Variants } from "framer-motion"
import Navigation from "./components/Navigation/Navigation"
import MenuToggler from "./components/MenuToggler/MenuToggler"


const sidebarVariants: Variants = {
  open: {
    clipPath: `circle(1000px at 40px 40px)`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

function App() {

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="background" variants={sidebarVariants} />
      <MenuToggler toggle={() => toggleOpen()} />
      <Navigation />
    </motion.nav>
  );
}

export default App

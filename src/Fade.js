import { motion, AnimatePresence } from 'framer-motion'

const Fade = (props) => {
    return (
        /* Required for components mounting and unmounting from the DOM */
        <AnimatePresence>
            {props.active &&
                <motion.div
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {props.children}
                </motion.div>}
        </AnimatePresence>
    )
}


export default Fade
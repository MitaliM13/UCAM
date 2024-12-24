import '../sport/Sport.css'
import { motion } from 'framer-motion';
function Sport() {
  return (
    <div className='sport'>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        The Master in Sports Management focuses on training professionals capable of managing sports organizations, both at the level of professional teams and infrastructures or events. The program covers areas such as sports marketing, sports event management, and organizational strategy.
      </motion.h3>
    </div>
  );
}

export default Sport;

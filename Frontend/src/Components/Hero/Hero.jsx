import { motion } from 'framer-motion';
import '../Hero/Hero.css';

function Hero() {
  return (
    <motion.div
      className="hero"
    >
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Study with the official Partner of the University of Sport in Europe, UCAM University
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Get a European Master + PG in <br />
          <strong>Sports Management</strong>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Campus Located in Thane, Mumbai
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Apply Now
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Hero;

import '../Leader/Leader.css';
import { motion } from 'framer-motion';

import qs from '../../assets/QS.svg'
import ucam from '../../assets/UCAM.svg'
import spanish from '../../assets/ucamSpanish.svg'
import wes from '../../assets/WES.svg'
import fcb from '../../assets/fcblogo.svg'

function Leader() {

  const scrollAnimation = {
    animate: {
      x: [0,-1000],
      transition : {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear"
        }
      }
    }
  }

  return (
    <>
      <div className='leader'> 
  <div>
    <h5 className='title'>Already choosen by leaders</h5>
  </div>
  <motion.div className='images' {...scrollAnimation}>
    <li><img src={qs} alt="QS" /></li>
    <li><img src={ucam} alt="UCAM" /></li>
    <li><img src={spanish} alt="Spanish" /></li>
    <li><img src={wes} alt="WES" /></li>
    <li><img src={fcb} alt="FCB" /></li>
  </motion.div>
</div>

    </>
  );
}

export default Leader;

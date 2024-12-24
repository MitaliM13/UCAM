import '../Ecosystem/Ecosystem.css'
import { motion } from 'framer-motion'
import QSlogo from '../../assets/QSLogo.svg'
import Airplane from '../../assets/Airplane.svg'
import WES from '../../assets/WES.svg'
function Ecosystem() {
  return (
    <div className='europe'>
        <div>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
            >European Ecosystem</motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
            >Collaborating with UCAM (Universidad Católica San Antonio de Murcia) provides a great opportunity to gain a global perspective and learn from experienced European professors”., one of the best European universities according to international rankings (Qs, Forbes…)</motion.h1>
        </div>
        <div>
            <div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <img src={QSlogo} alt="" />
                </motion.div>
                <div>
                    <h3>One of the first campuses to align with the European Quality System. Ensuring high quality education and consistent academic excellence. European Faculty Academic programmes are designed and taught by European faculty industry experts.</h3>
                </div>
            </div>
            <div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <img src={Airplane} alt="" />
                </motion.div>
                <div>
                    <h3>You will have the unique opportunity to embark on an international adventure through the European Journey, a 3-week cultural and academic trip, visiting international organisations and networking across Spain and international contacts.</h3>
                </div>
            </div> 
            <div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <img src={WES} alt="" />
                </motion.div>
                <div>
                    <h3>The UCAM Mumbai Masters are recognised and approved by the WES - World Education Services, facilitating the acceptance of qualifications in countries like the USA and Canada for further education or employment.</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ecosystem
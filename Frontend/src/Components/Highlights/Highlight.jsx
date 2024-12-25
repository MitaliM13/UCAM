import '../Highlights/Highlight.css';
import { FaCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion';

function Highlight() {
  return (
    <div className='container'>
      <div className='highlight'>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >HIGHLIGHT COURSE</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >Lead international teams Studying Sport Management at UCAM Mumbai</motion.h2>
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2, 
                }
              }
            }}
          >
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              International Networking and career opportunities
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              European and local faculty with expertise in Sports Management.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              International Networking and career opportunities
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              Travel to Spain to live a cultural and academic experience (3 weeks)
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              Top 3 Students will get Opportunities for Internships in Spain
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              Visits to international sports entities
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2, 
                }
              }
            }}
          >
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              Develop strategies and communication for sports organizations and events
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              Integrate human, organizational, and financial knowledge for sports planning
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              Organize sports events at local, national and international levels
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              Scholarship available
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle /> 
              </motion.div>
              Curriculum tailored to the demands of the global marketplace
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className='career'>
        <p>CAREER OPPORTUNITY</p>
        <h2>Shape the future of sports with opportunities that turn passion into profession</h2>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, 
              }
            }
          }}
        >
          <div>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Sports Facility Manager
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Event Coordinator
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Sports Marketing Manager
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Sustainable Sports Manager
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Sports Consultant
          </motion.li>
          </div>
          <div>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Sports Technology Manager
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Sports Analytics Manager
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Director of Sports Management
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Chief Operations Officer (COO)
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Sports Operations Manager
          </motion.li>
          </div>
        </motion.ul>

        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default Highlight;

import { motion } from 'framer-motion';
import '../Faculty/Faculty.css';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';

function Faculty() {
  return (
    <div className="faculty-section">
      <p className="faculty-heading">FACULTY MEMBERS</p>
      <h2 className="faculty-title">European and local faculty with expertise in Sports Management</h2>

      <div className="faculty-container">
        <motion.div
          className="faculty-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="faculty-info">
            <img src={person2} alt="Javier Plitt-Steven" className="faculty-image" />
            <div>
              <h4 className="faculty-name">Javier Plitt-Steven</h4>
              <p className="faculty-position">Academic Director of UCAM Mumbai Campus</p>
            </div>
          </div>
          <div>
            <h3 className="faculty-description">
              Distinguished Academic Director and Innovator in Hospitality, Business Strategy. Over ten years of experience in AI, digital transformation, and aeronautical engineering.
            </h3>
          </div>
        </motion.div>

        <motion.div
          className="faculty-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="faculty-info">
            <img src={person1} alt="Manuel Egea Medrano" className="faculty-image" />
            <div>
              <h4 className="faculty-name">Manuel Egea Medrano</h4>
              <p className="faculty-position">
                Director of European Master + PG Certificate in Sports Management
              </p>
            </div>
          </div>
          <div>
            <h3 className="faculty-description">
              Distinguished Expert in Strategic Business Leadership: Specializes in aligning corporate diplomacy and business strategy to drive organisational success.
            </h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Faculty;

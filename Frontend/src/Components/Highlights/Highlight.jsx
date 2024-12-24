import '../Highlights/Highlight.css'
import { FaCheckCircle } from "react-icons/fa";
function Highlight() {
  return (
    <div className='container'>
      <div className='highlight'>
        <p>HIGHLIGHT COURSE</p>
        <h2>Lead international teams Studying Sport Management at UCAM Mumbai</h2>
        <div>
          <div>
            <p><FaCheckCircle /> International Networking and career opportunities</p>
            <p><FaCheckCircle /> European and local faculty with expertise in Sports Management.</p>
            <p><FaCheckCircle /> International Networking and career opportunities</p>
            <p><FaCheckCircle /> Travel to Spain to live a cultural and academic experience (3 weeks)</p>
            <p><FaCheckCircle /> Top 3 Students will get Opportunities for Internships in Spain</p>
            <p><FaCheckCircle /> Visits to international sports entities</p>
          </div>

          <div>
            <p><FaCheckCircle /> Develop strategies and communication for sports organizations and events</p>
            <p><FaCheckCircle /> Integrate human, organizational, and financial knowledge for sports planning</p>
            <p><FaCheckCircle /> Organize sports events at local, national and international levels</p>
            <p><FaCheckCircle /> Scholarship available</p>
            <p><FaCheckCircle /> Curriculum tailored to the demands of the global marketplace</p>
          </div>
        </div>
      </div>

      <div className='career'>
        <p>CAREER OPPORTUNITY</p>
        <h2>Shape the future of sports with opportunities that turn passion into profession</h2>
        <div>
          <li>Sports Facility Manager</li>
          <li>Event Coordinator</li>
          <li>Sports Marketing Manager</li>
          <li>Sustainable Sports Manager</li>
          <li>Sports Consultant</li>
          <li>Sports Technology Manager</li>
          <li>Sports Analytics Manager</li>
          <li>Director of Sports Management</li>
          <li>Chief Operations Officer (COO)</li>
          <li>Sports Operations Manager</li>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Highlight
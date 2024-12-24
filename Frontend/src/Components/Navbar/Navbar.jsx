import '../Navbar/Navbar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
function Navbar() {

    const [scrollDirection, setScrollDirection] = useState('down')
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY) {
                setScrollDirection('up');
              } else {
                setScrollDirection('down');
              }
              setLastScrollY(currentScrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY])
  return (
    <motion.nav
    initial={{ y: 0 }}
    animate={{ y: scrollDirection === 'up' ? '-100%' : 0 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
        <div className='logo'>
            <h1>UCAM</h1>
            <p>MUMBAI CAMPUS</p>
        </div>
        <div className='navlinks'> 
            <ul>
                <li><Link to='campus' smooth={true} offset={0} duration={500}>Campus of Sports</Link></li>
                <li><Link to='europe' smooth={true} offset={0} duration={500}>European Ecosystem</Link></li>
                <li><Link to='highlight' smooth={true} offset={0} duration={500}>Program</Link></li>
            </ul>
        </div>
        <div className='btn'>
            <button><Link to='form' smooth={true} offset={0} duration={500}>Apply Now</Link></button>
        </div>
    </motion.nav>
  )
}

export default Navbar
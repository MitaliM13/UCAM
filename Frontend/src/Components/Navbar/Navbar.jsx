import '../Navbar/Navbar.css'
import { useEffect, useState } from 'react'
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
                <li>Campus of Sports</li>
                <li>European Ecosystem</li>
                <li>Program</li>
            </ul>
        </div>
        <div className='btn'>
            <button>Apply Now</button>
        </div>
    </motion.nav>
  )
}

export default Navbar
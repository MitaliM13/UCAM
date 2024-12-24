import './App.css'
import Campus from './Components/campus/Campus'
import Ecosystem from './Components/Ecosystem/Ecosystem'
import Hero from './Components/Hero/Hero'
import Leader from './Components/Leader/Leader'
import Navbar from './Components/Navbar/Navbar'
import Sport from './Components/sport/Sport'
import Organization from './Components/Organization/Org'
import Highlight from './Components/Highlights/Highlight'
import Link from './Components/link/Link'
import Faculty from './Components/Faculty/Faculty'
import Curriculum from './Components/Curriculum/Curriculum'
import Form from './Components/Form/Form'
// import Apiform from './Components/ApiForm/Apiform'
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Leader/>
      <Sport/>
      <Campus/>
      <Ecosystem/>
      <Organization/>
      <Highlight/>
      <Link/>
      <Faculty/>
      <Curriculum/>
      <Form/>
      {/* <Apiform/> */}
    </>
  )
}

export default App

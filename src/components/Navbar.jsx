import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav>
      <h3>Nav</h3>
      <i onClick={handleNav}>open</i>
      <div className={isNavOpen ? "showNav" : ""}>
        <i onClick={handleNav}>close</i>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
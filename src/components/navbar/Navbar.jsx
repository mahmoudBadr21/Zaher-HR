import './navbar.css'
import logo from "../../assets/logo.png"
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 900) {
      return {right: !menuOpen && "-100%"}
    }
  }

  return (
    <nav>
      <div className='navbar flexCenterSpace'>
        <Link className="logo" to={'/'}>
          <img src={logo} alt="logo" />
        </Link>

        <i className="fas fa-bars-staggered toggleIcon" onClick={() => setMenuOpen((prev) => !prev)}></i>

        <div className="links" style={getMenuStyle(menuOpen)} onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-close closeMenu"></i>
          <ul className='flexCenterSpace'>
            <li><a href='#about'>About</a></li>
            <li><a href='#vision'>Vision</a></li>
            <li><a href='#mission'>Mission</a></li>
            <li><a href='#values'>Values</a></li>
            <li><a href='#services'>Services</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
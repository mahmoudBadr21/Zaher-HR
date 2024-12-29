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
            <li><Link to='/#about'>About</Link></li>
            <li><Link to='/#vision'>Vision</Link></li>
            <li><Link to='/#mission'>Mission</Link></li>
            <li><Link to='/#values'>Values</Link></li>
            <li><Link to='/#services'>Services</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
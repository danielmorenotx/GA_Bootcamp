import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-lists">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
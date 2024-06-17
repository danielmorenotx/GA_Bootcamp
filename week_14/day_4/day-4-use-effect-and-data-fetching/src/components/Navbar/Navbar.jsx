import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = ({planCount}) => {

  return (
    <header className="header">
      <h2>Travel Planner</h2>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/plan">Plan</Link>
      </nav>
      <p>Plan counter: {planCount}</p>
      <button>Toggle Theme</button>
    </header>
  )
}

export default Navbar;
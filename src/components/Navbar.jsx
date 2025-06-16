import { Link } from 'react-router-dom';
import "../../src/css/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">FlimDB</Link>
      </div>
      <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favourites" className="nav-link">Favourites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
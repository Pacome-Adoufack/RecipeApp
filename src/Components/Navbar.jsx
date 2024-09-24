import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   
        <nav className="navbar">
            <Link to="/" className="nav-link">
            Home
            </Link>
            <Link to="/search" className="nav-link">
            Search
            </Link>
            
            <Link to="/random" className="nav-link">
            Random
            </Link>
            <Link to="/category" className="nav-link">
            Categories
            </Link>
        </nav>
    
  )
}

export default Navbar

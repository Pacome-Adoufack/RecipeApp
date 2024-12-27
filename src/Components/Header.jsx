import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import "./Header.css";
import { useEffect, useContext } from "react";
import { MealContext } from "./MealContext";
import SearchInput from "./SearchInput";
import logo from "../assets/image/Dompaco.png";

const Header = () => {
  const { darkMode } = useContext(MealContext);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <header className="header">
      <div className="logo-container">
      <Link to="/">
      <img className="logo" src={logo} alt="" />
          </Link>
        
      </div>
        <nav className="nav-container">
         <SearchInput />
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/login" className="nav-login">
            <p className="nav-paragraphe">login</p>
          </Link>
          <ToggleSwitch />
        </nav>
      
    </header>
  );
};

export default Header;

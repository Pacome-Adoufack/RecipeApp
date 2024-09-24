import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import "./Header.css";
import { useEffect, useContext } from "react";
import { MealContext } from "./MealContext";
import SearchInput from "./SearchInput";

const Header = () => {
  const { darkMode } = useContext(MealContext);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">Wahala Foods</h1>
      </div>
        <nav className="nav-container">
        <SearchInput />
          <Link to="/" className="home">
            Home
          </Link>
          <button className="nav-login">Log in</button>
          <ToggleSwitch />
        </nav>
      
    </header>
  );
};

export default Header;
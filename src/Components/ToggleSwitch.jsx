import { useContext } from "react";
import { MealContext } from "./MealContext";

const ToggleSwitch = () => {
  const { darkMode, setDarkMode } = useContext(MealContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="switch-container">
      <label className="switch-label">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          style={{ display: "none" }}
        />
        <span className="slider"></span>
      </label>
      {darkMode ? (
        <div style={{ position: "absolute", left: "75px", zIndex: "1" }}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="moonIcon"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          </svg>
        </div>
      ) : (
        <div style={{ position: "absolute", left: "75px", zIndex: "1" }}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="sunIcon"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="4"></circle>
            <path
              d="M3 12h1m16 0h1m-9-9v1m0 16v1m-8.5-8.5l.7 .7m12.1 0l.7 .7m-12.1 0l-.7 .7m12.1-12.1l-.7 .7"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ToggleSwitch;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/?q=${searchTerm}`);
  };

  return (
    <div className="search-wrappr">
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a recipe"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
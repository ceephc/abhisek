import { useState } from "react";
import { YoutubeLogo } from "../assets/youtube-logo";
import { SearchIcon } from "../assets/search-icon";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function inputHandler(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search === "") return;
    navigate(`/search/${search}`);
  }

  return (
    <nav>
      <Link to="/">
        <YoutubeLogo width="90px" height="30px" />
      </Link>
      <div className="search-input_container">
        <form onSubmit={handleSubmit}>
          <label className="icon-wrapper" htmlFor="search-input">
            <SearchIcon height="20px" width="20px" />
          </label>
          <input
            className="search-input"
            id="search-input"
            type="text"
            placeholder="Search here"
            value={search}
            onChange={inputHandler}
          />
        </form>
      </div>
    </nav>
  );
}

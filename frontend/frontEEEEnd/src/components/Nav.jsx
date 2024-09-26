import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <div>
      <nav className="navigation">
        <Link className="logo" to="/">
          <img className="logo-img" src="librex.png" alt="book" />
        </Link>

        <div className="searchNav">
          <input
            id="inputBtn"
            className="searchBigScreen"
            type="text"
            placeholder="Title, Author, Isbn, year, publisher"
          />
          <button id="searchBtn" className="searchSubmit">
            Search
          </button>
        </div>
      </nav>

      <div className="navSearch">
        <input id="inputNav" className="searchSmallScreen" type="text" />
        <Link to="#" className="searchSubmit" id="searchNav">
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

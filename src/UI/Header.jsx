import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
// import { useGetCurrentUser } from "../features/authentication/useGetCurrentUser";

function Header() {
  const { user } = useUser();
  console.log("User From Header:", user.photo);
  return (
    <header className="header">
      <nav className="nav nav--tours">
        {/* <a href="/" className="nav__el">
          All tours
        </a> */}
        <Link to={"/"} className="nav__el">
          All tours
        </Link>
        <form className="nav__search">
          <button className="nav__search-btn">
            <svg>
              <use xlinkHref="img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <div className="header__logo">
        <Link to={"/"}>
          <img src="/img/logo-white.png" alt="Natours logo" />
        </Link>
      </div>
      <nav className="nav nav--user">
        {/* <a href="#" className="nav__el">
          My bookings
        </a> */}
        <Link to={"/"} className="nav__el">
          My bookings
        </Link>
        <Link to={"myAccount"} className="nav__el">
          <img
            src={`/img/users/${user?.photo}`}
            alt="User photo"
            className="nav__user-img"
          />
          <span>{user.name}</span>
        </Link>
        {user?.name ? (
          <Link to={"logout"} className="nav__el">
            Log Out
          </Link>
        ) : (
          <Link to={"login"} className="nav__el">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;

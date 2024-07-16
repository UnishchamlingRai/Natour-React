import { NavLink } from "react-router-dom";

const AccountNav = () => {
  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <li className="side-nav--active">
          <NavLink to={"settings"}>
            <svg>
              <use xlinkHref="/img/icons.svg#icon-settings" />
            </svg>
            Settings
          </NavLink>
        </li>

        <li>
          <NavLink to={"bookings"}>
            <svg>
              <use xlinkHref="/img/icons.svg#icon-briefcase" />
            </svg>
            My bookings
          </NavLink>
        </li>
        <li>
          <NavLink to={"reviews"}>
            <svg>
              <use xlinkHref="/img/icons.svg#icon-star" />
            </svg>
            My reviews
          </NavLink>
        </li>
        <li>
          <a href="#">
            <svg>
              <use xlinkHref="/img/icons.svg#icon-credit-card" />
            </svg>
            Billing
          </a>
        </li>
      </ul>
      <div className="admin-nav">
        <h5 className="admin-nav__heading">Admin</h5>
        <ul className="side-nav">
          <li>
            <a href="#">
              <svg>
                <use xlinkHref="img/icons.svg#icon-map" />
              </svg>
              Manage tours
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlinkHref="img/icons.svg#icon-users" />
              </svg>
              Manage users
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlinkHref="img/icons.svg#icon-star" />
              </svg>
              Manage reviews
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlinkHref="img/icons.svg#icon-briefcase" />
              </svg>
              {/* Add label here */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AccountNav;

import React from "react";
import PropTypes from "prop-types";
import Useritem from "../users/Useritem";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i>
        <Link to="/">{title}</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">
            <i
              style={{ marginRight: "5px" }}
              class="lni lni-arrow-right-circle"
            ></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i
              style={{ marginRight: "5px" }}
              class="lni lni-arrow-right-circle"
            ></i>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

//Default property values
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Navbar;

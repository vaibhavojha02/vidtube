import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          src="./src/assets/menu.png"
          alt=""
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        ></img>
        <Link to="/">
          <img className="logo" src="./src/assets/logo.png" alt=""></img>
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="search"></input>
          <img src="./src/assets/search.png" alt=""></img>
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src="./src/assets/upload.png" alt=""></img>
        <img src="./src/assets/more.png" alt=""></img>
        <img src="./src/assets/notification.png" alt=""></img>
        <img id="user" src="./src/assets/jack.png" alt=""></img>
      </div>
    </nav>
  );
};

export default Navbar;

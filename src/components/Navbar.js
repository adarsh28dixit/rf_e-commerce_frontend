import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  }
  

  return (
    <div className="navbar">
      <div>logo</div>
      <div className="navbar-items">
        <div>
          <Link to={"/"} className={activeLink === "home" ? "active" : "nav-link"} onClick={() => handleLinkClick("home")}>
            HOME{" "}
          </Link>
        </div>
        <div>
          <Link to="/journey" className={activeLink === "journey" ? "active" : "nav-link"} onClick={() => handleLinkClick("journey")}>
            THE JOURNEY{" "}
          </Link>
        </div>
        <div>
          <Link to="/team" className={activeLink === "team" ? "active" : "nav-link"} onClick={() => handleLinkClick("team")}>
            TEAM{" "}
          </Link>
        </div>
        <div>
          <Link to="/store" className={activeLink === "store" ? "active" : "nav-link"} onClick={() => handleLinkClick("store")}>
            STORE{" "}
          </Link>
        </div>
        <div>
          <Link to="/contact" className={activeLink === "contact" ? "active" : "nav-link"} onClick={() => handleLinkClick("contact")}>
            CONTACT{" "}
          </Link>
        </div>
      </div>
      <div className="nav-icons">
        <div className="fa-icon">
          <i className="fa fa-user-o"></i> GAGAN
        </div>

        <div className="burger-menu">
          <Menu right itemListElement="div" overlay={true}>
            <div>
              <Link to={"/"} className="nav-link">
                HOME{" "}
              </Link>
            </div>
            <div>
              <Link to="/journey" className="nav-link">
                THE JOURNEY{" "}
              </Link>
            </div>
            <div>
              <Link to="/team" className="nav-link">
                TEAM{" "}
              </Link>
            </div>
            <div>
              <Link to="/store" className="nav-link">
                STORE{" "}
              </Link>
            </div>
            <div>
              <Link to="/contact" className="nav-link">
                CONTACT{" "}
              </Link>
            </div>
            <div>
              <Link to="/cart" className="nav-link">
              <i className="fa fa-shopping-cart"></i> {" "}
              </Link>
            </div>
          </Menu>
        </div>
      </div>
    </div>
  );
}

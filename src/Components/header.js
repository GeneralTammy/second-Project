import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <style>
        {`
          .nav-item:hover {
            color: #fcfdfbff !important;
            transform: scale(1.1);
          }
          .icon:hover {
            color: #fcfdfbff !important;
            transform: scale(1.1);
          }
        `}
      </style>
      <header style={styles.header}>
        <img style={styles.logo} src="/logo192.png" alt="Logo" />

        <nav>
          <ul style={styles.navList}>
            <li>
              <a href="Home" style={styles.navItem} className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="About" style={styles.navItem} className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="/Service" style={styles.navItem} className="nav-item">
                Service
              </a>
            </li>
            <li>
              <a href="Contact" style={styles.navItem} className="nav-item">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div style={styles.icons}>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={styles.icon}
            className="icon"
          />
          <FontAwesomeIcon icon={faUser} style={styles.icon} className="icon" />
          <FontAwesomeIcon icon={faBars} style={styles.icon} className="icon" />
        </div>
      </header>
    </>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.6rem 1.25rem",
    backgroundColor: "rgb(169, 240, 98)",
    color: "black",
    position: "fixed",
    zIndex: 10,
    top: 0,
    right: 0,
    width: "100%",
    boxSizing: "border-box",
  },
  logo: {
    width: "3rem",
    cursor: "pointer",
    transition: "transform .2s ease",
    marginLeft: "5em",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "2rem",
  },
  navItem: {
    textDecoration: "none",
    color: "black",
    fontWeight: 600,
    fontSize: "16px",
    cursor: "pointer",
    transition: "color .2s ease, transform .2s ease",
  },
  icons: {
    display: "flex",
    gap: "1.5rem",
    marginRight: "3rem",
  },
  icon: {
    cursor: "pointer",
    fontSize: "1.4rem",
    transition: "transform .2s ease",
  },
};

export default Header;

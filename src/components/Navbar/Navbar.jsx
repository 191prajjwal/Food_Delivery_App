import React from "react";
import { NavLink ,Link} from "react-router-dom"; 
import styles from "./Navbar.module.css";
import logo from "../../assets/logo1.png";
import user from "../../assets/user.png";

export default function Navbar() {

    const name= handleName(localStorage.getItem("name"))
    function handleName(name){
        const words = name.trim().split(" ");
    
       
          return (words[0][0].toUpperCase()+words[0].slice(1))
       
      };
  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Order UK Logo" className={styles.logo} />
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/special-offers"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Special Offers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/restaurants"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Restaurants
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/track-order"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Track Order
          </NavLink>
        </li>
        <li>
          <Link to="/profile" className={`${styles.navLink} ${styles.profileLink}`}>
            <img src={user} alt="User" className={styles.userImg} />
            Hey {name}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

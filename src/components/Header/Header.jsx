import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import cartImg from "../../assets/cart.png"
import downImg from '../../assets/down.png'


export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.topBanner}>
          <div className={styles.offerText}>
            🌞 Get 5% Off your first order, <span className={styles.promo}>Promo: ORDERS</span>
          </div>
          <div className={styles.locationCart}>
            <span className={styles.location}>
              📍 Regent Street, A4, 4201, London
            </span>
            <a href="/change-location" className={styles.changeLocation}>
              Change Location
            </a>
            <div className={styles.cartDiv}>
            <img src={cartImg} className={styles.cart} alt="cart" />
            <button className={styles.cartButton}> My Cart</button>
            <img src={downImg} alt="down" className={styles.downImg}/>
            
            </div>
           
          </div>
        </div>
        <Navbar />
      </header>
    );
  }
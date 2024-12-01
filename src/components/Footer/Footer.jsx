import React from 'react';
import styles from './Footer.module.css';
import logoImg from "../../assets/logo.png"
import storesImg from "../../assets/stores.png"
import fbImg from "../../assets/Facebook.png"
import instaImg from "../../assets/Instagram.png"
import tikImg from "../../assets/TikTok.png"
import snapImg from "../../assets/Snapchat.png"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <img src={logoImg} alt="Order Up Logo" className={styles.footerLogo} />
            <div className={styles.appStoreButtons}>
              <a href=""><img src={storesImg} alt="App Store" className={styles.footerStoreLogo}/></a>
            </div>
            <p className={styles.companyInfo}>Company # 400039-445, Registered with House of companies</p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionHeading}>Get Exclusive Deals in your Inbox</h4>
            <form className={styles.emailSubscription}>
              <input type="email" placeholder="youremail@gmail.com" />
              <button type="submit">Subscribe</button>
            </form>
            <p className={styles.subscriptionNote}>We wont spam, read our <a className={styles.emailPolicy} href="#">email policy </a></p>

            <div className={styles.socialMedia}>
              <a href=""><img src={fbImg} alt="Facebook" /></a>
              <a href=""><img src={instaImg}alt="Instagram" /></a>
              <a href=""><img src={tikImg} alt="Tik-Tok" /></a>
              <a href=""><img src={snapImg} alt="Snapchat" /></a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionHeading}>Legal Pages</h4>
            <ul className={styles.legalList}>
              <li><a href="">Terms and conditions</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Cookies</a></li>
              <li><a href="">Modern Slavery Statement</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionHeading}>Important Links</h4>
            <ul className={styles.importantLinks}>
              <li><a href="">Get Help</a></li>
              <li><a href="">Add your restaurant</a></li>
              <li><a href="">Sign up to deliver</a></li>
              <li><a href="">Create a business account</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
        
        <ul>
         <li className={styles.copyright}>Order.uk Copyright 2024, All Rights Reserved.</li>
         </ul>
        
         <ul className={styles.bottomLinks}>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Do not sell or share my personal information</a></li>
          </ul>
         
        </div>
      </div>
    </footer>
  );
}
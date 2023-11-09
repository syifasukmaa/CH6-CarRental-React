import React from 'react';
import styles from '../styles.module.css';

export default function Footer() {
  return (
    <footer
      id="footer"
      className={`${styles.containerAll} d-lg-flex justify-content-lg-between`}
    >
      <div className={styles.biodataWrapper}>
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className={styles.navWrapper}>
        <p>
          <a href="#services">Our services</a>
        </p>
        <p>
          <a href="#whyUs">Why Us</a>
        </p>
        <p>
          <a href="#testimonial">Testimonial</a>
        </p>
        <p>
          <a href="#faq">FAQ</a>
        </p>
      </div>
      <div className="contact--wrapper">
        <p>Connect with us</p>
        <div className={styles.iconWrapper}>
          <a href="https://www.facebook.com/">
            <img
              src="assets/icon/icon_facebook.svg"
              alt="icon facebook"
            />
          </a>

          <a href="https://www.instagram.com/">
            <img
              src="assets/icon/icon_instagram.svg"
              alt="icon instagram"
            />
          </a>

          <a href="https://twitter.com/">
            <img
              src="assets/icon/icon_twitter.svg"
              alt="icon twitter"
            />
          </a>
          <a href="">
            <img
              src="assets/icon/icon_mail.svg"
              alt="icon mail"
            />
          </a>
          <a href="">
            <img
              src="assets/icon/icon_twitch.svg"
              alt="icon twitch"
            />
          </a>
        </div>
      </div>
      <div className={styles.logoWrapper}>
        <p>Copyright Binar 2022</p>
        <img
          src="assets/img/logo.png"
          alt="logo"
          className={`${styles.logo} ${styles.logoFooter}`}
        />
      </div>
    </footer>
  );
}

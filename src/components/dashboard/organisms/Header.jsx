import React from 'react';
import Link from 'next/link';
import styles from '../styles.module.css';
import Button from '../../Button/Button';

export default function Header() {
  return (
    <header
      id="header"
      className={`w-100 position-relative ${styles.header}`}
    >
      <div className={styles.containerAll}>
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
          <div className={`container-fluid ${styles.containerFluid}`}>
            <img
              src="/assets/img/logo.png"
              alt=""
              className={styles.logo}
            />

            <button
              className={`navbar-toggler ${styles.navbarToggler}`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <img
                src="/assets/icon/fi_menu.svg"
                alt="button burger"
              />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className={`offcanvas-title ${styles.offcanvasTitle}`}
                  id="offcanvasNavbarLabel"
                >
                  BCR
                </h5>
                <button
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  className={styles.buttonClose}
                >
                  <img
                    src="/assets/icon/fi_x.svg"
                    alt="button close"
                  />
                </button>
              </div>
              <div className={`offcanvas-body ${styles.offcanvasBody}`}>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#ourServices"
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#whyUs"
                    >
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#testimonial"
                    >
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#faq"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <Button btn={styles.btnRegister}>Register</Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className={styles.headerText}>
          <h1 className={styles.headerHeading}>
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className={styles.headerDesc}>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Link href="/cars">
            <Button btn={styles.btnSewaMobil}>Mulai Sewa Mobil</Button>
          </Link>
        </div>
      </div>
      <img
        src="/assets/img/Mercedes.png"
        alt="img marcedes"
        className={styles.imgMarcedes}
      />
    </header>
  );
}

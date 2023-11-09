import React from 'react';
import styles from '../styles.module.css';
import Button from '@/components/Button/Button';

export default function Main() {
  return (
    <main className={styles.main}>
      <nav
        className={`${styles.navbar} navbar navbar-expand-lg bg-transparent`}
      >
        <div className="container">
          <a href="index.html">
            <img
              className="navbar-brand"
              src="images/logo.png"
              alt=""
              style={{ width: '100px', height: '34px' }}
            />
          </a>
          <button
            className="btn btn-white navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title fw-bold"
                style={{ marginLeft: '20px' }}
                id="offcanvasRightLabel"
              >
                BCR
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body justify-content-end">
              <ul className="navbar-nav mr-2 mb-lg-0">
                <li className="nav-item mx-3 my-1">
                  <a
                    className="nav-link"
                    href="#ourservices"
                  >
                    Our Sevices
                  </a>
                </li>
                <li className="nav-item mx-3 my-1">
                  <a
                    className="nav-link ml"
                    href="#whyus"
                  >
                    Why Us
                  </a>
                </li>
                <li className="nav-item mx-3 my-1">
                  <a
                    className="nav-link"
                    href="#testimonial"
                  >
                    Testimonial
                  </a>
                </li>
                <li className="nav-item mx-3 my-1">
                  <a
                    className="nav-link"
                    href="#faq"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              {/* <button className={`btn ${styles.btnRegister} mx-3 my-1`}>
                Register
              </button> */}
              <Button btn={styles.btnRegister}>Register</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className={styles.mobil}>
        <div className="container-xxl">
          <div className="row">
            <div
              className="col-lg-5  mx-lg-5 col-xl-5 col-xxl-5 mx-md-0"
              style={{ paddingTop: '100px' }}
            >
              <h2
                className="fw-bold"
                style={{ paddingRight: '10px' }}
              >
                Sewa & Rental Mobil Terbaik di kawasan Depok
              </h2>
              <p style={{ paddingRight: '40px' }}>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.{' '}
              </p>
              <button className={`btn ${styles.btnUtama}`}>
                Mulai Sewa Mobil
              </button>
            </div>
            <div
              className="col-lg-5 col-xl-6 col-xxl-6 mt-lg-3"
              style={{ paddingTop: '50px' }}
            >
              <img
                className=""
                width="100%"
                src="/images/img_car.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

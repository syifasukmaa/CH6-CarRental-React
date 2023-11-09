import React from 'react';
import Link from 'next/link';
import styles from '../styles.module.css';
import Button from '../../Button/Button';

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className={styles.testimonial}
    >
      <h2 className={`text-center ${styles.testimoniHeader}`}>Testimonial</h2>
      <p className={`text-center ${styles.testimoniDesc}`}>
        Berbagai review positif dari para pelanggan kami
      </p>
      <div className={styles.containerAll}>
        <div
          id="carouselExampleCaptions"
          className={`carousel slide  ${styles.carousel}`}
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <div className={styles.allItem}>
                <img
                  src="/assets/img/img_photo.png"
                  className={styles.imgCarousel}
                  alt="..."
                />
                <div className={styles.carouselCaption}>
                  <div
                    className={`mb-4 mb-lg-2 text-center text-lg-start ${styles.carouselStar}`}
                  >
                    <img
                      src="/assets/icon/Star 1.svg"
                      alt=""
                    />
                    <img
                      src="/assets/icon/Star 1.svg"
                      alt=""
                    />
                    <img
                      src="/assets/icon/Star 1.svg"
                      alt=""
                    />
                    <img
                      src="/assets/icon/Star 1.svg"
                      alt=""
                    />
                    <img
                      src="/assets/icon/Star 1.svg"
                      alt=""
                    />
                  </div>
                  <p className={`${styles.carouselDesc} mb-2`}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <h6 className={styles.carouselName}>John Dee 32, Bromo</h6>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className={styles.allItem}>
                <img
                  src="/assets/img/sipa.jpg"
                  className={styles.imgCarousel}
                  alt="..."
                />
                <div className={styles.carouselCaption}>
                  <div
                    className={`mb-4 mb-lg-2 text-center text-lg-start ${styles.carouselStar}`}
                  >
                    <img
                      src="/assets/icon/Star 1.svg"
                      alt=""
                    />
                    <img
                      src="/assets/icon/Star 1.svg"
                      alt=""
                    />
                    <img
                      src="/assets/icon/Star 1.svg"
                      alt=""
                    />
                  </div>
                  <p className={`${styles.carouselDesc} mb-2`}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <h6 className={styles.carouselName}>Syifa Sukma 21, Depok</h6>
                </div>
              </div>
            </div>
            <button
              className={`carousel-control-prev ${styles.carouselControlPrev}`}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <img
                src="/assets/icon/fi_chevron-left.svg"
                alt=""
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className={`carousel-control-next ${styles.carouselControlNext}`}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <img
                src="/assets/icon/fi_chevron-right.svg"
                alt=""
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div
          className={`${styles.testimoniButtom} d-flex align-items-center flex-column`}
        >
          <h1 className={`mb-3 text-center ${styles.testimoniHeaderButtom}`}>
            Sewa Mobil di (Lokasimu) sekarang
          </h1>
          <p className={`text-center ${styles.testimoniDesc}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href="/cars">
            <Button btn={styles.btnTestimoni}>Mulai Sewa Sekarang</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

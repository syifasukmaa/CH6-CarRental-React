import React from 'react';
import styles from '../styles.module.css';
import ServicesPoint from '../atoms/ServicesPoint';

export default function Service() {
  return (
    <section
      id="ourServices"
      className={styles.ourServices}
    >
      <div className="d-flex flex-column flex-lg-row align-items-center">
        <img
          src="/assets/img/img_service.png"
          alt="image service"
          className={styles.imgServices}
        />
        <div className={styles.servicesText}>
          <h2 className={styles.servicesHeading}>
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h2>
          <div className={styles.servicesDesc}>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ServicesPoint pointText="Sewa Mobil Lepas Kunci di Bali 24 Jam" />
            <ServicesPoint pointText="Sewa Mobil Jangka Panjang Bulanan" />
            <ServicesPoint pointText="Gratis Antar - Jemput Mobil di Bandara" />
            <ServicesPoint pointText="Layanan Airport Transfer / Drop In Out" />
          </div>
        </div>
      </div>
    </section>
  );
}

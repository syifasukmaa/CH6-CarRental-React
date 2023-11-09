import React from 'react';
import styles from '../styles.module.css';
import CardServices from '../atoms/CardServices';

export default function WhyUs() {
  return (
    <section
      id="whyUs"
      className={styles.containerAll}
    >
      <h2 className={`${styles.whyusHeading} text-center text-lg-start`}>
        Why Us
      </h2>
      <p className={`${styles.whyusDesc} text-center text-lg-start`}>
        Mengapa harus pilih Binar Car Rental
      </p>
      <div className={`row ${styles.cardWrapper}`}>
        <div className="col-12 col-md-12 col-lg-3 mt-4 mt-lg-0">
          <CardServices
            pathImg="/assets/icon/icon_complete.svg"
            cardTitle="Mobil Lengkap"
            cardText="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat"
          />
        </div>
        <div className="col-12 col-md-12 col-lg-3 mt-3 mt-lg-0">
          <CardServices
            pathImg="/assets/icon/icon_price.svg"
            cardTitle="Harga Murah"
            cardText="Harga murah dan bersaing, bisa bandingkan harga kami dengan
            rental mobil lain"
          />
        </div>
        <div className="col-12 col-md-12 col-lg-3 mt-3 mt-lg-0">
          <CardServices
            pathImg="/assets/icon/icon_24hrs.svg"
            cardTitle="Layanan 24 Jam"
            cardText="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
            tersedia di akhir minggu"
          />
        </div>
        <div className="col-12 col-md-12 col-lg-3 mt-3 mt-lg-0">
          <CardServices
            pathImg="/assets/icon/icon_professional.svg"
            cardTitle="Sopir Professional"
            cardText="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
            tepat waktu"
          />
        </div>
      </div>
    </section>
  );
}

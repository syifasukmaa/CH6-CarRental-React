'use client';
import React, { useContext, useState } from 'react';
import styles from '../styles.module.css';
import Button from '@/components/Button/Button';
import { CarContext } from '@/store/carContext';

export default function Search() {
  const { searchCar } = useContext(CarContext);

  const [input, setInput] = useState({
    tipeDriver: 'default',
    tanggal: '',
    waktuJemput: false,
    jumlahPenumpang: 0,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchCar(
      input.tipeDriver,
      input.tanggal,
      input.waktuJemput,
      input.jumlahPenumpang
    );
  };
  return (
    <section className={styles.search}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className={`row ${styles.searchCard} mx-lg-5 py-3 px-4`}>
              <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                <label>Tipe Driver</label>
                <select
                  className={`form-select ${styles.formSelect}`}
                  aria-label="Default select example"
                  id="tipeDriver"
                  defaultValue="default"
                  onChange={handleInputChange}
                >
                  <option
                    value="default"
                    className={styles.option}
                  >
                    Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;{' '}
                  </option>
                  <option
                    value={true}
                    className={styles.option}
                  >
                    Dengan Supir
                  </option>
                  <option
                    value={false}
                    className={styles.option}
                  >
                    Tanpa Supir (Lepas Kunci)
                  </option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label>Tanggal</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="tanggal"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                <label>Pilih Waktu</label>
                <select
                  className={`form-select ${styles.formSelect}`}
                  aria-label="Default select example"
                  id="waktuJemput"
                  defaultValue="false"
                  onChange={handleInputChange}
                >
                  <option
                    value="false"
                    className={styles.option}
                  >
                    Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </option>
                  <option
                    value="08:00"
                    className={styles.option}
                  >
                    08.00 WIB
                  </option>
                  <option
                    value="09:00"
                    className={styles.option}
                  >
                    09.00 WIB
                  </option>
                  <option
                    value="10:00"
                    className={styles.option}
                  >
                    10.00 WIB
                  </option>
                  <option
                    value="11:00"
                    className={styles.option}
                  >
                    11.00 WIB
                  </option>
                  <option
                    value="12:00"
                    className={styles.option}
                  >
                    12.00 WIB
                  </option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label className="fw-light">Jumlah Penumpang (optional)</label>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control border-end-0"
                    placeholder="Jumlah Penumpang"
                    id="jumlahPenumpang"
                    // defaultValue="0"
                    onChange={handleInputChange}
                  />
                  <span className="input-group-text bg-white">
                    <img
                      src="images/fi_users.png"
                      width="20px"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="col-lg-2 col-xl-auto col-md-2 pt-4">
                <Button
                  btn={styles.btnUtama}
                  id="load-btn"
                  onClick={handleSearch}
                >
                  Cari Mobil
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

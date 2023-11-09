'use client';
import React, { useContext, useState, useEffect } from 'react';
import styles from '../styles.module.css';
import Button from '@/components/Button/Button';
import { CarContext } from '@/store/carContext';
import LoadingSkeleton from '@/components/Loading/Loading';
import ErrorMessage from '@/components/error/error';

export default function Car() {
  const { cars, loading, error } = useContext(CarContext);
  return (
    <section className={styles.cars}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div
              className="row"
              id="cars-container"
            >
              {loading && (
                <>
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                </>
              )}
              {!loading && !error && cars.length === 0 ? (
                <h2 className={`text-center`}>Mobil tidak ada</h2>
              ) : (
                cars &&
                cars.map((car) => (
                  <div
                    className="col-lg-4 my-2 col-md-6 col-12"
                    key={car.id}
                  >
                    <div className={`card px-2 py-4 ${styles.card}`}>
                      <img
                        src={car.image}
                        className={`card-img-top mt-4 text-center ${styles.cardImgTop}`}
                      />
                      <div className={`card-body ${styles.cardBody}`}>
                        <h5 className="card-title fs-6">
                          {car.manufacture} / {car.model}
                        </h5>
                        <h5 className="card-title fs-5 fw-bold">
                          Rp {car.rentPerDay} / hari
                        </h5>
                        <p className={styles.carsP}>{car.description}</p>
                        <div className="row">
                          <div className="col-2 ">
                            <img
                              className={styles.iconImage}
                              src="/images/fi_users1.png"
                              width="20px"
                              alt=""
                            />
                          </div>
                          <div className="col-9 ms-lg-2">
                            {car.capacity} orang
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-2">
                            <img
                              src="/images/fi_settings.png"
                              width="20px"
                              alt=""
                            />
                          </div>
                          <div className="col-9 ms-lg-2">
                            {car.transmission}
                          </div>
                        </div>
                        <div className="row mt-2 mb-4">
                          <div className="col-2">
                            <img
                              src="/images/fi_calendar.png"
                              width="20px"
                              alt=""
                            />
                          </div>
                          <div className="col-9 ms-lg-2">Tahun {car.year}</div>
                        </div>

                        <Button btn={styles.btnUtama}>Go Somewhere</Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {error && <ErrorMessage message={error} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

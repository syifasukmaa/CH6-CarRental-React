'use client';
import React, { useReducer, useEffect, useState } from 'react';
import { CarContext, initialState } from '@/store/carContext';
import { carReducer } from '../store/carReducer';
import { getCarsData } from '@/api/api';

export const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);
  const [originalCars, setOriginalCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCarsData();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        setOriginalCars(data);

      } catch (error) {
        const errorMessage = error.message;
        dispatch({ type: 'FETCH_ERROR', payload: errorMessage });
      }
    };

    fetchData();
  }, []);

  function handleCarFilter(driverType, date, pickUpTime, passenger) {
    dispatch({
      type: 'SEARCH_CAR',
      payload: {
        driverType,
        date,
        pickUpTime,
        passenger,
        cars: originalCars,
      },
    });
  }

  const ctxValue = {
    cars: state.cars,
    loading: state.loading,
    error: state.error,
    searchCar: handleCarFilter,
  };

  return <CarContext.Provider value={ctxValue}>{children}</CarContext.Provider>;
};

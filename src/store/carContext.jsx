'use client';
import { createContext } from 'react';

const CarContext = createContext();

const initialState = {
  loading: true,
  error: '',
  cars: [],
};

export { CarContext, initialState };

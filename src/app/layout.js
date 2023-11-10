'use client';
import { useEffect } from 'react';
import { metadata } from './metadata';

import 'bootstrap/dist/css/bootstrap.css';
import Footer from '@/components/dashboard/organisms/Footer';

export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
    document.title = metadata.title;
  }, []);
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

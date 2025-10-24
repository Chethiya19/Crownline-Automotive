import React from 'react';
import Header from '../components//Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '0px' }}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
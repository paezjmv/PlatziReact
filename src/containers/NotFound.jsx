import React from 'react';
import Header from '../components/Header';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <Header />
    <section className='no-found'>
      <section className='no-found__container'>
        <h2 className='animated__pulse'>404</h2>
        <p>Página no encontrada</p>
      </section>
    </section>
  </>
);

export default NotFound;

import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <section className='no-found'>
    <section className='no-found__container'>
      <h2 className='animated__pulse'>404</h2>
      <p>Página no encontrada</p>
    </section>
  </section>
);

export default NotFound;

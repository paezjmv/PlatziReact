import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carrousel-item'>
    <img className='carrousel-item__img' src='https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='Woman view' />
    <div className='carrousel-item__details'>
      <div>
        <img src='assets/icon-play.png' alt='Play' />
        <img src='assets/icon-plus.png' alt='Plus' />
      </div>
      <p className='carrousel-item__details--title'>Titulo descriptivo</p>
      <p className='carrousel-item__details--subtitle'>2020 16+ 114</p>
    </div>
  </div>
);

export default CarouselItem;

import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icon-play.png';
import plusIcon from '../assets/static/icon-plus.png';

const CarouselItem = () => (
  <div className='carrousel-item'>
    <img className='carrousel-item__img' src='https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='Woman view' />
    <div className='carrousel-item__details'>
      <div>
        <img className='carrousel-item__details--img' src={playIcon} alt='Play' />
        <img className='carrousel-item__details--img' src={plusIcon} alt='Plus' />
      </div>
      <p className='carrousel-item__details--title'>Titulo descriptivo</p>
      <p className='carrousel-item__details--subtitle'>2020 16+ 114</p>
    </div>
  </div>
);

export default CarouselItem;

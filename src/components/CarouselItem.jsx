import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite } from '../actions/index';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icon-play.png';
import plusIcon from '../assets/static/icon-plus.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRaiting, duration } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover, title, year, contentRaiting, duration,
    });
  };

  return (
    <div className='carrousel-item'>
      <img className='carrousel-item__img' src={cover} alt={title} />
      <div className='carrousel-item__details'>
        <div>
          <img className='carrousel-item__details--img' src={playIcon} alt='Play' />
          <img className='carrousel-item__details--img' src={plusIcon} alt='Plus' onClick={handleSetFavorite} />
        </div>
        <p className='carrousel-item__details--title'>{title}</p>
        <p className='carrousel-item__details--subtitle'>
          {`${year} ${contentRaiting} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRaiting: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions/index';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icon-play.png';
import plusIcon from '../assets/static/icon-plus.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRaiting, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRaiting, duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carrousel-item'>
      <img className='carrousel-item__img' src={cover} alt={title} />
      <div className='carrousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carrousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {
            isList ? (
              <img
                className='carrousel-item__details--img'
                src={removeIcon}
                alt='remove'
                onClick={() => handleDeleteFavorite(id)}
              />
            ) : (
              <img
                className='carrousel-item__details--img'
                src={plusIcon}
                alt='Plus'
                onClick={handleSetFavorite}
              />
            )
          }
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
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRaiting: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

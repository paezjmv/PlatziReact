import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  return (
    <section className='main'>
      <h2 className='main__title'>¿Que quieres ver hoy?</h2>
      <input className={inputStyle} type='text' placeholder='Buscar...' />
    </section>
  );
};

Search.propTypes = {
  isHome: PropTypes.any,
};

export default Search;

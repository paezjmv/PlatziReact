import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icon-platzivideo.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  // User validation
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    // Simulation of LogOut
    props.logoutRequest({});
  };

  // Header classnames validation for Logion or Register
  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          { //Gravatar Validation
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          { //LogIn-Logout Validation
            hasUser ?
              <li><a href='/'>{user.name}</a></li> :
              null
          }
          {
            hasUser ? (
              <li>
                <a href='#logout' onClick={handleLogout}>
                  Cerrar Sesión
                </a>
              </li>
            ) : (
              <li>
                <Link to='/login'>
                  Iniciar sesión
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


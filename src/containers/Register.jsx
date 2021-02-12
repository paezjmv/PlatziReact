import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';

const Register = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Regístrate </h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>Registrarme</button>
      </form>
      <p className='login__container--iniciarsesion'>
        <Link to='/login'>
          Iniciar Sesión
        </Link>
      </p>
    </section>
  </section>
);

export default Register;

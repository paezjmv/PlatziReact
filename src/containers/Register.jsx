import React from 'react';
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
      <p className='login__container--iniciarsesion'><a href='iniciar-sesion.html'>Iniciar Sesión</a></p>
    </section>
  </section>
);

export default Register;

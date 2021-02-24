import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Regístrate</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='passoword'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <p className='login__container--iniciarsesion'>
          <Link to='/login'>
            Iniciar Sesión
          </Link>
        </p>
      </section>
    </section>
  );
};

export default Register;

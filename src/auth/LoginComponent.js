import React, { useState } from 'react';
import './styles.scss';
import LoginForm from './LoginForm';

const LoginComponent = ({ mode, onSubmit, setIsLoggedIn }) => {
  const [state_mode, setStateMode] = useState(mode);

  const toggleMode = () => {
    let newMode = state_mode === 'login' ? 'signup' : 'login';
    setStateMode(newMode);
  };
  return (
    <div>
      <div
        style={{
          marginTop: 80,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <h3 style={{zIndex: 100, marginBottom: -10,  marginTop: 50}}> Amarrom Amahle </h3> */}
        <img
          src='https://amaroomamahle.co.za/wp-content/uploads/2021/11/AMAROOM.png'
          style={{ zIndex: 100, marginBottom: -10 }}
          width='180'
          alt='logo'
        />
        <div
          className={`form-block-wrapper form-block-wrapper--is-${state_mode }`}
        ></div>
        <section className={`form-block form-block--is-${state_mode }`}>
          <header className='form-block__header'>
            <h1>{state_mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
            <div className='form-block__toggle-block'>
              <span>
                {state_mode === 'login' ? "Don't" : 'Already'} have an account? Click
                here 
                &#8594;
              </span>
              <input id='form-toggler' type='checkbox' onClick={() => {toggleMode()}} />
              <label htmlFor='form-toggler'></label>
            </div>
          </header>
          <LoginForm
            mode={state_mode}
            onSubmit={onSubmit}
            setIsLoggedIn={setIsLoggedIn}
          />
        </section>
      </div>
    </div>
  );
};

export default LoginComponent;

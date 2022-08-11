<<<<<<< HEAD
import { useRoutes } from 'react-router-dom';
import Themeroutes from './routes/Router';
import LoginComponent from './auth/LoginComponent';
// import './auth/styles.scss';
import { useState } from 'react';

const mode = 'login';

const App = () => {
  const routing = useRoutes(Themeroutes);
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('token') ? true : false);

  if(window.localStorage.getItem('token') !== 'token'){
    // setIsLoggedIn(false);
  }
  return (
    <>
      {isLoggedIn && <div className='dark'>{routing}</div>}
      {!isLoggedIn && (
        <div className={`app app--is-${mode}`}>
          <LoginComponent
            mode={mode}
            onSubmit={function () {
              console.log('submit');
            }}
            setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      )}
    </>
  );
=======
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}</div>;
>>>>>>> f6f914f (Alpha phase complete)
};

export default App;

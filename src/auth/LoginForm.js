import React, {useState} from "react";
import "./styles.scss";

const Input = ({ id, type, label, disabled }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
  />
);

const LoginForm = ({mode, onSubmit, setIsLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');

    const login = {username: 'admin', password:'123test'}

    const loginHandler = () => {
        // onSubmit()
        if(login.username === 'admin' && login.password === '123test') {
            // setIsLoggedIn(true)
            window.localStorage.setItem('token', 'token');
            // window.location.reload();
        }
    }
    return (
      <form onSubmit={loginHandler}>
        <div className="form-block__input-wrapper">
          <div className="form-group form-group--login">
            <Input
              type="text"
              id="username"
              label="user name"
              disabled={mode === "signup"}
              onChange={setUsername}
            />
            <Input
              type="password"
              id="password"
              label="password"
              disabled={mode === "signup"}
              onChange={setPassword}
            />
          </div>
          <div className="form-group form-group--signup">
            <Input
              type="text"
              id="fullname"
              label="full name"
              disabled={mode === "login"}
            />
            <Input
              type="email"
              id="email"
              label="email"
              disabled={mode === "login"}
            />
            <Input
              type="password"
              id="createpassword"
              label="password"
              disabled={mode === "login"}
            />
            <Input
              type="password"
              id="repeatpassword"
              label="repeat password"
              disabled={mode === "login"}
            />
          </div>
        </div>
        <br />
        <button className="button button--primary full-width" type="submit">
          {mode === "login" ? "Log In" : "Sign Up"}
        </button>
      </form>
    );
}

export default LoginForm;
import { useDispatch } from 'react-redux';
import { AUTH_LOGIN } from '../actions/authActions';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    dispatch({ type: AUTH_LOGIN });
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

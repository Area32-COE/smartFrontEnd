import classes from "./Login.module.css";
import loginImg from "../Images/LOGIN ILLUSTRATION 1.png";
import smartlogo from "../Images/Rectangle.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={classes.container}>
      <img className={classes.loginImg} src={loginImg} alt="loginImg"></img>
    <div className={classes.floatChild2}>
        <img
          className={classes.smartlogo}
          src={smartlogo}
          alt="smartlogo"
        ></img>
        <small className={classes.textin}>Welcome back!</small>
        <input
          className={classes.inputFed1}
          type="text"
          placeholder="Email"
        ></input>
        <input
          className={classes.inputFed2}
          type="text"
          placeholder="Password"
        ></input>
        <span className={classes.auxText}>
          <input className={classes.check} type="checkbox"></input>
          <small className={classes.remeber}>Remember me</small>
          <small className={classes.forgotpassw}>Forgot Password?</small>
        </span>
        <Link>
          <button className={classes.login}>Login</button>
        </Link>
        <Link>
          <button className={classes.signGoogle}>Sign in with Google</button>
        </Link>
        <Link to='/signup'>
          <button className={classes.signUp}>Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

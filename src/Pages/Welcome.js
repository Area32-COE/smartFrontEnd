import signup1 from "../Images/SIGNUP ILLUSTRATION_1 1.png";
import smartfleetlogo from "../Images/Rectangle.png";
import classes from "./Welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={classes.container}>
      <img className={classes.floatChild1} src={signup1} alt="signupimg"></img>
      <div className={classes.floatChild2}>
        <img
          className={classes.smlogo}
          src={smartfleetlogo}
          alt="smartfleetlogo"
        ></img>
        <small className={classes.textin}>Welcome</small>
        <Link to="/signup">
          <button className={classes.signIn}>Sign up</button>
        </Link>
        <Link to="/login"> 
          <button className={classes.login}>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;

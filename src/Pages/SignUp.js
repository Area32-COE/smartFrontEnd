import classes from "./SignUp.module.css";
import smartlogo from "../Images/Rectangle.png";

function SignUp() {
  return (
    <div className={classes.container}>
      <img className={classes.smartlogo} src={smartlogo} alt="smartlogo"></img>
      <small className={classes.textin}>Fill in the required details</small>
      <div className={classes.pContainer}>
        <div className={classes.pContainer1s}>
          <input className={classes.f1} type="text" placeholder="Name"></input>
          <input className={classes.f2} type="text" placeholder="Company ID"></input>
          <input className={classes.f3} type="text" placeholder="Username"></input>
        </div>
        <div className={classes.pContainer2s}>
          <input className={classes.f4} type="email" placeholder="Email"></input>
          <input className={classes.f5} type="text" placeholder="Contact"></input>
          <input className={classes.f6} type="password" placeholder="Password"></input>
          {/* <div className={classes.inputconco}>
          <i className={"fas fa-eye ${toggle-password]"}></i>
          </div> */}
        </div>
      </div>
      <div>
        <input type="checkbox" />
        <small className={classes.remem}>Remember Me</small>
      </div>
      <button className={classes.signUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;

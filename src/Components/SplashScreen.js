import classes from "./SplashScreen.module.css";
import splashScreen from "../Images/wlakingToucan.gif";
import { Link } from "react-router-dom";

function SplahScreen() {
  return (
    <Link to="/welcome">
      <div className={classes.pageContainer}>
        <img
          className={classes.centeredImage}
          src={splashScreen}
          alt="my-gif"
        ></img>
        <h1 className={classes.welcomeName}>SMARTFLEET</h1>
      </div>
    </Link>
  );
}

export default SplahScreen;

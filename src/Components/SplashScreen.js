import classes from "./SplashScreen.module.css";
import splashScreen from "../Images/wlakingToucan.gif";

function SplahScreen() {
  return (
    <div className={classes.pageContainer}>
      <img
        className={classes.centeredImage}
        src={splashScreen}
        alt="my-gif"
      ></img>
      <h1 className={classes.welcomeName}>SmarTFleet</h1>
    </div>
  );
}

export default SplahScreen;

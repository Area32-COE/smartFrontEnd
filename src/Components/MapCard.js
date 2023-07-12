
import classes from "./MapCard.module.css";
import arrow from "../Images/arrow-alt-circle-right 1.png";
import map from "../Images/Cambodia Folded Map.png";

function MapCard() {
    return(

        <div className={classes.mcard}>

        <div>
        <div className={classes.tile}>   
        <div className={classes.text}>Map</div>
        <div>
        <img className={arrow} src={arrow} alt={"arrow"}></img>
        </div>
        </div>   

        <div>
        <img className={map} src={map} alt={"map"}></img>
        </div>

        </div>

        
        </div>
    )

}

export default MapCard;
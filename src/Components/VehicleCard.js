import classes from "./VehicleCard.module.css"
import flag from "../Images/flag-1.png"

function VehicleCard() {
    return(
        <div className={classes.vcard}>
        <p className={classes.vehicle}>Vehicle Assigned</p>

        <div>
        <p className={classes.car}>Mercedes-Benz, S-Class</p>
        <p className={classes.detail}>Sedan</p>
        </div>

        <div className={classes.line}>
            <div className={classes.block}>
            <div className={classes.plate}>GH 9654 H
            
            </div>
            </div>
            <div className={classes.pts}>
                <img className={classes.flag} scr={flag} alt={"flag"}></img>
                <div>
                <small className={classes.tag}>GH</small>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default VehicleCard;
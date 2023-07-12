import classes from "./DriverTaskCard.module.css"

function DriverTaskCard() {
    return(
        <div className={classes.card}>
            <h6 className={classes.task}>Task1001:</h6>
            <h5 className={classes.name}>Mr. Ted Konnam</h5>
            <div className={classes.activity}>
                <button className={classes.btn}>Open</button>
            </div>
        </div>
    );
}

export default DriverTaskCard;
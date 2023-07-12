import classes from "./DescriptionCard.module.css"
import Briefpic from "../Images/Brief-2 1.png"


function DescriptionCard() {
    return(
        <div className={classes.card}>
        
        <div>
            <h6 className={classes.today}>Today</h6>
            <div className={classes.block}>
            <h2 className={classes.brief}>Brief</h2>
            <p className={classes.text}>We are ready for you. Here is what you will be doing today</p>
            </div>

            
            <div className={classes.line1}>
            <div className={classes.Task}>
            <p className={classes.Taskd}>Task Description</p>
            </div>
            </div>
           

            <div className={classes.bar}></div>

            <div className={classes.line2}>
            <div className={classes.Client}>
            <p className={classes.Clientd}>Client Description</p>
            </div>
            </div>

        </div>

        <div>
            <img className={classes.Briefpic} src={Briefpic} alt={"Briefpic"}></img>
        </div>

        </div>
    )

}

export default DescriptionCard;
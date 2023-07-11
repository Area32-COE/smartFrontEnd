import DriverSidebar from "../../Components/DriverSidebar";
import classes from "./DriverTaskPage.module.css";

function DriverTaskPage() {
  return (
    <section className={classes.task}>
      <div className={classes.taskContents}>
        <div className={classes.taskHeader}>
          <div className={classes.headerTitleBox}>
            <h2>Task</h2>
            <div className={classes.headerTitleUtils}>
              <ul>
                <li>=</li>
                <li>+</li>
                <li>@</li>
              </ul>
            </div>
          </div>
          <div className={classes.searchRegion}>
            <i>+</i>
            <input type={"text"} placeholder={"Say something..."} />
          </div>
          <div className={classes.buttons}>
            <button>Upgrade</button>
            <button>
              <i>%</i>
            </button>
          </div>
        </div>
        <div className={classes.tasksBox}>
          <hi>hi</hi>
        </div>
      </div>
    </section>
  );
}

export default DriverTaskPage;

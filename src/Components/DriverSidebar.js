// import { Link } from "react-router-dom";
import classes from "./DriverSidebar.module.css";
import smartlogo from "../Images/Rectangle.png";
import avatar1 from "../Images/A 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNotesMedical,
  faSliders,
  faListCheck,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "./ToggleButton";

function DriverSidebar(props) {
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <img src={smartlogo} alt="smartlogo" />
        <small>Smartfleet</small>
      </div>
      <img className={classes.userpic} src={avatar1} alt="avater" />
      <small className={classes.username}>The Username</small>
      <button className={classes.edit}>Edit</button>
      <div className={classes.sidebarLink}>
        <button onClick={()=>props.setPageHandler(1)}>
          <FontAwesomeIcon className={classes.icn} icon={faListCheck} />
          Tasks
        </button>
        <button onClick={()=>props.setPageHandler(2)}>
          <FontAwesomeIcon className={classes.icn} icon={faNotesMedical} />
          Reports
        </button>
        <button onClick={()=>props.setPageHandler(3)}>
          <FontAwesomeIcon className={classes.icn} icon={faSliders} />
          Setting
        </button>
      </div>
      <div className={classes.toggle}>
        <ToggleButton />
      </div>
      <button className={classes.logout}>
        <FontAwesomeIcon
          className={classes.icn}
          icon={faArrowRightFromBracket}
        />
        Logout
      </button>
    </div>
  );
}

export default DriverSidebar;

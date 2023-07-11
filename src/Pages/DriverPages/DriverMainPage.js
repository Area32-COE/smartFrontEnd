import DriverSidebar from "../../Components/DriverSidebar";
import DriverTaskPage from "./DriverTaskPage";
import classes from "./DriverMainPage.module.css";
import { useState } from "react";
import DriverReportPage from "./DriverReportPage";
import DriverSettingsPage from "./DriverSettingsPage";

function DriverMainPage() {
  const [page, setPage] = useState(1);

  function setPageHandler(value) {
    setPage(value);
  }
  console.log(page);
  return (
    <section className={classes.main}>
      <div className={classes.sideBar}>
        <DriverSidebar setPageHandler={setPageHandler} />
      </div>
      <div className={classes.sidePage}>
        {page === 1 ? (
          <DriverTaskPage />
        ) : page === 2 ? (
          <DriverReportPage />
        ) : page == 3 ? (
          <DriverSettingsPage />
        ) : null}
      </div>
    </section>
  );
}

export default DriverMainPage;

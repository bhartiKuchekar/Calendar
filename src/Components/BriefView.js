import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Agenda,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";

function Calender() {
  const [data, setData] = useState(
    localStorage.data1 === undefined || localStorage.data1 === ""
      ? []
      : JSON.parse(localStorage.data1)
  );

  return (
    <div>
      <ScheduleComponent
        width="100%"
        height="550px"
        currentView="Month"
        eventSettings={{ dataSource: data }}
      >
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
          <ViewDirective option="WorkWeek" />
          <ViewDirective option="Month" />
          <ViewDirective option="Agenda" />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
      </ScheduleComponent>
    </div>
  );
}
export default Calender;

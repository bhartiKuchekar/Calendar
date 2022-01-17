import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useHistory } from "react-router-dom";
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
import {
  Input,
  Card,
  Form,
  Label,
  FormGroup,
  Col,
  CardHeader,
  CardFooter,
} from "reactstrap";

function Calender() {
  const [data, setData] = useState(
    localStorage.data1 === undefined || localStorage.data1 === ""
      ? []
      : JSON.parse(localStorage.data1)
  );
  const [pdata, setPdata] = useState(
    localStorage.data === undefined || localStorage.data === ""
      ? []
      : JSON.parse(localStorage.data)
  );
  const [filter, setFilter] = useState([]);
  const location = useLocation();
  useEffect(() => {
    console.log(location.state.detail.pid);
    var projectId = location.state.detail.pid;
    var temp =
      localStorage.data1 === undefined || localStorage.data1 === ""
        ? []
        : JSON.parse(localStorage.data1);
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].pid === projectId) {
        filter.push(temp[i]);
      }
    }
    setFilter(filter);
    console.log(filter);
  });
  const history = useHistory();
  function handleClick() {
    //     var data =
    //   localStorage.data === undefined || localStorage.data === ""
    //     ? []
    //     : JSON.parse(localStorage.data);
    // data.push(obj);

    var temp = filter;
    // var newData = JSON.parse(localStorage.data1);
    var newData = data;
    for (var i = 0; i < temp.length; i++) {
      var obj = {
        Subject: temp[i].Subject,
        Id: temp[i].Id,
        StartTime: temp[i].StartTime,
        EndTime: temp[i].EndTime,
        IsAllDay: temp[i].IsAllDay,
        pid: location.state.detail.pid,
        pName: location.state.detail.pName,
      };
      newData.push(obj);
    }
    localStorage.setItem("data1", JSON.stringify(newData));
    history.push({
      pathname: "/",
    });
  }
  //...data array...
  // {
  //   obj = [
  //     {
  //       Subject: "daily catchup",
  //       Id: 1,
  //       StartTime: "2021-12-22T18:30:00.000Z",
  //       EndTime: "2021-12-23T18:30:00.000Z",
  //       IsAllDay: true,
  //       pid:,
  //       pName:
  //     },
  //   ];
  // }
  //...data array...
  return (
    <div>
      <FormGroup row>
        <Col md="2">
          <Label>
            <b>Project:</b>
          </Label>
        </Col>
        <Col md="3">{location.state.detail.pName}</Col>
        {/* </FormGroup>
        <FormGroup row> */}
        <Col md="2">
          <Label>
            {" "}
            <b>Description:</b>
          </Label>
        </Col>
        <Col md="3">{location.state.detail.pdescription}</Col>
        <Col md="2">
          <div style={{ textAlign: "right" }}>
            <Button
              variant="success"
              style={{ marginRight: "4%" }}
              onClick={() => handleClick()}
            >
              Save
            </Button>
            <Button style={{ backgroundColor: "gray", marginRight: "4%" }}>
              Clear
            </Button>
          </div>
        </Col>
      </FormGroup>

      {/* <div style={{ textAlign: "right", margin: "1%" }}>
          <Button
            variant="success"
            style={{ marginRight: "2%" }}
            onClick={() => handleClick()}
          >
            Save
          </Button>
          <Button style={{ backgroundColor: "gray" }}>Clear</Button>
        </div> */}

      <ScheduleComponent
        width="100%"
        height="550px"
        currentView="Week"
        eventSettings={{ dataSource: filter }}
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

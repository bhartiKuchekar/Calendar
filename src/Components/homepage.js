import React, { useState, useEffect } from "react";
import "../index.css";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
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
import Modal from "react-modal";
function Homepage() {
  const [model, setModel] = useState(false);
  const [pname, setName] = useState("");
  useEffect(() => {
    console.log("useEffect called");
  }, [model]);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const history = useHistory();
  // creat = () => {
  //   setModel(true);
  // };

  function handleClick2(index) {
    var temp = JSON.parse(localStorage.data);
    var objData = temp[index];
    history.push({
      pathname: "/calender",
      state: { detail: objData },
    });
  }

  function handleClick() {
    var temp =
      localStorage.data === undefined ? [] : JSON.parse(localStorage.data);
    var obj = {
      pid: temp.length + 1,
      pName: document.getElementsByName("pname")[0].value,
      pdescription: document.getElementsByName("pdescription")[0].value,
    };

    var data =
      localStorage.data === undefined || localStorage.data === ""
        ? []
        : JSON.parse(localStorage.data);
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
    setModel(false);
  }

  return (
    <div>
      {/* <Button variant="dark" size="lg" onClick={() => setModel(true)}>
        Create Project
      </Button> */}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {localStorage.data === undefined || localStorage.data === ""
          ? []
          : JSON.parse(localStorage.data).map((key, index) => {
              return (
                <div
                  style={{
                    margin: "1%",
                    width: "18%",
                    height: "20%",
                  }}
                >
                  <div
                    class="card border-secondary mb-3"
                    style={{ maxWidth: "25rem" }}
                  >
                    <div class="card-header bg-transparent border-secondary">
                      PROJECT {index + 1}
                    </div>
                    <div class="card-body text-secondary">
                      <h5 class="card-title">{key.pName.toUpperCase()}</h5>
                      <p class="card-text">{key.pdescription}</p>
                    </div>
                    <div class="card-footer bg-transparent border-secondary">
                      <Button
                        variant="success"
                        onClick={() => handleClick2(index)}
                      >
                        Schedule
                      </Button>
                    </div>
                  </div>
                  {/* <div class="card bg-light mb-3" style={{ maxWidth: "20rem" }}>
                    <div class="card-header">Project {index + 1}</div>
                    <div class="card-body">
                      <h5 class="card-title">{key.pName}</h5>
                      <p class="card-text">
                      </p>
                    </div>
                  </div> */}
                </div>
                /* <Card
                  style={{
                    margin: "1%",
                    width: "18%",
                    height: "20%",
                    border: "1px solid",
                  }}
                >
                  <FormGroup row>
                    <Col md="5">
                      <Label>
                        <b>Project:</b>
                      </Label>
                    </Col>
                    <Col md="7">{key.pName}</Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="5">
                      <Label>
                        {" "}
                        <b>Description:</b>
                      </Label>
                    </Col>
                    <Col md="7">{key.pdescription}</Col>
                  </FormGroup>
                  <FormGroup>
                    <Button
                      variant="success"
                      onClick={() => handleClick2(index)}
                    >
                      Schedule
                    </Button>
                  </FormGroup>
                </Card> */
              );
            })}
      </div>
      {/* <div class="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */}
      <div>
        <Modal isOpen={model} style={customStyles}>
          <CardHeader row style={{ textAlign: "center" }}>
            Add Project
            <Label onClick={() => setModel(false)} style={{ float: "right" }}>
              Close
            </Label>
          </CardHeader>

          <FormGroup row style={{ marginTop: "4%" }}>
            <Col md="5">
              <Label>Project Name:</Label>
            </Col>
            <Col md="7">
              <Input
                type="text"
                name="pname"
                placeholder="Project Name"
                onClick={() => setName(e.target.value)}
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="5">
              <Label>Project Description:</Label>
            </Col>
            <Col md="7">
              <Input
                type="text"
                name="pdescription"
                placeholder="Description"
              ></Input>
            </Col>
          </FormGroup>
          <CardFooter style={{ textAlign: "center" }}>
            <Button onClick={() => handleClick()}>Add</Button>
          </CardFooter>
        </Modal>
      </div>
    </div>
  );
}
export default Homepage;

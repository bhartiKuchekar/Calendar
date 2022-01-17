import calender from "./calender.jpeg";
import AddMeet from "./addMeet.png";
import Homepage from "./Components/homepage";
import Calender from "./Components/calender";
import BriefView from "./Components/BriefView";
import Card from "./Components/card";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* <div>
          <Homepage creat={this.creat} data={this.state} />
        </div> */}
        <Navbar bg="dark" variant="dark">
          <Container style={{ marginLeft: "2%" }}>
            <Navbar.Brand href="#home" style={{ fontWeight: "500" }}>
              <img
                src={calender}
                width="35"
                height="35"
                className="d-inline-block align-top"
                style={{ marginRight: "2%" }}
                // alt="React Bootstrap logo"
              />{" "}
              CALENDER
              {/* Schedule Your Meet */}
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#/" class="active">
                Home
              </Nav.Link>
              <Nav.Link href="#/BriefView">Brief View</Nav.Link>
            </Nav>
            <img
              src={AddMeet}
              width="35"
              height="35"
              className="d-inline-block align-top"
              // onClick={this.props.creat}
              // style={{ marginRight: "2%" }}
              // alt="React Bootstrap logo"
            />
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/calender" component={Calender} />
          <Route exact path="/BriefView" component={BriefView} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;

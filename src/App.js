import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import ChangePassword from "./screens/ChangePassword";
import { Navbar, Nav } from "react-bootstrap";
import AddDetails from "./screens/AddDetails";
import Post from "./components/post";

function App() {
  return (
    <Router>
      <Navbar className="sticky-top" bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          College Media
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse className="d-flex justify-content-end" id="nav">
          <Nav className="mr-3">
            <Nav.Link href="#home">Explore</Nav.Link>
            <Nav.Link href="#link">QnA</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="d-flex">
              <img
                src="https://www.cpe-academy.com/images/graduates/ngoh.png"
                style={{ borderRadius: "50%", marginRight: 10 }}
                width={24}
                alt="img"
              />
              John Doe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/add-details" component={AddDetails} />
        <Route exact path="/post/:id" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;

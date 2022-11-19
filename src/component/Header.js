import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../img/logo.svg";
import GitHub from "../img/github.svg";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="mx-4" fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Brand>ML LABS</Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={GitHub}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

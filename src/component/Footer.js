import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Logo from "../img/logo.svg";
// import GitHub from "../img/github.svg";

function Footer() {
  return (
    <Navbar
      bg="secondary"
      variant="dark"
      className="fixed-bottom"
      style={{ maxHeight: "40px" }}
    >
      <Container className="mx-4" fluid>
        <Navbar.Text>Netlify 2022</Navbar.Text>
        <Navbar.Text>Benoit RAMS </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;

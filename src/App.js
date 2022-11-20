import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container className="px-0" fluid={true}>
      <Row className="flex-column  g-0">
        <Col xs={12}>
          <Header></Header>
        </Col>
        <Col xs={12} className="flex-grow-1">
          <Main></Main>
        </Col>
        <Col xs={12}>
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

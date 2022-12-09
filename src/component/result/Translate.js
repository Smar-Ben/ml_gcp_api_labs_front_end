import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Translate(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          Traduction avec Cloud T ranslate
        </Card.Title>
        <Card.Subtitle className="mb-2 text-center">
          Langue originale {props.responseApi.language_detected}
        </Card.Subtitle>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="text-center"></ListGroup.Item>
          <ListGroup.Item className="text-center">
            <h6 className="m-0 p-0">Texte original</h6>
            {props.responseApi.text}
          </ListGroup.Item>
          <ListGroup.Item className="text-center">
            <h6 className="m-0 p-0">
              Texte traduit en {props.targetLanguage}{" "}
            </h6>
            {props.responseApi.translation}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Translate;

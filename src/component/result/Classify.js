import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Classify(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          {props.responseApi.length} catégories les plus probable pour ce texte
        </Card.Title>
        <Card.Subtitle className="mb-2 text-center">
          Classifying Content Clound Natural Language
        </Card.Subtitle>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="text-center"></ListGroup.Item>
          {Array.isArray(props.responseApi) &&
            props.responseApi.map((classify, index) => (
              <ListGroup.Item className="text-center" key={index}>
                <h6 className="m-0 p-0">
                  {classify.name.split("/").slice(1).join(" => ")}
                </h6>
                {Math.round(classify.confidence * 100)}%
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Classify;

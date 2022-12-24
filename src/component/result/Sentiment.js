import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Happy from "../../img/emoji/happy.svg";
import Neutral from "../../img/emoji/neutral.svg";
import VeryHappy from "../../img/emoji/very-happy.svg";
import Sad from "../../img/emoji/sad.svg";
import MiSad from "../../img/emoji/mi-sad.svg";

function Sentiment(props) {
  const getColor = (score) => {
    if (score <= -0.7) return "#cc3300";
    else if (score <= -0.3) return "#ff9966";
    else if (score <= 0.3) return "#ffcc00";
    else if (score <= 0.7) return "#99cc33";
    else return "#339900";
  };

  const getTitle = (score) => {
    if (score <= -0.7) return "Le texte est très négatif";
    else if (score <= -0.3) return "Le texte est négatif";
    else if (score <= 0.3) return "Le test est neutre";
    else if (score <= 0.7) return "Le test est positif";
    else return "Le test est très positif";
  };

  const getImg = (score) => {
    if (score <= -0.7) return Sad;
    else if (score <= -0.3) return MiSad;
    else if (score <= 0.3) return Neutral;
    else if (score <= 0.7) return Happy;
    else return VeryHappy;
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title
          className="text-center"
          style={{ color: getColor(props.responseApi.score) }}
        >
          {getTitle(props.responseApi.score)}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-center">
          Langue detectée : {props.responseApi.language}
        </Card.Subtitle>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="text-center">
            {" "}
            <img
              src={getImg(props.responseApi.score)}
              width="40"
              height="40"
              alt="smiley"
            ></img>{" "}
          </ListGroup.Item>
          <ListGroup.Item className="text-center">
            <h6 className="m-0 p-0">Texte générée</h6>
            {props.responseApi.text}
          </ListGroup.Item>
          <ListGroup.Item className="text-center">
            <h6 className="m-0 p-0">Intensité</h6>
            {Math.round(props.responseApi.score * 100)}%
          </ListGroup.Item>
          <ListGroup.Item className="text-center">
            <h6 className="m-0 p-0">Emotion</h6>
            {Math.round(props.responseApi.magnitude * 100)}%
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Sentiment;

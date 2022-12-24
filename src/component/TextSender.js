import React, { Fragment } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Work from "../img/work.png";

const TextSender = (props) => {
  return (
    <Fragment>
      {props.apiName === "textToSpeech" || props.apiName === "visionAPI" ? (
        <Card className="text-center" style={{ maxWidth: "250px" }}>
          <Card.Img variant="top" src={Work} />
          <Card.Body>
            <Card.Title>TRAVAUX EN COURS</Card.Title>
            <Card.Text>
              Le service n'est pas dévellopé mais il est possible de tester sur
              le site de Google
            </Card.Text>
            <Button
              variant="primary"
              href={
                props.apiName === "textToSpeech"
                  ? "https://cloud.google.com/text-to-speech#section-2"
                  : "https://cloud.google.com/vision?hl=fr#section-2"
              }
              target="_blank"
            >
              Tester l'API
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <FloatingLabel
          style={{ textAlign: "center" }}
          label={props.textToSend.length === 0 ? "Text to send to the API" : ""}
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            onChange={(e) => props.changeText(e.target.value)}
            value={props.textToSend}
          />
        </FloatingLabel>
      )}
    </Fragment>
  );
};

export default TextSender;

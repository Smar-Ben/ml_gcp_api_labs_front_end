import { Container, Col, DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import CloudNaturalLogo from "../img/ml_logo/cloud_natural_language_api.svg";
import TranslationIALogo from "../img/ml_logo/cloud_translation_api.svg";
import TextToSpeech from "../img/ml_logo/text-to-speech.svg";
import React, { useState, Fragment } from "react";
import CardDescription from "./CardDescription";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const getTitleName = (apiName) => {
  const apiList = {
    cnlEntities: "Cloud Natural Language API: Entities Analysis",
    cnlSentiment: "Cloud Natural Language API: Sentiment Analysis",
    cnlClassify: "Cloud Natural Language API: Classify Analysis",
    textToSpeech: "Text to Speech API",
    translateAI: "Translation AI : French to English",
  };
  return apiList[apiName] ?? "Choose your API";
};

function Main() {
  const addPosts = async (textToSend) => {
    //TODO : replace url with api name
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "title",
        body: "body",
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    console.log(data);
    console.log(textToSend);
  };

  const [apiName, setApiName] = useState("");
  const [textToSend, setTextToSend] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  return (
    <Container
      className="p-5 d-flex flex-column justify-content-start align-items-center flex-wrap"
      fluid
    >
      <Col className="mb-4">
        <h2 style={{ textAlign: "center" }}>{getTitleName(apiName)}</h2>
      </Col>
      <Col className="mb-4">
        <Dropdown>
          <Dropdown.Toggle color="blue" id="dropdown-basic">
            Choose your ML API
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setApiName("cnlEntities")}>
              <img
                alt=""
                src={CloudNaturalLogo}
                width="25"
                height="25"
                className="d-inline-block align-top"
              />{" "}
              Cloud Natural Language : Entities
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setApiName("cnlSentiment")}>
              <img
                alt=""
                src={CloudNaturalLogo}
                width="25"
                height="25"
                className="d-inline-block align-top"
              />{" "}
              Cloud Natural Language : Sentiment
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setApiName("cnlClassify")}>
              <img
                alt=""
                src={CloudNaturalLogo}
                width="25"
                height="25"
                className="d-inline-block align-top"
              />{" "}
              Cloud Natural Language : Classify
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setApiName("textToSpeech")}>
              <img
                alt=""
                src={TranslationIALogo}
                width="25"
                height="25"
                className="d-inline-block align-top"
              />{" "}
              Text to Speech API
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setApiName("translateAI")}>
              <img
                alt=""
                src={TextToSpeech}
                width="25"
                height="25"
                className="d-inline-block align-top"
              />{" "}
              IA translate
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      {apiName !== "" && (
        <Fragment>
          <Col
            xs={8}
            className="mb-4"
            style={{ minWidth: "250px", maxWidth: "700px" }}
          >
            <CardDescription apiName={apiName}></CardDescription>
          </Col>
          <Col
            xs={8}
            className="mb-4"
            style={{ minWidth: "250px", maxWidth: "700px" }}
          >
            <FloatingLabel
              style={{ textAlign: "center" }}
              label="Text to send to the API"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                onChange={(e) => setTextToSend(e.target.value)}
              />
            </FloatingLabel>
          </Col>

          <Col
            className="col-8 d-flex justify-content-around"
            style={{ minWidth: "250px", maxWidth: "700px" }}
          >
            {apiName === "translateAI" && (
              <DropdownButton
                id="dropdown-basic-button"
                title={`Language destination ${targetLanguage}`}
                size="lg"
              >
                <Dropdown.Item onClick={() => setTargetLanguage("FR")}>
                  FR
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTargetLanguage("EN")}>
                  EN
                </Dropdown.Item>
              </DropdownButton>
            )}
            <Button
              variant="primary"
              size="lg"
              onClick={() => addPosts(textToSend)}
            >
              Submit text
            </Button>
          </Col>
        </Fragment>
      )}
    </Container>
  );
}

export default Main;

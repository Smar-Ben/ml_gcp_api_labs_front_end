import { Container, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import CloudNaturalLogo from "../img/ml_logo/cloud_natural_language_api.svg";
import TranslationIALogo from "../img/ml_logo/cloud_translation_api.svg";
import TextToSpeech from "../img/ml_logo/text-to-speech.svg";
import React, { useState } from "react";

const getTitleName = (apiName) => {
  const apiList = {
    cnlEntities: "Cloud Natural Language API: Entities Anlysis",
    cnlSentiment: "Cloud Natural Language API: Sentiment Anlysis",
    cnlSentimentEntities:
      "Cloud Natural Language API: Sentiment/Entities Anlysis",
    cnlClassify: "Cloud Natural Language API: Classify Anlysis",
    textToSpeech: "Text to Speech API",
    translateAI: "Translation AI : French to English",
  };
  return apiList[apiName] ?? "Choose your API";
};

function Main() {
  const [apiName, setApiName] = useState("");

  return (
    <Container
      className="p-5 d-flex flex-column justify-content-start align-items-center flex-wrap"
      fluid
    >
      <Col className="mb-4">
        <h2>{getTitleName(apiName)}</h2>
      </Col>
      <Col>
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
            <Dropdown.Item onClick={() => setApiName("cnlSentimentEntities")}>
              <img
                alt=""
                src={CloudNaturalLogo}
                width="25"
                height="25"
                className="d-inline-block align-top"
              />{" "}
              Cloud Natural Language : SentimentEntities
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
    </Container>
  );
}

export default Main;

import { Container, Col, DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import CloudNaturalLogo from "../img/ml_logo/cloud_natural_language_api.svg";
import TranslationIALogo from "../img/ml_logo/cloud_translation_api.svg";
import TextToSpeech from "../img/ml_logo/text-to-speech.svg";
import React, { useState, Fragment, useEffect } from "react";
import CardDescription from "./CardDescription";
import Button from "react-bootstrap/Button";
import Result from "./Result";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TextSender from "./TextSender";
import "react-toastify/dist/ReactToastify.css";

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

const Main = (props) => {
  const showToaster = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const sendToAPI = async (apiName, textToSend, targetLanguage = "") => {
    setIsCalledFinish(true);
    //TODO : replace url with api nam
    const apiList = {
      cnlEntities: "cnl/entity",
      cnlSentiment: "cnl/sentiment",
      cnlClassify: "cnl/classify",
      textToSpeech: "text_to_speech/text_to_speech",
      translateAI: "cloud_translate/translation",
    };
    const params = new URLSearchParams();
    params.set("text", textToSend);
    if (apiName === "translateAI")
      if (targetLanguage === "") {
        showToaster("Select a destination language for the translation");
      } else {
        params.set("target_language", targetLanguage);
      }

    let route = `http://127.0.0.1:8000/api/${
      apiList[apiName]
    }?${params.toString()}`;
    route.replace("\n", "");

    axios
      .get(route)
      .then((response) => {
        setIsCalledFinish(false);
        setIsApiCalled(true);
        setResponseApi(response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsCalledFinish(false);
        setIsApiCalled(true);
        const response = error["response"];
        showToaster(response.data.detail);
      });
  };

  const changeText = (text) => {
    setTextToSend(text);
  };

  const [apiName, setApiName] = useState("");
  const [textToSend, setTextToSend] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [responseApi, setResponseApi] = useState({});
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [isCalledFinish, setIsCalledFinish] = useState(false);

  useEffect(() => {
    console.log("foo");
    setIsApiCalled(false);
    setTextToSend("");
    setTargetLanguage("");
    setResponseApi({});
  }, [apiName]);

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
            <Dropdown.Item
              onClick={() => {
                setApiName("cnlEntities");
              }}
            >
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
            <Dropdown.Item
              onClick={() => {
                setApiName("cnlSentiment");
              }}
            >
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
            <Dropdown.Item
              onClick={() => {
                setApiName("cnlClassify");
              }}
            >
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
            <Dropdown.Item
              onClick={() => {
                setApiName("textToSpeech");
              }}
            >
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
            <Dropdown.Item
              onClick={() => {
                setApiName("translateAI");
              }}
            >
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
            className={
              apiName === "textToSpeech"
                ? "col-8 d-flex justify-content-around mb-4"
                : ""
            }
            style={{ minWidth: "250px", maxWidth: "700px" }}
          >
            <TextSender
              textToSend={textToSend}
              changeText={changeText}
              apiName={apiName}
            ></TextSender>
          </Col>
          <Col
            className="col-8 d-flex justify-content-around mb-4"
            style={{ minWidth: "250px", maxWidth: "700px" }}
          >
            {isApiCalled && Object.keys(responseApi).length !== 0 && (
              <Result
                responseApi={responseApi}
                apiName={apiName}
                targetLanguage={targetLanguage}
              ></Result>
            )}
          </Col>
          <Col
            className="col-8 d-flex justify-content-around "
            style={{ minWidth: "250px", maxWidth: "700px" }}
          >
            {isCalledFinish === true ? (
              <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <Fragment>
                {apiName === "translateAI" && (
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={`Language destination ${targetLanguage}`}
                    size="lg"
                  >
                    <Dropdown.Item onClick={() => setTargetLanguage("fr")}>
                      FR
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setTargetLanguage("en")}>
                      EN
                    </Dropdown.Item>
                  </DropdownButton>
                )}
                {apiName !== "textToSpeech" && apiName !== "visionAI" && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() =>
                      sendToAPI(apiName, textToSend, targetLanguage)
                    }
                  >
                    Submit text
                  </Button>
                )}
              </Fragment>
            )}
          </Col>
          <Col>
            <ToastContainer />
          </Col>
        </Fragment>
      )}
    </Container>
  );
};

export default Main;

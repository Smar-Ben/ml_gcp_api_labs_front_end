import CloudNaturalLogo from "../img/ml_logo/cloud_natural_language_api.svg";
import TranslationIALogo from "../img/ml_logo/cloud_translation_api.svg";
import TextToSpeech from "../img/ml_logo/text-to-speech.svg";
import CloudVision from "../img/ml_logo/cloud_vision_api.svg";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const getTitleCard = (apiName) => {
  const apiList = {
    cnlEntities: "Cloud Natural Language API: Entities Analysis",
    cnlSentiment: "Cloud Natural Language API: Sentiment Analysis",
    cnlClassify: "Cloud Natural Language API: Classify Analysis",
    textToSpeech: "Text to Speech API",
    translateAI: "Translation AI : French to English",
    visionAPI: "Cloud Vision API",
  };
  return apiList[apiName] ?? "Choose your API";
};

const getTitleName = (apiName) => {
  const cloudNaturalLanguageArray = [
    "cnlEntities",
    "cnlSentiment",
    "cnlClassify",
  ];
  if (cloudNaturalLanguageArray.includes(apiName))
    return "Cloud Natural Language API";
  else if (apiName === "textToSpeech") return "Speech-to-Text API";
  else if (apiName === "translateAI") return "Cloud Translation API";
  else if (apiName === "visionAPI") return "Cloud Vision API";
};

const getLogo = (apiName) => {
  const cloudNaturalLanguageArray = [
    "cnlEntities",
    "cnlSentiment",
    "cnlClassify",
  ];
  if (cloudNaturalLanguageArray.includes(apiName)) return CloudNaturalLogo;
  else if (apiName === "textToSpeech") return TextToSpeech;
  else if (apiName === "translateAI") return TranslationIALogo;
  else if (apiName === "visionAPI") return CloudVision;
};

const getDescription = (apiName) => {
  const apiList = {
    cnlEntities:
      "Entities Analysis inspecte le texte donné pour trouver des entités connues (des noms propres tels que des personnages publics, des points de repère, etc.), et renvoie des informations sur ces entités. La langue du texte est automatiquement détecté par Cloud Natural Language.",
    cnlSentiment:
      "Sentiment Analysis examine le texte donné et identifie l'opinion émotionnelle dominante dans le texte, en particulier pour déterminer si l'attitude de l'auteur est positive, négative ou neutre. La langue du texte est automatiquement détecté par Cloud Natural Language",
    cnlClassify:
      "Classify Analysis analyse un document et renvoie une liste de catégories de contenu qui s'appliquent au texte présent dans le document. Fonctionne uniquement en anglais",
    textToSpeech:
      "Text to Speech permet de convertir du texte en discours naturel à l'aide d'une API optimisée par les meilleures technologies d'IA de Google. Sur ce site, il est seulement possible d'avoir une voix anglaise.",
    translateAI:
      "Cloud Translation permet à vos sites Web et à vos applications de traduire dynamiquement du texte français en anglais par programmation via une API. Translation utilise un modèle de machine learning pré-entraîné de Google ou personnalisé pour traduire du texte. Sur ce site il est possible de traduire un texte (de n'importe quelle langue) en français ou en anglais",
    visionAPI:
      "Cloud Vision API permet d'obtenir des informations sur une image à partir d'un modèle pré-entrainé par Google",
  };
  return apiList[apiName] ?? "Choose your API";
};

const getLink = (apiName) => {
  const apiList = {
    cnlEntities:
      "https://cloud.google.com/natural-language/docs/analyzing-entities",
    cnlSentiment:
      "https://cloud.google.com/natural-language/docs/analyzing-sentiment",
    cnlClassify:
      "https://cloud.google.com/natural-language/docs/classifying-text",
    textToSpeech: "https://cloud.google.com/text-to-speech/docs/basics",
    translateAI: "https://cloud.google.com/translate/docs/overview",
    visionAPI: "https://cloud.google.com/vision/docs?hl=fr",
  };
  return apiList[apiName] ?? "Choose your API";
};

const CardDescription = (props) => {
  return (
    <Card>
      <Card.Header as="h5">
        {" "}
        <img alt="" src={getLogo(props.apiName)} width="40" height="40" />{" "}
        {getTitleName(props.apiName)}
      </Card.Header>
      <Card.Body>
        <Card.Title>{getTitleCard(props.apiName)}</Card.Title>
        <Card.Text>{getDescription(props.apiName)}</Card.Text>
        <Button href={getLink(props.apiName)} target="_blank">
          Voir la documentation
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardDescription;

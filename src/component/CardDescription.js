import CloudNaturalLogo from "../img/ml_logo/cloud_natural_language_api.svg";
import TranslationIALogo from "../img/ml_logo/cloud_translation_api.svg";
import TextToSpeech from "../img/ml_logo/text-to-speech.svg";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const getTitleCard = (apiName) => {
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

const getTitleName = (apiName) => {
  const cloudNaturalLanguageArray = [
    "cnlEntities",
    "cnlSentiment",
    "cnlSentimentEntities",
    "cnlClassify",
  ];
  if (cloudNaturalLanguageArray.includes(apiName))
    return "Cloud Natural Language API";
  else if (apiName === "textToSpeech") return "Speech-to-Text API";
  else if (apiName === "translateAI") return "Cloud Translation API";
};

const getLogo = (apiName) => {
  const cloudNaturalLanguageArray = [
    "cnlEntities",
    "cnlSentiment",
    "cnlSentimentEntities",
    "cnlClassify",
  ];
  if (cloudNaturalLanguageArray.includes(apiName)) return CloudNaturalLogo;
  else if (apiName === "textToSpeech") return TextToSpeech;
  else if (apiName === "translateAI") return TranslationIALogo;
};

const getDescription = (apiName) => {
  const apiList = {
    cnlEntities:
      "Entities Analysis inspecte le texte donné pour trouver des entités connues (des noms propres tels que des personnages publics, des points de repère, etc.), et renvoie des informations sur ces entités.",
    cnlSentiment:
      "Sentiment Analysis examine le texte donné et identifie l'opinion émotionnelle dominante dans le texte, en particulier pour déterminer si l'attitude de l'auteur est positive, négative ou neutre.",
    cnlSentimentEntities:
      "Sentiment/Entities Analysis combine l'analyse des entités et l'analyse des sentiments pour tenter de déterminer le sentiment (positif ou négatif) exprimé à propos des entités d'un texte. Le sentiment de l'entité est représenté par un score numérique et des valeurs de magnitude, et il est déterminé pour chaque mention d'une entité.",
    cnlClassify:
      "Classify Analysis analyse un document et renvoie une liste de catégories de contenu qui s'appliquent au texte présent dans le document",
    textToSpeech:
      "Text to Speech permet de convertir du texte en discours naturel à l'aide d'une API optimisée par les meilleures technologies d'IA de Google.",
    translateAI:
      "Cloud Translation permet à vos sites Web et à vos applications de traduire dynamiquement du texte français en anglais par programmation via une API. Translation utilise un modèle de machine learning pré-entraîné de Google ou personnalisé pour traduire du texte.",
  };
  return apiList[apiName] ?? "Choose your API";
};

const getLink = (apiName) => {
  const apiList = {
    cnlEntities:
      "https://cloud.google.com/natural-language/docs/analyzing-entities",
    cnlSentiment:
      "https://cloud.google.com/natural-language/docs/analyzing-sentiment",
    cnlSentimentEntities:
      "https://cloud.google.com/natural-language/docs/analyzing-entity-sentiment",
    cnlClassify:
      "https://cloud.google.com/natural-language/docs/classifying-text",
    textToSpeech: "https://cloud.google.com/text-to-speech/docs/basics",
    translateAI: "https://cloud.google.com/translate/docs/overview",
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

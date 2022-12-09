import React, { Fragment } from "react";
import Entities from "./result/Entities";
import Sentiments from "./result/Sentiment";
import Classify from "./result/Classify";
import Translate from "./result/Translate";

const Result = (props) => {
  return (
    <Fragment>
      {props.apiName === "cnlEntities" && (
        <Entities responseApi={props.responseApi}></Entities>
      )}
      {props.apiName === "cnlSentiment" && (
        <Sentiments responseApi={props.responseApi}></Sentiments>
      )}
      {props.apiName === "cnlClassify" && (
        <Classify responseApi={props.responseApi}></Classify>
      )}
      {props.apiName === "translateAI" && (
        <Translate
          responseApi={props.responseApi}
          targetLanguage={props.targetLanguage}
        ></Translate>
      )}
    </Fragment>
  );
};

export default Result;

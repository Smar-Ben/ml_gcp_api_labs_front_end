import React, { Fragment } from "react";
import Entities from "./result/Entities";
import Sentiments from "./result/Sentiment";
import Classify from "./result/Classify";

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
    </Fragment>
  );
};

export default Result;

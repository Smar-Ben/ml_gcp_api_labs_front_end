import React, { Fragment } from "react";
import Entities from "./result/Entities";
import Sentiments from "./result/Sentiment";

const Result = (props) => {
  return (
    <Fragment>
      {props.apiName === "cnlEntities" && (
        <Entities responseApi={props.responseApi}></Entities>
      )}
      {props.apiName === "cnlSentiment" && (
        <Sentiments responseApi={props.responseApi}></Sentiments>
      )}
    </Fragment>
  );
};

export default Result;

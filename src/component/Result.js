import React, { useState, Fragment } from "react";
import Entities from "./result/Entities";
const Result = (props) => {
  return (
    <Fragment>
      {props.apiName === "cnlEntities" && (
        <Entities responseApi={props.responseApi}></Entities>
      )}
    </Fragment>
  );
};

export default Result;

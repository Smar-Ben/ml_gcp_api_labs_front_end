import React from "react";
import Table from "react-bootstrap/Table";
import Help from "../../img/help.svg";

const Entities = (props) => {
  return (
    <Table
      striped
      bordered
      hover
      style={{
        minWidth: "350px",
        "overflow-wrap": "break-word",
      }}
    >
      <thead>
        <tr>
          <th>Entité</th>
          <th>Type</th>
          <th>Score</th>
          <th>Wiki</th>
        </tr>
      </thead>
      <tbody>
        {props.responseApi.map((entity, index) => (
          <tr>
            <td>{entity.name}</td>
            <td>{entity.type.toLowerCase()}</td>
            <td>{Math.round(entity.score * 100)}</td>
            <td style={{ "word-wrap": "break-all" }}>
              {entity.wikipedia_url.length > 0 && (
                <a href={entity.wikipedia_url}>Lien</a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Entities;

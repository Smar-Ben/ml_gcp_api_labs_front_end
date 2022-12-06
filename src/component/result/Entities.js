import React from "react";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Entities = (props) => {
  console.log(props.responseApi);
  return (
    <Table
      striped
      bordered
      hover
      style={{
        minWidth: "350px",
        "table-layout": "fixed",
        "overflow-wrap": "break-word",
      }}
    >
      <thead>
        <tr>
          <th>Entité </th>
          <th>Type</th>
          <th>Score</th>
          <th>Link</th>
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
          // <ListGroup.Item as="li">
          //   Le mot {entity.name} est un {entity.type} avec une confidence de{" "}
          //   {Math.round(entity.score * 100)}%<br />
          //   <b>Langue detecté</b> : {entity.language}
          //   <br />
          //   {entity.wikipedia_url.length > 0 && (
          //     <span>
          //       <b>Lien vers wikipédia</b> : {entity.wikipedia_url}
          //     </span>
          //   )}
          // </ListGroup.Item>
        ))}
      </tbody>
    </Table>
  );
};

export default Entities;

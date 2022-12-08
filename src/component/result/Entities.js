import React from "react";
import Table from "react-bootstrap/Table";
import Help from "../../img/help.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Entities = (props) => {
  const renderTooltip = (name) => {
    const description_col = {
      entities: "Nom des entités detectées par Cloud Natural Language",
      type: "Le type de l'entité (personne, location, organization...)",
      score: "Confidence du résultat de Cloud Natural Language ",
      wiki: "Lien vers le wikipédia de l'entitié (pas toujours présent)",
    };
    return <Tooltip id="button-tooltip">{description_col[name]}</Tooltip>;
  };

  return (
    <Table
      striped
      bordered
      hover
      style={{
        minWidth: "350px",
        overflowWrap: "break-word",
      }}
    >
      <thead>
        <tr>
          <th>
            Entité{" "}
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip("entities")}
            >
              <img src={Help} width="20" height="20" alt="question"></img>
            </OverlayTrigger>
          </th>
          <th>
            Type{" "}
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip("type")}
            >
              <img src={Help} width="20" height="20" alt="question"></img>
            </OverlayTrigger>
          </th>
          <th>
            Score
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip("score")}
            >
              <img src={Help} width="20" height="20" alt="question"></img>
            </OverlayTrigger>
          </th>
          <th>
            Wiki
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip("wiki")}
            >
              <img src={Help} width="20" height="20" alt="question"></img>
            </OverlayTrigger>
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(props.responseApi) &&
          props.responseApi.map((entity, index) => (
            <tr key={index}>
              <td>{entity.name}</td>
              <td>{entity.type.toLowerCase()}</td>
              <td>{Math.round(entity.score * 100)}%</td>
              <td>
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

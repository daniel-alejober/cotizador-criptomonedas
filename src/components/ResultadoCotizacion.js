import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 1px;
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const PrecioResultado = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const ResultadoCotizacion = ({ cotizacion }) => {
  /*si el objeto llega vacio ya no ejecutara el componente */
  if (Object.keys(cotizacion).length === 0) return null;

  return (
    <ResultadoDiv>
      <PrecioResultado>
        El precio es: <span>{cotizacion.PRICE}</span>
      </PrecioResultado>
      <Info>
        El precio más alto del dia: <span>{cotizacion.HIGHDAY}</span>
      </Info>
      <Info>
        El precio más bajo del dia: <span>{cotizacion.LOWDAY}</span>
      </Info>
      <Info>
        Variación últimas 24 horas: <span>{cotizacion.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última Actialización: <span>{cotizacion.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

export default ResultadoCotizacion;

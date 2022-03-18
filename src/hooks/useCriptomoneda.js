import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
`;

const useCriptomoneda = (label, estadoInicial, opcionesAPI) => {
  //El state va antes de los que retornas
  const [estadoCripto, setEstadoCripto] = useState(estadoInicial);

  //cuando lleva parentesis le estamos diciendo que el return esta implicito
  const SeleccionarCripto = () => (
    <Fragment>
      <Label>{label}</Label>

      <Select
        onChange={(e) => setEstadoCripto(e.target.value)}
        value={estadoCripto}
      >
        <option value="">-- Seleccionar Moneda --</option>
        {opcionesAPI.map((opcion) => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
            {opcion.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  //Retornar state, interfaz
  return [estadoCripto, SeleccionarCripto];
};

export default useCriptomoneda;

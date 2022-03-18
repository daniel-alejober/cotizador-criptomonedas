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

const useMoneda = (label, estadoInicial, monedas) => {
  //El state va antes de los que retornas
  const [estadoMoneda, setEstadoMoneda] = useState(estadoInicial);

  //cuando lleva parentesis le estamos diciendo que el return esta implicito
  const Seleccionar = () => (
    <Fragment>
      <Label>{label}</Label>

      <Select
        onChange={(e) => setEstadoMoneda(e.target.value)}
        value={estadoMoneda}
      >
        <option value="">-- Seleccionar Moneda --</option>
        {monedas.map((moneda) => (
          <option key={moneda.codigo} value={moneda.codigo}>
            {moneda.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  //Retornar state, interfaz y funcion que modifica el state
  return [estadoMoneda, Seleccionar];
};

export default useMoneda;

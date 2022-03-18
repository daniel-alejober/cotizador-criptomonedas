import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";
import Error from "./Error";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: 1s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ setGuardarMonedaPais, setGuardarMonedaCripto }) => {
  const monedas = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  //guardar la informacion de las criptomonedas
  const [infoCripto, setInfoCripto] = useState([]);

  //Errores
  const [errores, setErrores] = useState(false);

  //vamos a usar el hook personalizados useMoneda, destructuramos sus elementos
  const [estadoMoneda, Seleccionar] = useMoneda("Elige tu Moneda", "", monedas);

  //hook useCriptoMoneda, destructuramos sus elementos
  const [estadoCripto, SeleccionarCripto] = useCriptomoneda(
    "Elige tu Criptomoneda",
    "",
    infoCripto
  );

  //Ejecutar un llamado a la API, USAREMOS AXIOS
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);

      setInfoCripto(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (estadoMoneda === "" || estadoCripto === "") {
      setErrores(true);
      return;
    }
    setErrores(false);

    setGuardarMonedaPais(estadoMoneda);
    setGuardarMonedaCripto(estadoCripto);
  };

  return (
    <form onSubmit={handleSubmit}>
      {errores && <Error msg={"Todos los campos son obligatorios"}></Error>}

      <Seleccionar></Seleccionar>
      <SeleccionarCripto></SeleccionarCripto>
      <Boton type="submit" value="Calcular"></Boton>
    </form>
  );
};

export default Formulario;

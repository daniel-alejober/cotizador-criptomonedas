import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import imagen from "./cripto.png";
import axios from "axios";
import ResultadoCotizacion from "./components/ResultadoCotizacion";
import Loader from "./components/Loader";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  //Guardar las moendas que nos pase el usuario
  const [guardarMonedaPais, setGuardarMonedaPais] = useState("");
  const [guardarMonedaCripto, setGuardarMonedaCripto] = useState("");
  const [cotizacion, setCotizacion] = useState({});

  const [spinner, setSpinner] = useState(false);

  //Calculo de la conversion de criptomonedas
  useEffect(() => {
    const cotizandoCripto = async () => {
      /*evitamos la ejecucion la primera vez ya que useEffect es como un
        DOMContentLoaded se ejecuta cuando carga el documento*/
      if (guardarMonedaPais === "") return;

      //consultar la api para tener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${guardarMonedaCripto}&tsyms=${guardarMonedaPais}`;

      const resultado = await axios.get(url);

      //mostrar el spinner
      setSpinner(true);

      //oculatr el spinner y mostrar el resultado
      setTimeout(() => {
        setSpinner(false);

        /*usamos [] para definir que es lo que queremos de ese objeto ya que cambia dependiendo de la
        criptomoneda*/
        setCotizacion(
          resultado.data.DISPLAY[guardarMonedaCripto][guardarMonedaPais]
        );
      }, 3000);
    };
    cotizandoCripto();
  }, [guardarMonedaPais, guardarMonedaCripto]);

  //cargar de forma condicionales los componentes
  const componente = spinner ? (
    <Loader></Loader>
  ) : (
    <ResultadoCotizacion cotizacion={cotizacion}></ResultadoCotizacion>
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen criptomonedas"></Imagen>
      </div>

      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
          setGuardarMonedaPais={setGuardarMonedaPais}
          setGuardarMonedaCripto={setGuardarMonedaCripto}
        ></Formulario>

        {componente}
      </div>
    </Contenedor>
  );
}

export default App;

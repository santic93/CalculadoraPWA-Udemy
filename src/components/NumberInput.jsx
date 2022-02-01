import React, { useState } from "react";
import PropTypes from "prop-types";
import Resultado from "./Resultado";
import { operaciones } from "../helpers/operaciones";

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });

  //SE LO PASO A LOS HELPERS A TRAVES DEL ARCHIVO OPERACIONES JS
  // const handleChange = (e) => {
  //   setNumeros({
  //     ...numeros,
  //     [e.target.name]: parseFloat(e.target.value),
  //   });
  // };

  // const suma = () => numero1 + numero2;
  // const resta = () => numero1 - numero2;
  // const multiplicacion = () => numero1 * numero2;
  // const division = () => numero1 / numero2;

  //ME TRAIGO TODO LO QUE NECESITO DE LOS HELPERS
  const {
    handleChange,
    suma,
    resta,
    multiplicacion,
    division,
    numero1,
    numero2,
  } = operaciones(numeros, setNumeros);

  return (
    <>
      <label className="mx-2">
        Numero 1:{" "}
        <input
          name="numero1"
          value={numero1}
          onChange={handleChange}
          type="number"
        />
      </label>
      <label className="mx-2">
        Numero 2:{" "}
        <input
          name="numero2"
          value={numero2}
          onChange={handleChange}
          type="number"
        />
      </label>
      <Resultado operacion="Suma" calculo={suma()} />
      <Resultado operacion="Resta" calculo={resta()} />
      <Resultado operacion="Multiplicacion" calculo={multiplicacion()} />
      <Resultado operacion="Division" calculo={division()} />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;

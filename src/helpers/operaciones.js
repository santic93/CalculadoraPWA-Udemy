//EXPORTO LA FUNCION
//RECIBO NUMEROS Y SET NUMEROS DE NUMBERINPUT
export const operaciones = (numeros, setNumeros) => {
  //DESESTRUCTURO
  const { numero1, numero2 } = numeros;

  //PEGO TODO LO QUE ME TRAJE DESDE NUMBER INPUT
  //NECESITO RECIBIR UN ESTADO, POR LA (E) Y UN ESTADO, PORQUE NECESITO LOS NUMERO1, NUMERO2
  const handleChange = (e) => {
    setNumeros({
      ...numeros,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const suma = () => numero1 + numero2;
  const resta = () => numero1 - numero2;
  const multiplicacion = () => numero1 * numero2;
  const division = () => numero1 / numero2;

  //PASO TODAS LAS OPERACIONES, LAS EXPORTO
  return {
    handleChange,
    suma,
    resta,
    multiplicacion,
    division,
    numero1,
    numero2,
  };
};

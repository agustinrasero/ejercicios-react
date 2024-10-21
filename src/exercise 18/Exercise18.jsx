import React, { useState } from 'react';

/*
    Ejercicio 30: Calculadora de IMC
    Crea una calculadora de Índice de Masa Corporal (IMC).

    Requisitos:

    - Un estado para almacenar el peso y la altura del usuario.
    - Inputs para ingresar el peso y la altura.
    - Un botón para calcular el IMC.
    - Muestra el resultado del IMC y una interpretación (bajo peso, normal, sobrepeso, obesidad).
*/

const Exercise18 = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [interpretacion, setInterpretacion] = useState('');

  const calcular = () => {
    const imc = peso / (altura * altura);
    const imcRedondeado = imc.toFixed(2);
    setResultado(imcRedondeado);

    if (imcRedondeado <= 18.5) {
      setInterpretacion('Bajo peso');
    } else if (imcRedondeado <= 24.9) {
      setInterpretacion('Normal');
    } else if (imcRedondeado <= 29.9) {
      setInterpretacion('Sobrepeso');
    } else {
      setInterpretacion('Obesidad');
    }
  };

  return (
    <div>
      <label>Ingrese su peso</label>
      <input type="number" onChange={(e) => setPeso(e.target.value)} />

      <label>Ingrese su altura</label>
      <input type="number" onChange={(e) => setAltura(e.target.value)} />

      <button onClick={calcular}>Calcular IMC</button>

      <h4>
        Resultado: ({resultado}) {interpretacion}
      </h4>
    </div>
  );
};

export default Exercise18;

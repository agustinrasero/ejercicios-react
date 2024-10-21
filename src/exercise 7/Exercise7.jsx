import React, { useState, useEffect } from 'react';
import { cartasDuplicadas1, cartasDuplicadas2 } from './data/data';
import cartaincognita from '../exercise 7/img/cartaincognita.jpg';

const Exercise7 = () => {
  const [carta1, setCarta1] = useState(null); // Almacena la primera carta seleccionada
  const [carta2, setCarta2] = useState(null); // Almacena la segunda carta seleccionada
  const [cartas1, setCartas1] = useState(cartasDuplicadas1); // Estado para las cartas de cartasDuplicadas1
  const [cartas2, setCartas2] = useState(cartasDuplicadas2); // Estado para las cartas de cartasDuplicadas2

  useEffect(() => {
    if (carta1 && carta2) {
      if (carta1.src === carta2.src) {
        // Si las cartas coinciden, se actualizan las propiedades "matched"
        setCartas1((prevCartas) =>
          prevCartas.map((carta) =>
            carta.id === carta1.id || carta.id === carta2.id
              ? { ...carta, matched: true }
              : carta
          )
        );
        setCartas2((prevCartas) =>
          prevCartas.map((carta) =>
            carta.id === carta1.id || carta.id === carta2.id
              ? { ...carta, matched: true }
              : carta
          )
        );
      }
      // Reinicia la selección de cartas después de 1 segundo
      setTimeout(() => {
        setCarta1(null);
        setCarta2(null);
      }, 1000);
    }
  }, [carta1, carta2]);

  const manejarClick = (carta, setCarta) => {
    if (!carta1) {
      setCarta(carta);
    } else if (!carta2 && carta !== carta1) {
      setCarta(carta);
    }
  };

  return (
    <div className='cartas-overlay'>
      <div className='cartas'>
        {cartas1.map((valor) => (
          <div key={valor.id}>
            <img
              className='img-carta'
              onClick={() => manejarClick(valor, setCarta1)}
              src={valor.matched || valor === carta1 ? valor.src : cartaincognita}
              alt='Carta'
            />
          </div>
        ))}
      </div>

      <div className='cartas'>
        {cartas2.map((valor) => (
          <div key={valor.id}>
            <img
              className='img-carta'
              onClick={() => manejarClick(valor, setCarta2)}
              src={valor.matched || valor === carta2 ? valor.src : cartaincognita}
              alt='Carta'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise7;

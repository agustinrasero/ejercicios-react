import React,{useState} from 'react'
import Lista from './components/Lista';
import Carrito from './components/Carrito';

/*
    Ejercicio 9: Carrito de Compras
    Crea un componente de carrito de compras que permita agregar y eliminar productos.

    Requisitos:

    -Un estado para almacenar los productos en el carrito.
    -Un botón para agregar productos al carrito.
    -Un botón para eliminar productos del carrito.
    -Mostrar el total de productos en el carrito.
*/


const Exercise13 = () => {

  const carrito = [
    {
      id: 1,
      nombre: "Laptop",
      precio: 1200,
      cantidad: 1,
      imagen: "https://via.placeholder.com/150/0000FF/808080?text=Laptop", // Imagen de una laptop
    },
    {
      id: 2,
      nombre: "Auriculares",
      precio: 150,
      cantidad: 2,
      imagen: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Auriculares", // Imagen de auriculares
    },
    {
      id: 3,
      nombre: "Mouse",
      precio: 25,
      cantidad: 1,
      imagen: "https://via.placeholder.com/150/008000/FFFFFF?text=Mouse", // Imagen de un mouse
    },
    {
      id: 4,
      nombre: "Teclado Mecánico",
      precio: 80,
      cantidad: 1,
      imagen: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Teclado+Mecánico", // Imagen de un teclado mecánico
    },
    {
      id: 5,
      nombre: "Monitor",
      precio: 300,
      cantidad: 1,
      imagen: "https://via.placeholder.com/150/800080/FFFFFF?text=Monitor", // Imagen de un monitor
    }
  ];

  const [total, setTotal] = useState(0);
  const [productoSelect, setProductoSelect] = useState([]);
  

  const agregar = (e) => {

    setProductoSelect([...productoSelect, e.target.parentElement.children[1].innerText]);

    setTotal(total + Number(e.target.parentElement.children[2].innerText.slice(1)));

    
  }

  const eliminar = (e) => {
    
  }

  return (
    <div>
      <div className='contenedor-lista'>
        {
          carrito.filter((valor,i )=> valor.nombre !== productoSelect[i]).map((valor, i) => (
            <Lista key={i} producto={valor.nombre} precio={valor.precio} imagen={valor.imagen} agregar={(e)=> agregar(e)}></Lista>
          ))
        }
      </div>

      <h1>Carrito</h1>
      

      <div className='contenedor-carrito'>
      <h3>Total: ${total}</h3>
        {
        (productoSelect.length === 0) ? <h3>No hay productos en el carrito</h3> 
        :
        
        productoSelect.map((valor, i) =>(
          
          <Carrito key={i} productoSelect={valor} eliminar={(e)=> eliminar(e)}></Carrito>
        ))
        }
      </div>
      
    </div>
  )
}

export default Exercise13

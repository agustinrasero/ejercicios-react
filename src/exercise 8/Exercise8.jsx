import React,{useState} from 'react'
import Itemlist from './components/Itemlist'


/*
    Ejercicio 4: Lista de Elementos con Borrado
    Crea una lista de elementos donde puedas eliminar cualquier elemento de la lista al hacer clic en un botón de "Eliminar" junto a cada elemento.

    -Paso 1: Crea un componente ItemList.
    -Paso 2: Usa useState para manejar la lista de elementos.
    -Paso 3: Al hacer clic en el botón de "Eliminar", remueve el elemento correspondiente de la lista.
*/
const Exercise8 = () => {
    const [items, setItems] = useState([
        'Elemento 1',
        'Elemento 2',
        'Elemento 3',
        'Elemento 4',
      ]);

      const eliminarItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index)); //Representa el estado actual de los elementos antes de la actualización. Es una lista de elementos que se pasa a la función de actualización.
      };


  return (
    <div>
      <h2>Lista de Elementos</h2>
      <ul>
        {items.map((item, index) => (
          <Itemlist key={index} item={item} onDelete={() => eliminarItem(index)} />
        ))}
      </ul>
    </div>
  )
}

export default Exercise8

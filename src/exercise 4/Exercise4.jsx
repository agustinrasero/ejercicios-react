import React,{useState} from 'react'
import Modal from './components/Modal'
/*  
    Ejercicio 4:
    Crea un componente Modal que se pueda reutilizar en diferentes partes de la aplicación:

    -El modal debe ser visible cuando se haga clic en un botón y desaparecer cuando se haga clic en un botón de cerrar dentro del modal.
    -Usa useState para manejar la visibilidad del modal.
*/
const Exercise4 = () => {
    const [modal,setModal] = useState(false)

    const abrir = () => setModal(true)
    const cerrar = () => setModal(false)

  return (

    <div className='App'>
        <button onClick={abrir}>Abrir</button>
        <Modal abierto={modal} cerrar={cerrar}>
            <h1>Contenido del Modal</h1>
            <p>Este es el contenido del modal.</p>
        </Modal>
    </div>
  )
}

export default Exercise4

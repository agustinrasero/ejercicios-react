import React,{useState} from 'react'
/*


    Ejercicio 7: Cambio de Tema
    Crea una aplicación que permita cambiar entre un tema claro y un tema oscuro.

    Requisitos:

    -Un estado para almacenar el tema actual.
    -Un botón para cambiar entre los temas.
    -Aplicar estilos diferentes según el tema seleccionado.


*/
const Exercise14 = () => {

    const [tema, setTema] = useState('claro') // Estado para almacenar el tema actual
    
    const cambiar = () =>{
        if(tema === 'claro'){
            setTema('oscuro')
        }else{
            setTema('claro')
        }


    }

    const estilosClaro = {
        backgroundColor: 'white',
        color: 'black',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    };

    const estilosOscuro = {
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    };

  return (
    <div style={tema==='claro'? estilosClaro : estilosOscuro}>
        <button onClick={cambiar}>Cambiar Tema</button>
    </div>
  )
}

export default Exercise14

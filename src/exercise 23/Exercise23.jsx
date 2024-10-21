import React,{useState} from 'react'
import ReactPlayer from 'react-player'

/*
    Ejercicio 40: Reproductor de Video
    Crea un reproductor de video simple que permita reproducir, pausar y cambiar de video.

    Requisitos:

    -Un estado para almacenar el video actual y su estado (reproduciendo o pausado).
    -Botones para reproducir, pausar y cambiar de video.
    -Muestra el título del video actual.
*/

const Exercise23 = () => {

    const [video, setVideo] = useState([{ id: 1, nombre: 'Video 1', url: 'https://www.youtube.com/watch?v=JGwWNGJdvx8'},{ id: 2, nombre: 'Video 2', url: 'https://www.youtube.com/watch?v=UvlqI_98oBU&ab_channel=bardxro.'}]);
    const [videoActual, setVideoActual] = useState([null]);
    const [estado, setEstado] = useState([false]);

  return (
    <div>
      <h1>Reproductor de videos</h1>
      {video.map((value,index) => 
        <div key={index}> 
            <p>{value.nombre}</p>
            <button onClick={()=>setVideoActual(value)}>Reproducir</button>
        </div>)}

        <div className='reproductor'>
            {(videoActual) && <ReactPlayer url={videoActual.url} playing={estado} />}
            <button onClick={()=> setEstado(false)}>Stop</button> <button onClick={()=> setEstado(true)}>Play</button>
        </div>
    </div>
  )
}

export default Exercise23

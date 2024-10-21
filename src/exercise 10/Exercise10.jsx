import React from 'react'
import LazyLoad from 'react-lazyload';


/*
    Galería de Imágenes con Lazy Loading:

    -Construye una galería de imágenes donde las imágenes se carguen de manera perezosa (lazy loading).
    -Utiliza IntersectionObserver o una librería de terceros como react-lazyload.
    -Agrega la opción de cargar más imágenes al hacer scroll hacia abajo.
*/


/*
    height={200} = Este parámetro define la altura que ocupará el contenido dentro del contenedor mientras no se haya cargado.
    once={true} = Cuando este parámetro se establece en true, indica que el contenido dentro de <LazyLoad> solo se cargará una vez, 
                y no se volverá a cargar si el usuario desplaza la página hacia fuera y luego vuelve a la misma posición.
    offset={100} = el contenido se cargará 100 píxeles antes de que el usuario llegue a esa parte de la página.
*/

const Exercise10 = () => {
    const images = [
        "https://via.placeholder.com/150/0000FF/808080?text=Image1",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image2",
        "https://via.placeholder.com/150/FFFF00/000000?text=Image3",
        "https://via.placeholder.com/150/00FF00/0000FF?text=Image4",
        "https://via.placeholder.com/150/FF00FF/FFFF00?text=Image5",
        "https://via.placeholder.com/150/00FFFF/FF0000?text=Image6",
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Image7",
        "https://via.placeholder.com/150/FF0000/0000FF?text=Image8",
        "https://via.placeholder.com/150/FFFF00/FF00FF?text=Image9",
        "https://via.placeholder.com/150/00FF00/FF00FF?text=Image10"
    ];

    const mapeo = images.map((valor,i) =>(
        
            <div key={i}>
                <LazyLoad height={200} once={true} offset={100}>
                    <img src={valor}></img>
                </LazyLoad>
            </div>
        
    ))

  return (
    <div>
      {mapeo}
    </div>
  )
}

export default Exercise10

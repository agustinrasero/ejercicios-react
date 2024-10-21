import React,{createRef, useState} from 'react';
import ListaImg from './components/ListaImg';

/*
    Ejercicio 6: Galería de Imágenes
    Crea una galería de imágenes que permita hacer clic en una imagen para verla en tamaño completo.

    Requisitos:

    -Un estado para almacenar la imagen seleccionada.
    -Una lista de imágenes en miniatura.
    -Al hacer clic en una miniatura, mostrar la imagen en tamaño completo.
*/

const Exercise12 = () => {

    const images = [
        'https://via.placeholder.com/800x600', 
        'https://via.placeholder.com/700x500', 
        'https://via.placeholder.com/600x400'
    ];

    const [clic,setClic] = useState(false)

    const [img,setImg] = useState()

    const click = (e) =>{
        setClic(true)
        setImg(e.target.src)
    }

 
    
    const agrandar = () => {
        if (clic) {
            return (
                
                <div className="imagen-agrandada">
                    <img src={img} alt="Imagen seleccionada" />
                    <button onClick={()=> setClic(false)}>Cerrar</button>
                </div>
                
            );
        }
    };

    return (
        <div className='contenedor'>
            {
            (clic) ? agrandar() :
            images.map((valor, i) => (
                <ListaImg key={i} images={valor} agrandar={(e) => click(e)}></ListaImg>
            ))
            
            }
           
        </div>
    );

};

export default Exercise12;
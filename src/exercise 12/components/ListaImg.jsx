import React from 'react';

const ListaImg = ({ images, agrandar }) => {
    return (
        <div className='img'>
            <img  src={images} onClick={agrandar}></img> 
        </div>
    );
};

export default ListaImg;
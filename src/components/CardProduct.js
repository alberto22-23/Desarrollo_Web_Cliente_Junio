import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilos.css";


const CardProduct = ({ propproducto }) => {
    const id_producto = propproducto.id
    const enlace_producto = "/producto/" + id_producto
    return (
        <div className="cardproduct">
            <div className='div-id'>{propproducto.id}</div>
            <div className='div-categ'>{propproducto.category.toUpperCase()}</div>
            <div className='div-img'><img src={propproducto.image} alt="producto" className="img-product" /></div>
            <div className='div-titulo'>{propproducto.title}</div>
            <div className='div-precio'>Precio: {propproducto.price} €</div>
            {/*<div>{productoprop.description}</div>*/}
            <div className='div-link'>
                <Link to={enlace_producto} className="enlace">Ver Producto</Link>
            </div>

        </div >
    );
}
export default CardProduct;

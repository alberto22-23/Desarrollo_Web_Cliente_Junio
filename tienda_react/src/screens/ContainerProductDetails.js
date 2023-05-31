//import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

//Estilos
import "../styles/estilos.css";


const ContainerProductDetails = (props) => { //tengo que traer la id del producto

    const [producto, setProducto] = useState({}); //declaramos objeto inicial vacío
    const { parametro_id } = useParams();
    const parametro_id_str = parametro_id.toString();

    //EFECTOS
    useEffect(() => {
        const promesa = axios.get("https://fakestoreapi.com/products/" + parametro_id_str);
        promesa.then((producto_por_id) => {
            console.log("Se ha recibido la respuesta");
            console.log(producto_por_id.data);
            setProducto(producto_por_id.data);
        })
    }, []) //HOOK DE EFECTO

    return (
        <div className="containerdetails">
            <div className="card-prod-detail">
                <div>{producto.category}</div>
                <img src={producto.image} alt="producto" className="imagen-logo" />
                <div>{producto.title}</div>
                <div>Precio: {producto.price} €</div>
                <div>{producto.description}</div>
            </div>
        </div>
    );
}
export default ContainerProductDetails;


import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CardProduct from '../components/CardProduct';

const ContainerProducts = (props) => {
    
    //VARIABLE DE ESTADO
    const [productos, setProductos] = useState([]);

    //EFECTO PARA ESTABLECER LA VARIABLE DE ESTADO
    useEffect(() => {
        const promesa = axios.get("https://fakestoreapi.com/products");
        promesa.then((productos) => {
            console.log("Se ha recibido la respuesta");
            console.log(productos.data);
            setProductos(productos.data);
        })
    }, []) //HOOK DE EFECTO

    return (
        <div className="containerproducts">
            {productos.map(producto => {
                return (
                    <CardProduct propproducto={producto} />
                )
            })}
        </div>

    )

}

export default ContainerProducts;
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import CardProduct from '../components/CardProduct';

const ContainerCategProds = (props) => {
    
    //VARIABLE DE ESTADO
    const [productos_x_cat, setProductos_x_cat] = useState([]); //declaramos array inicial vacío
    const { parametro_categoria } = useParams(""); //Nos llega desde CardCateg, a través de la route definida en App.js

    //EFECTO PARA ESTABLECER LA VARIABLE DE ESTADO
    useEffect(() => {
        const promesa = axios.get("https://fakestoreapi.com/products/category/" + parametro_categoria);
        promesa.then((productos_x_categoria) => {
            console.log("Se ha recibido la respuesta");
            console.log(productos_x_categoria.data);
            setProductos_x_cat(productos_x_categoria.data)
        })
    }, []) //HOOK DE EFECTO

    return (
        <div className="containerproducts">
            {productos_x_cat.map((producto, i) => {
                return (
                    <CardProduct key={i} propproducto={producto} />
                )
            })}
        </div>
    )

}

export default ContainerCategProds;
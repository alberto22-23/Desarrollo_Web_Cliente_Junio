import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CardCateg from "../components/CardCateg";

//Estilos
import "../styles/estilos.css";


const ContainerCategs = () => {

    //VARIABLE DE ESTADO
    const [categorias, setCategorias] = useState([]);

    //EFECTO PARA ESTABLECER LA VARIABLE DE ESTADO
    useEffect(() => {
        const promesa = axios.get("https://fakestoreapi.com/products/categories");
        promesa.then((categorias) => {
            console.log("Se ha recibido la respuesta");
            console.log(categorias.data);
            setCategorias(categorias.data); 
        })
    },[]) //HOOK DE EFECTO

    return <div className="containercategs">
        {/*<div className='cardcateg'><h4>Categorias disponibles:</h4></div>*/}
        
        {categorias.map((categoria, i) => {
                        return (
                            <CardCateg key={i} categoria={categoria} />
                        )
                    })}
    </div>
}

export default ContainerCategs;


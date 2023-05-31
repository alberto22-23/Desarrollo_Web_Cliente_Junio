import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CardUser from '../components/CardUser';

const ContainerUsers = (props) => {
   
    //VARIABLE DE ESTADO
    const [usuarios, setUsuarios] = useState([]);


    //EFECTO PARA ESTABLECER LA VARIABLE DE ESTADO
    useEffect(() => {
        const promesa = axios.get("https://fakestoreapi.com/users?sort=" + props.proporden);
        promesa.then((array_usuarios) => {
            console.log("1) Se ha recibido la respuesta");
            console.log("2) https://fakestoreapi.com/users?sort=" + props.proporden);
            console.log(array_usuarios.data);
            const array_usuarios_todos = array_usuarios.data;
            const num_usuarios = array_usuarios_todos.length;
            console.log(num_usuarios);
            console.log(props.propvisibles);
            const actualiza_usuarios = props.hijoASetDatpadre;
            actualiza_usuarios(num_usuarios);

            if(0 < props.propvisibles <= array_usuarios_todos.length){
                const array_usuarios_visibles = array_usuarios_todos.slice(0,props.propvisibles);
                setUsuarios(array_usuarios_visibles);
            }
            if(props.propvisibles > array_usuarios_todos.length){
                setUsuarios(array_usuarios_todos);
            }     
        })
    }, [props.proporden,props.propvisibles]) //Introduzco en el array la variable cuyo cambio obliga a ejecutar de nuevo useEffect()

    return (
        <div className="containerusers">
            {/*<div>Ordenación: {ordenacion}</div>*/}
            {usuarios.map(usuario => {
                return (
                    <CardUser propusuario={usuario} />
                )
            })}
        </div>
    )
}

export default ContainerUsers;
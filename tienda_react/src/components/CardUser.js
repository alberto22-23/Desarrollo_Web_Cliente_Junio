import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilos.css";


const CardUser = ({ propusuario }) => {
    return (
        <div className="carduser">
            <div className='div-titulo'>Identificador: {propusuario.id}</div>
            <div className='div-precio'>Datos personales:</div> 
            <div className='div-titulo'>email: {propusuario.email}</div>
            <div className='div-titulo'>Nombre: {propusuario.name.firstname}</div>
            <div className='div-titulo'>Apellidos: {propusuario.name.lastname}</div>
            <div className='div-titulo'>Teléfono: {propusuario.phone}</div>
            <div className='div-precio'>Dirección:</div>           
            <div className='div-titulo'>Ciudad: {propusuario.address.city}</div>
            <div className='div-titulo'>Calle: {propusuario.address.street}</div>
            <div className='div-titulo'>Nº: {propusuario.address.number}</div>
            <div className='div-titulo'>Código Postal: {propusuario.address.zipcode}</div>
            <div className='div-precio'>Geolocalización:</div> 
            <div className='div-titulo'>Latitud: {propusuario.address.geolocation.lat}</div>
            <div className='div-titulo'>Longitud: {propusuario.address.geolocation.long}</div>
        </div >
    );
}
export default CardUser;
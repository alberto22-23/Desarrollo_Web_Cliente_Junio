//Librerías
import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilos.css";
import logotienda from "./logo-tienda.jpg"


/*
    Componente para mostrar la cabecera de la página
*/
const Header = () => {
    return (
        <div className="header">
            {/*Logo de la página, devuelve a la página de inicio
            <Link to="/" className="tienda_react-logo-link">
                <img src={process.env.PUBLIC_URL + './imagen.png'} alt="imagen" className="imagen-logo" />
            </Link>*}
            {/*Menú, permite acceder a las distintas páginas*/}
            {/*Logo de la página, devuelve a la página de inicio*/}
            <div className='elemHeader'>
                <Link to="/" className="enlace">
                    <img src={logotienda} alt="logo" title="Inicio Tienda React" className="imagen-logo" />
                </Link>
            </div>
            <div className='elemHeader'>
                {/* /: Página de categorías, muestra todas las categorías */}
                <Link to="/categorias" className="enlace">Categorias</Link>
            </div>
            <div className='elemHeader'>
                {/* /: Página de categorías, muestra todos los productos */}
                <Link to="/productos" className="enlace">Productos</Link>
            </div>
            <div className='elemHeader'>
                {/* /: Página de categorías, muestra todos los productos */}
                <Link to="/usuarios" className="enlace">Ver usuarios</Link>
            </div>
            <div className='elemHeader'>
                {/* /albums: Página extra */}
                <Link to="/extra" className="enlace">Extra Camiseta</Link>
            </div>
            {/*<div className='elemHeader'>
                <Link to="/about" className="enlace">Sobre nosotr@s</Link>
            </div>*/}
        </div>
    );
}
export default Header;

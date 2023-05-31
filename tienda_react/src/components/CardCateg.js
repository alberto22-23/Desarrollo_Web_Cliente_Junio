import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilos.css";


const CardCateg = ( {categoria} ) => {
    
    const path_categoria = "/categoria/" + categoria 
    //Podemos ver en App.js el componente que corresponde a este path --> ContainerCategProds
    return (
        <div className="cardcateg">
            <div>{categoria.toUpperCase()}</div>
            
            <div className='div-link-categ'>
                <Link to={path_categoria} className="enlace">Ver Categoria</Link>
            </div>
        </div>
    );
}
export default CardCateg;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerUsers from '../screens/ContainerUsers'

//Estilos
import "../styles/estilos.css";


const PreContainerUsers = () => {

    const [orden, setOrden] = useState("asc");
    const [visibles, setVisibles] = useState(0);
    const [totalUsuarios, setTotalUsuarios] = useState(0);

    const fnHijoASetDatPadre = (datoshijo) => {		
		setTotalUsuarios(datoshijo);					
	}

    const handleClick = event => {
        if (orden === "asc"){
            setOrden("desc");
        }
        else{
            setOrden("asc");
        }
    }

    const handleInputChange = event =>{
        setVisibles(event.target.value); // De esta forma cogemos el valor contenido en el input
        console.log(visibles); 
    }

    return (
        <div className='precontainerusers'>
            <div className='div-asc-desc'>Elija el orden de presentación: </div>
            <div className='div-asc-desc'>
                <button onClick={handleClick} className='btn-asc-desc'>Ascendente/Descendente</button>
            </div>
            <div className='div-asc-desc'>Introduzca el número de usuarios visibles: </div>
            <div className='div-asc-desc'>
                <input onChange={handleInputChange} className='input-num-users' type="number" min="0" max={totalUsuarios} placeholder='Nº visibles'></input>
                {/*<button onClick={handleClick1} className='btn-asc-desc btn-num-users' >Aceptar</button>*/}
                Total Usuarios: {totalUsuarios}
            </div>

            <ContainerUsers proporden = {orden} propvisibles = {visibles} hijoASetDatpadre = {fnHijoASetDatPadre}/>
        </div>
    );
}
export default PreContainerUsers;
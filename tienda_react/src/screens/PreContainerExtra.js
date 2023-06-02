import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerExtra from '../screens/ContainerExtra'

//Estilos
import "../styles/estilos.css";


const PreContainerExtra = () => {

    const [figura, setFigura] = useState("");
    
    //------------------ ELEVACIÓN DE ESTADO, los estados están ligados al select de figuras------------------------
    const [deshabilitar_mover_dcha, setDeshabilitarMoverDcha] = useState(false);
    const [deshabilitar_mover_izq, setDeshabilitarMoverIzq] = useState(false);
    const [deshabilitar_mover_abajo, setDeshabilitarMoverAbajo] = useState(false);
    const [deshabilitar_mover_arriba, setDeshabilitarMoverArriba] = useState(false);
    const [deshabilitar_color_borde, setDeshabilitarColorBorde] = useState(false);
    const [deshabilitar_grosor_borde, setDeshabilitarGrosorBorde] = useState(false);
    const [deshabilitar_color_relleno, setDeshabilitarColorRelleno] = useState(false);
    const [deshabilitar_escala, setDeshabilitarEscala] = useState(false);
    //--------------------------------------------------------------

    const handleSelectChange = event => {
        if (event.target.value === "Polígono") {
            setFigura("Polígono");
            
            setDeshabilitarMoverDcha(false);
            setDeshabilitarMoverIzq(false);
            setDeshabilitarMoverAbajo(false);
            setDeshabilitarMoverArriba(false);
            setDeshabilitarColorBorde(false);
            setDeshabilitarGrosorBorde(false);
            setDeshabilitarColorRelleno(false)
            setDeshabilitarEscala(false);

            //document.getElementsByClassName("selec-color-borde").selectedIndex="0";
        }
        if (event.target.value === "Rectángulo") {
            setFigura("Rectángulo"); 
            
            setDeshabilitarMoverDcha(false);
            setDeshabilitarMoverIzq(false);
            setDeshabilitarMoverAbajo(false);
            setDeshabilitarMoverArriba(false);
            setDeshabilitarColorBorde(false);
            setDeshabilitarGrosorBorde(false);
            setDeshabilitarColorRelleno(false)
            setDeshabilitarEscala(false);
        }
        if (event.target.value === "Rayo") {
            setFigura("Rayo"); 
            
            setDeshabilitarMoverDcha(false);
            setDeshabilitarMoverIzq(false);
            setDeshabilitarMoverAbajo(false);
            setDeshabilitarMoverArriba(false);
            setDeshabilitarColorBorde(false);
            setDeshabilitarGrosorBorde(false);
            setDeshabilitarColorRelleno(true)
            setDeshabilitarEscala(false);
        }
        if (event.target.value === "Prenda") {
            setFigura("Prenda"); 
            
            setDeshabilitarMoverDcha(true);
            setDeshabilitarMoverIzq(true);
            setDeshabilitarMoverAbajo(true);
            setDeshabilitarMoverArriba(true);
            setDeshabilitarColorBorde(true);
            setDeshabilitarGrosorBorde(true);
            setDeshabilitarColorRelleno(false)
            setDeshabilitarEscala(true);
        }
        if (event.target.value === "Sin selección") {
            setFigura(""); 
        }

    }

    return (
        <div className='precontainerextra'>
            <p className='instrucciones-tablero'><strong>Haz el diseño que lucirá tu camiseta.</strong><br></br>Selecciona una figura en el menú desplegable y usa los controles para colocarla sobre la camiseta a tu gusto, puedes elegir el tamaño y los colores.<br></br>Tienes tres figuras a tu disposición.</p>
            
            <select title='Selección figura' className="selec-figura" onChange={handleSelectChange}>
                <option>Sin selección</option>
                <option>Polígono</option>
                <option>Rectángulo</option>
                <option>Rayo</option>
                <option>Prenda</option>
            </select>
            <ContainerExtra
                prop1figura={figura} 
                prop1deshabilitar_mover_dcha = {deshabilitar_mover_dcha} 
                prop1deshabilitar_mover_izq = {deshabilitar_mover_izq}
                prop1deshabilitar_mover_abajo = {deshabilitar_mover_abajo}
                prop1deshabilitar_mover_arriba = {deshabilitar_mover_arriba}
                prop1deshabilitar_color_borde = {deshabilitar_color_borde}
                prop1deshabilitar_grosor_borde = {deshabilitar_grosor_borde}
                prop1deshabilitar_color_relleno = {deshabilitar_color_relleno}
                prop1deshabilitar_escala = {deshabilitar_escala}
                />
        </div>
    );
}
export default PreContainerExtra;

// prop1deshabilitar={deshabilitar}
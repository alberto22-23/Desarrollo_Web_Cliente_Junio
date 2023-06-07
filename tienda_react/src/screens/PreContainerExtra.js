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

    const [deshabilitar_pos_rectangulo, setDeshabilitarPosRectangulo] = useState(true);
    const [deshabilitar_pos_poligono, setDeshabilitarPosPoligono] = useState(true);
    const [deshabilitar_pos_rayo, setDeshabilitarPosRayo] = useState(true);

    //--------------------------------------------------------------
    const [opcionSeleccionadaColorBorde, setOpcionSeleccionadaColorBorde] = useState("");
    const [opcionSeleccionadaGrosorBorde, setOpcionSeleccionadaGrosorBorde] = useState("");
    const [opcionSeleccionadaRelleno, setOpcionSeleccionadaRelleno] = useState("");
    const [opcionSeleccionadaEscala, setOpcionSeleccionadaEscala] = useState("");
    const [opcionSeleccionadaPosRect, setOpcionSeleccionadaPosRect] = useState("");
    const [opcionSeleccionadaPosPol, setOpcionSeleccionadaPosPol] = useState("");
    const [opcionSeleccionadaPosRayo, setOpcionSeleccionadaPosRayo] = useState("");


    const CambioValue1 = function () {
        setOpcionSeleccionadaColorBorde("valSeleccionarColBor");
        setOpcionSeleccionadaGrosorBorde("valSeleccionarGroBor");
        setOpcionSeleccionadaRelleno("valSeleccionarRelleno");
        setOpcionSeleccionadaEscala("valSeleccionarEscala");
        setOpcionSeleccionadaPosRect("valSeleccionarRectDel");
        setOpcionSeleccionadaPosPol("valSeleccionarPolDel");
        setOpcionSeleccionadaPosRayo("valSeleccionarRayDel");
    }

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
            //---------
            setDeshabilitarPosRectangulo(true);
            setDeshabilitarPosPoligono(false);
            setDeshabilitarPosRayo(true);
            //--------- cambia la opción seleccionada de los select del componente Tablero
            CambioValue1();
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
            //---------
            setDeshabilitarPosRectangulo(false);
            setDeshabilitarPosPoligono(true);
            setDeshabilitarPosRayo(true);
            //--------- cambia la opción seleccionada de los select del componente Tablero
            CambioValue1();

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
            //---------
            setDeshabilitarPosRectangulo(true);
            setDeshabilitarPosPoligono(true);
            setDeshabilitarPosRayo(false);
            //--------- cambia la opción seleccionada de los select del componente Tablero
            CambioValue1();

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
            //---------
            setDeshabilitarPosRectangulo(true);
            setDeshabilitarPosPoligono(true);
            setDeshabilitarPosRayo(true);
            //--------- cambia la opción seleccionada de los select del componente Tablero
            CambioValue1();
        }


        if (event.target.value === "Sin selección") {
            setFigura("Sin selección");

            setDeshabilitarMoverDcha(true);
            setDeshabilitarMoverIzq(true);
            setDeshabilitarMoverAbajo(true);
            setDeshabilitarMoverArriba(true);
            setDeshabilitarColorBorde(true);
            setDeshabilitarGrosorBorde(true);
            setDeshabilitarColorRelleno(true)
            setDeshabilitarEscala(true);
            //---------
            setDeshabilitarPosRectangulo(true);
            setDeshabilitarPosPoligono(true);
            setDeshabilitarPosRayo(true);
            //--------- cambia la opción seleccionada de los select del componente Tablero
            CambioValue1();
        }

    }

    return (
        <div className='precontainerextra'>
            <p className='instrucciones-tablero'><strong>Haz el diseño que lucirá tu camiseta.</strong><br></br>Selecciona una figura en el menú desplegable y usa los controles para colocarla sobre la camiseta a tu gusto, puedes elegir el tamaño y los colores.<br></br>Tienes tres figuras a tu disposición.</p>

            <select title='Selección figura' className="selec-figura" onChange={handleSelectChange} defaultValue={1}>
                <option>Sin selección</option>
                <option>Rectángulo</option>
                <option>Polígono</option>
                <option>Rayo</option>
                <option>Prenda</option>
            </select>
            <ContainerExtra
                prop1figura={figura}
                prop1deshabilitar_mover_dcha={deshabilitar_mover_dcha}
                prop1deshabilitar_mover_izq={deshabilitar_mover_izq}
                prop1deshabilitar_mover_abajo={deshabilitar_mover_abajo}
                prop1deshabilitar_mover_arriba={deshabilitar_mover_arriba}
                prop1deshabilitar_color_borde={deshabilitar_color_borde}
                prop1deshabilitar_grosor_borde={deshabilitar_grosor_borde}
                prop1deshabilitar_color_relleno={deshabilitar_color_relleno}
                prop1deshabilitar_escala={deshabilitar_escala}

                prop1deshabilitar_pos_rectangulo={deshabilitar_pos_rectangulo}
                prop1deshabilitar_pos_poligono={deshabilitar_pos_poligono}
                prop1deshabilitar_pos_rayo={deshabilitar_pos_rayo}

                prop1opcionSeleccionadaColorBorde ={opcionSeleccionadaColorBorde}
                prop1opcionSeleccionadaGrosorBorde={opcionSeleccionadaGrosorBorde}
                prop1opcionSeleccionadaRelleno={opcionSeleccionadaRelleno}
                prop1opcionSeleccionadaEscala={opcionSeleccionadaEscala}
                prop1opcionSeleccionadaPosRect={opcionSeleccionadaPosRect}
                prop1opcionSeleccionadaPosPol={opcionSeleccionadaPosPol}
                prop1opcionSeleccionadaPosRayo={opcionSeleccionadaPosRayo}
            />
        </div>
    );
}
export default PreContainerExtra;

// prop1deshabilitar={deshabilitar}
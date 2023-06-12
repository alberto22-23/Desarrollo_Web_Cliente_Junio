import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

const Tablero = ({ prop2figura, prop2deshabilitar_mover_dcha, prop2deshabilitar_mover_izq, prop2deshabilitar_mover_abajo, prop2deshabilitar_mover_arriba, prop2deshabilitar_color_borde, prop2deshabilitar_grosor_borde, prop2deshabilitar_color_relleno, prop2deshabilitar_escala, prop2deshabilitar_pos_rectangulo, prop2deshabilitar_pos_poligono, prop2deshabilitar_pos_rayo/*, prop2opcionSeleccionadaColorBorde, prop2opcionSeleccionadaGrosorBorde, prop2opcionSeleccionadaRelleno, prop2opcionSeleccionadaEscala, prop2opcionSeleccionadaPosRect, prop2opcionSeleccionadaPosPol, prop2opcionSeleccionadaPosRayo*/}) => {
    const figura_activa = prop2figura; //Valor de la prop, no es un estado.
    //------------------------------------------------------
    const deshabilitar_mover_dcha = prop2deshabilitar_mover_dcha;
    const deshabilitar_mover_izq = prop2deshabilitar_mover_izq;
    const deshabilitar_mover_abajo = prop2deshabilitar_mover_abajo;
    const deshabilitar_mover_arriba = prop2deshabilitar_mover_arriba;
    const deshabilitar_color_borde = prop2deshabilitar_color_borde;
    const deshabilitar_grosor_borde = prop2deshabilitar_grosor_borde;
    const deshabilitar_color_relleno = prop2deshabilitar_color_relleno;
    const deshabilitar_escala = prop2deshabilitar_escala;
    //------------------------------------------------------ Deshabilitar permutaciones
    const deshabilitar_pos_rectangulo = prop2deshabilitar_pos_rectangulo;
    const deshabilitar_pos_poligono = prop2deshabilitar_pos_poligono;
    const deshabilitar_pos_rayo = prop2deshabilitar_pos_rayo;
    //------------------------------------------------------
    /*const opcionSeleccionadaColorBorde = prop2opcionSeleccionadaColorBorde;
    const opcionSeleccionadaGrosorBorde = prop2opcionSeleccionadaGrosorBorde;
    const opcionSeleccionadaRelleno = prop2opcionSeleccionadaRelleno;
    const opcionSeleccionadaEscala = prop2opcionSeleccionadaEscala;
    const opcionSeleccionadaPosRect = prop2opcionSeleccionadaPosRect;
    const opcionSeleccionadaPosPol = prop2opcionSeleccionadaPosPol;
    const opcionSeleccionadaPosRayo = prop2opcionSeleccionadaPosRayo;*/

    //VARIABLES DE ESTADO
    //------------------------------------------------------ Propiedades para el polígono
    const [color_borde_poligono, setColorStrokePoligono] = useState("black");
    const [grosor_borde_poligono, setGrosorStrokePoligono] = useState(5);
    const [color_relleno_poligono, setColorFillPoligono] = useState("grey");
    const [escala_poligono, setEscalaPoligono] = useState(1);
    const [traslacionX_poligono, setTraslacionXPoligono] = useState(0);
    const [traslacionY_poligono, setTraslacionYPoligono] = useState(0);
    //------------------------------------------------------ Propiedades para el rectángulo
    const [color_borde_rectangulo, setColorStrokeRectangulo] = useState("black");
    const [grosor_borde_rectangulo, setGrosorStrokeRectangulo] = useState(5);
    const [color_relleno_rectangulo, setColorFillRectangulo] = useState("grey");
    const [escala_rectangulo, setEscalaRectangulo] = useState(1);
    const [traslacionX_rectangulo, setTraslacionXRectangulo] = useState(0);
    const [traslacionY_rectangulo, setTraslacionYRectangulo] = useState(0);
    //------------------------------------------------------ Propiedades para el rayo
    const [color_borde_rayo, setColorStrokeRayo] = useState("black");
    const [grosor_borde_rayo, setGrosorStrokeRayo] = useState(5);
    const [color_relleno_rayo, setColorFillRayo] = useState("");
    const [escala_rayo, setEscalaRayo] = useState(1);
    const [traslacionX_rayo, setTraslacionXRayo] = useState(0);
    const [traslacionY_rayo, setTraslacionYRayo] = useState(0);
    //------------------------------------------------------ Propiedad para la prenda (camiseta)
    const [color_relleno_prenda, setColorFillPrenda] = useState("lightgrey");
    //------------------------------------------------------ Propiedad superposión
    const [id_figuraFondo, setFiguraFondo] = useState("");
    const [id_figuraIntermedia, setFiguraIntermedia] = useState("");
    const [id_figuraFrontal, setFiguraFrontal] = useState("");
    //------------------------------------------------------ 
    /*const [opcionSeleccionadaColorBorde, setOpcionSeleccionadaColorBorde] = useState(prop2opcionSeleccionadaColorBorde);
    const [opcionSeleccionadaGrosorBorde, setOpcionSeleccionadaGrosorBorde] = useState(prop2opcionSeleccionadaGrosorBorde);
    const [opcionSeleccionadaRelleno, setOpcionSeleccionadaRelleno] = useState(prop2opcionSeleccionadaRelleno);
    const [opcionSeleccionadaEscala, setOpcionSeleccionadaEscala] = useState(prop2opcionSeleccionadaEscala);
    const [opcionSeleccionadaPosRect, setOpcionSeleccionadaPosRect] = useState(prop2opcionSeleccionadaPosRect);
    const [opcionSeleccionadaPosPol, setOpcionSeleccionadaPosPol] = useState(prop2opcionSeleccionadaPosPol);
    const [opcionSeleccionadaPosRayo, setOpcionSeleccionadaPosRayo] = useState(prop2opcionSeleccionadaPosRayo);*/
    //------------------------------------------------------ Volver a la posición por defecto en los selects al cambiar la figura usando useEffect
    const [opcionSeleccionadaColorBorde, setOpcionSeleccionadaColorBorde] = useState("");
    const [opcionSeleccionadaGrosorBorde, setOpcionSeleccionadaGrosorBorde] = useState("");
    const [opcionSeleccionadaRelleno, setOpcionSeleccionadaRelleno] = useState("");
    const [opcionSeleccionadaEscala, setOpcionSeleccionadaEscala] = useState("");
    const [opcionSeleccionadaPosRect, setOpcionSeleccionadaPosRect] = useState("");
    const [opcionSeleccionadaPosPol, setOpcionSeleccionadaPosPol] = useState("");
    const [opcionSeleccionadaPosRayo, setOpcionSeleccionadaPosRayo] = useState("");
    
    
    /* Puntos solucionados:
    - Cada vez que se seleccione una figura los select de color borde, color relleno, grosor y tamaño deben mostrar la primera <option>
    - limitar los desplazamientos de las figuras al área del svg - ok
    - hacer que el punto de referencia al aumentar el tamaño de la figura sea el centro de la misma - ok
    - permitir la superposición arbitraria de las figuras - ok
    */

    /*La opción que aparece como seleccionada cada select es 'event.target.value' hasta que 'figura_activa' cambia y entoces se activa  
    el useEffect() haciendo que la opción seleccionada sea la por defecto, (la primera), así, al cambiar de figura en los select 
    solo aparece 'Seleccionar:'*/
    useEffect(() => {
        setOpcionSeleccionadaColorBorde("valSeleccionarColBor");
        setOpcionSeleccionadaGrosorBorde("valSeleccionarGroBor");
        setOpcionSeleccionadaRelleno("valSeleccionarRelleno");
        setOpcionSeleccionadaEscala("valSeleccionarEscala");
        setOpcionSeleccionadaPosRect("valSeleccionarRectDel");
        setOpcionSeleccionadaPosPol("valSeleccionarPolDel");
        setOpcionSeleccionadaPosRayo("valSeleccionarRayoDel");
    },[figura_activa]);

    //----------- MANEJADORES DE SELECTORES -------------

    const handleSelectPosPoligono = event => {

        if (event.target.value === "Permutación 3") { //.value se refiere al value="Permutación 3", no al texto de la opción
            setFiguraFondo("rayo");
            setFiguraIntermedia("rectangulo");
            setFiguraFrontal("poligono");
        }
        if (event.target.value === "Permutación 4") {
            setFiguraFondo("rectangulo");
            setFiguraIntermedia("rayo");
            setFiguraFrontal("poligono");
        }
        setOpcionSeleccionadaPosPol(event.target.value);
    }

    const handleSelectPosRectangulo = event => {
        
        if (event.target.value === "Permutación 1") {
            setFiguraFondo("rayo");
            setFiguraIntermedia("poligono");
            setFiguraFrontal("rectangulo");
        }
        if (event.target.value === "Permutación 2") {
            setFiguraFondo("poligono");
            setFiguraIntermedia("rayo");
            setFiguraFrontal("rectangulo");
        }
        setOpcionSeleccionadaPosRect(event.target.value);
    }

    const handleSelectPosRayo = event => {
        //rayo, rectanguo, poligono - rayo, poligono, rectangulo -- rectangulo, rayo, poligono - poligono, rayo, rectangulo -- rectangulo, poligono, rayo - poligono, rectangulo, rayo  
        if (event.target.value === "Permutación 5") {
            setFiguraFondo("rectangulo");
            setFiguraIntermedia("poligono");
            setFiguraFrontal("rayo");
        }
        if (event.target.value === "Permutación 6") {
            setFiguraFondo("poligono");
            setFiguraIntermedia("rectangulo");
            setFiguraFrontal("rayo");
        }
        setOpcionSeleccionadaPosRayo(event.target.value);
    }
    //------------------------------------------------------ Color Borde
    const handleSelectColorBorde = event => {
        if (figura_activa === "Polígono") {
            setColorStrokePoligono(event.target.value); //actualiza 'color_borde_poligono' propiedad css en el 'polygon' del svg
            setOpcionSeleccionadaColorBorde(event.target.value);
        }
        if (figura_activa === "Rectángulo") {
            setColorStrokeRectangulo(event.target.value);
            setOpcionSeleccionadaColorBorde(event.target.value);
        }
        if (figura_activa === "Rayo") {
            setColorStrokeRayo(event.target.value);
            setOpcionSeleccionadaColorBorde(event.target.value);
        }
    }
    //------------------------------------------------------ Grosor Borde
    const handleSelectGrosorBorde = event => {
        if (figura_activa === "Polígono") {
            setGrosorStrokePoligono(event.target.value);
            setOpcionSeleccionadaGrosorBorde(event.target.value);
        }
        if (figura_activa === "Rectángulo") {
            setGrosorStrokeRectangulo(event.target.value);
            setOpcionSeleccionadaGrosorBorde(event.target.value);
        }
        if (figura_activa === "Rayo") {
            setGrosorStrokeRayo(event.target.value);
            setOpcionSeleccionadaGrosorBorde(event.target.value);
        }
    }
    //------------------------------------------------------ Color Relleno
    const handleSelectColorRelleno = event => {
        if (figura_activa === "Polígono") {
            setColorFillPoligono(event.target.value);
            setOpcionSeleccionadaRelleno(event.target.value);
        }
        if (figura_activa === "Rectángulo") {
            setColorFillRectangulo(event.target.value);
            setOpcionSeleccionadaRelleno(event.target.value);
        }
        if (figura_activa === "Rayo") {
            setColorFillRayo(event.target.value);
            setOpcionSeleccionadaRelleno(event.target.value);
        }
        if (figura_activa === "Prenda") {
            setColorFillPrenda(event.target.value);
            setOpcionSeleccionadaRelleno(event.target.value);
        }
    }
    //------------------------------------------------------ Escala 
    const handleSelectEscala = event => {
        if (figura_activa === "Polígono") {
            setEscalaPoligono(event.target.value);
            setOpcionSeleccionadaEscala(event.target.value);
        }
        if (figura_activa === "Rectángulo") {
            setEscalaRectangulo(event.target.value);
            setOpcionSeleccionadaEscala(event.target.value);
        }
        if (figura_activa === "Rayo") {
            setEscalaRayo(event.target.value);
            setOpcionSeleccionadaEscala(event.target.value);
        }
    }
    //------------------------------------------------------ Traslación +X (mover derecha)
    const handleClickTraslacionMasX = event => {
        if (figura_activa === "Polígono") {
            if (traslacionX_poligono >= 620) {
                setTraslacionXPoligono(traslacionX_poligono);
            }
            else {
                setTraslacionXPoligono(traslacionX_poligono + 20);
            }
        }

        if (figura_activa === "Rectángulo") {
            if (traslacionX_rectangulo >= 620) {
                setTraslacionXRectangulo(traslacionX_rectangulo);
            }
            else {
                setTraslacionXRectangulo(traslacionX_rectangulo + 20);
            }
        }

        if (figura_activa === "Rayo") {
            if (traslacionX_rayo >= 620) {
                setTraslacionXRayo(traslacionX_rayo);
            }
            else {
                setTraslacionXRayo(traslacionX_rayo + 20);
            }
        }
    }
    //------------------------------------------------------ Traslación -X (mover izquierda)
    const handleClickTraslacionMenosX = event => {
        if (figura_activa === "Polígono") {
            if (traslacionX_poligono <= -20) {
                setTraslacionXPoligono(traslacionX_poligono);
            }
            else {
                setTraslacionXPoligono(traslacionX_poligono - 20);
            }
        }

        if (figura_activa === "Rectángulo") {
            if (traslacionX_rectangulo <= -20) {
                setTraslacionXRectangulo(traslacionX_rectangulo);
            }
            else {
                setTraslacionXRectangulo(traslacionX_rectangulo - 20);
            }
        }

        if (figura_activa === "Rayo") {
            if (traslacionX_rayo <= -20) {
                setTraslacionXRayo(traslacionX_rayo);
            }
            else {
                setTraslacionXRayo(traslacionX_rayo - 20);
            }
        }
    }
    //------------------------------------------------------ Traslación +Y (mover abajo)
    const handleClickTraslacionMasY = event => {
        if (figura_activa === "Polígono") {
            if (traslacionY_poligono >= 220) {
                setTraslacionYPoligono(traslacionY_poligono);
            }
            else {
                setTraslacionYPoligono(traslacionY_poligono + 20);
            }
        }

        if (figura_activa === "Rectángulo") {
            if (traslacionY_rectangulo >= 420) {
                setTraslacionYRectangulo(traslacionY_rectangulo);
            }
            else {
                setTraslacionYRectangulo(traslacionY_rectangulo + 20);
            }
        }

        if (figura_activa === "Rayo") {
            if (traslacionY_rayo >= 40) {
                setTraslacionYRectangulo(traslacionY_rectangulo);
            }
            else {
                setTraslacionYRayo(traslacionY_rayo + 20);
            }
        }
    }
    //------------------------------------------------------ Traslación -Y (mover arriba)
    const handleClickTraslacionMenosY = event => {
        if (figura_activa === "Polígono") {
            if (traslacionY_poligono <= -240) {
                setTraslacionYPoligono(traslacionY_poligono);
            }
            else {
                setTraslacionYPoligono(traslacionY_poligono - 20);
            }
        }
        if (figura_activa === "Rectángulo") {
            if (traslacionY_rectangulo <= -20) {
                setTraslacionYRectangulo(traslacionY_rectangulo);
            }
            else {
                setTraslacionYRectangulo(traslacionY_rectangulo - 20);
            }
        }
        if (figura_activa === "Rayo") {
            if (traslacionY_rayo <= -440) {
                setTraslacionYRectangulo(traslacionY_rectangulo);
            }
            else {
                setTraslacionYRayo(traslacionY_rayo - 20);
            }
        }
    }

    return (
        <div className='tablero'>
            <div className='div-asc-desc div-asc-desc-rojo'>Figura activa: <strong>{figura_activa}</strong></div>
            <div className='div-selectores-tablero'>
                <button onClick={handleClickTraslacionMasX} className='boton-tablero' disabled={deshabilitar_mover_dcha}>Mover derecha</button>
                <button onClick={handleClickTraslacionMenosX} className='boton-tablero' disabled={deshabilitar_mover_izq}>Mover izquierda</button>
                <button onClick={handleClickTraslacionMasY} className='boton-tablero' disabled={deshabilitar_mover_abajo}>Mover abajo</button>
                <button onClick={handleClickTraslacionMenosY} className='boton-tablero' disabled={deshabilitar_mover_arriba}>Mover arriba</button>
            </div>
            <div className='div-selectores-tablero'>
                <label>
                    Color de borde:
                    <select title='Selección' className="selec-color-borde" onChange={handleSelectColorBorde} disabled={deshabilitar_color_borde} value={opcionSeleccionadaColorBorde}>
                        <option value="valSeleccionarColBor">Seleccionar:</option>
                        <option value="Red">Red</option>
                        <option value="Khaki">Khaki</option>
                        <option value="DarkTurquoise"> DarkTurquoise</option>
                        <option value="SpringGreen">SpringGreen</option>
                        <option value="Crimson">Crimson</option>
                        <option value="SeaGreen">SeaGreen</option>
                        <option value="SteelBlue">SteelBlue</option>
                        <option value="DarkKhaki">DarkKhaki</option>
                        <option value="Purple">Purple</option>
                        <option value="DarkSlateGray">DarkSlateGray</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Sienna">Sienna</option>
                    </select>
                </label>
                <label>
                    Grosor de borde:
                    <select title='Selección' className="selec-grosor-borde" onChange={handleSelectGrosorBorde} disabled={deshabilitar_grosor_borde} value={opcionSeleccionadaGrosorBorde}>
                        <option value="valSeleccionarGroBor">Seleccionar:</option>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </label>
                <label>
                    Color de relleno:
                    <select title='Selección' className="selec-color-relleno" onChange={handleSelectColorRelleno} disabled={deshabilitar_color_relleno} value={opcionSeleccionadaRelleno}>
                        <option value="valSeleccionarRelleno">Seleccionar:</option>
                        <option value="Red">Red</option>
                        <option value="Khaki">Khaki</option>
                        <option value="DarkTurquoise">DarkTurquoise</option>
                        <option>SpringGreen</option>
                        <option>Crimson</option>
                        <option>SeaGreen</option>
                        <option>SteelBlue</option>
                        <option>DarkKhaki</option>
                        <option>Purple</option>
                        <option>DarkSlateGray</option>
                        <option>Chocolate</option>
                        <option>Sienna</option>
                    </select>
                </label>
                <label>
                    Tamaño:
                    <select title='Selección' className="selec-escala" onChange={handleSelectEscala} disabled={deshabilitar_escala} value={opcionSeleccionadaEscala}>
                        <option value="valSeleccionarEscala">Seleccionar:</option>
                        <option value={0.5}>0.5</option>
                        <option value={0.75}>0.75</option>
                        <option value={1}>1</option>
                        <option value={1.25}>1.25</option>
                    </select>
                </label>
            </div>
            <div className='div-selectores-tablero'>
                <label>
                    Rect. delante:
                    <select title='Selección' className="selec-color-borde" onChange={handleSelectPosRectangulo} disabled={deshabilitar_pos_rectangulo} value={opcionSeleccionadaPosRect} >
                        <option value="valSeleccionarRectDel">Seleccionar:</option>
                        <option value="Permutación 1">Rect-Pol-Rayo</option>
                        <option value="Permutación 2">Rect-Rayo-Pol</option>
                    </select>
                </label>
                <label>
                    Políg. delante:
                    <select title='Selección' className="selec-color-borde" onChange={handleSelectPosPoligono} disabled={deshabilitar_pos_poligono} value={opcionSeleccionadaPosPol} >
                        <option value="valSeleccionarPolDel">Seleccionar:</option>
                        <option value="Permutación 3">Pol-Rect-Rayo</option>
                        <option value="Permutación 4">Pol-Rayo-Rect</option>
                    </select>
                </label>
                <label>
                    Rayo delante:
                    <select title='Selección' className="selec-color-borde" onChange={handleSelectPosRayo} disabled={deshabilitar_pos_rayo} value={opcionSeleccionadaPosRayo} >
                        <option value="valSeleccionarRayDel">Seleccionar:</option>
                        <option value="Permutación 5">Rayo-Pol-Rect</option>
                        <option value="Permutación 6">Rayo-Rect-Pol</option>
                    </select>
                </label>
            </div>
            {/*-------------------- SVG 800px x 600px (base x altura) --------------------*/}
            <svg className='svg-global'
                width="800px"
                height="600px"

                style={{
                    background: "FloralWhite"
                }}>

                <line className='cajetin'
                    x1="200"
                    y1="0"
                    x2="200"
                    y2="600"
                    stroke='black'
                    strokeWidth="1"
                />
                <line className='cajetin'
                    x1="0"
                    y1="200"
                    x2="200"
                    y2="200"
                    stroke='black'
                    strokeWidth={1}
                />
                <line className='cajetin'
                    x1="0"
                    y1="400"
                    x2="200"
                    y2="400"
                    stroke='black'
                    strokeWidth="1"
                /> {/*vale strokeWidth="1" ó strokeWidth={1}*/}

                <polygon className='prenda'
                    points="500,80 
                        530,80 
                        570,60 
                        650,70 
                        760,140
                        720,220
                        640,190
                        630,370
                        640,530
                        500,540
                        360,530
                        370,370
                        360,190
                        280,220
                        240,140
                        350,70
                        430,60
                        470,80
                        500,80"
                    style={{
                        fill: color_relleno_prenda,
                        stroke: 'black',
                        strokeWidth: 1
                    }} />

                <rect className='rectangulo' id='rectangulo'
                    x="40"
                    y="40"
                    width="120" height="120"
                    style={{
                        fill: color_relleno_rectangulo,
                        stroke: color_borde_rectangulo,
                        strokeWidth: grosor_borde_rectangulo,
                        transform: `translate(${traslacionX_rectangulo}px, ${traslacionY_rectangulo}px) scale(${escala_rectangulo})`,
                        transformOrigin: `${12.5}% ${16.458}%`
                    }} />
                {/*para transformOrigin se pone el centro de la posición original de la figura, calculada en el dibujo cad*/}
                {/*polygon:sup-centro(x,y),sup-decha(x,y),inf-dcha(x,y),inf-centro(x,y),inf-izq(x,y),sup-izq(x,y)*/}
                <polygon className='poligono' id='poligono'
                    points="100,240 
                        170,360
                        30,360"
                    style={{
                        fill: color_relleno_poligono,
                        stroke: color_borde_poligono,
                        strokeWidth: grosor_borde_poligono,
                        transform: `translate(${traslacionX_poligono}px, ${traslacionY_poligono}px) scale(${escala_poligono})`,
                        transformOrigin: `${12.5}% ${53.195}%`
                    }} />
                <polyline className='rayo' id='rayo'
                    points="20,550 
                        100,470
                        100,530
                        180,440"
                    style={{
                        stroke: color_relleno_rayo,
                        stroke: color_borde_rayo,
                        strokeWidth: grosor_borde_rayo,
                        fill: "none",
                        transform: `translate(${traslacionX_rayo}px, ${traslacionY_rayo}px) scale(${escala_rayo})`,
                        transformOrigin: `${12.5}% ${83.33}%`
                    }} />
                <use xlinkHref={`#${id_figuraFondo}`} />
                <use xlinkHref={`#${id_figuraIntermedia}`} />
                <use xlinkHref={`#${id_figuraFrontal}`} />
            </svg>
        </div>
    )

}

export default Tablero;
//polygon points="60,20 100,40 100,80 60,100 20,80 20,40" hexágono
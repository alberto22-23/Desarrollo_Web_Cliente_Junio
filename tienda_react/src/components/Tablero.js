import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

const Tablero = ({ prop2figura, prop2deshabilitar_mover_dcha, prop2deshabilitar_mover_izq, prop2deshabilitar_mover_abajo, prop2deshabilitar_mover_arriba, prop2deshabilitar_color_borde, prop2deshabilitar_grosor_borde, prop2deshabilitar_color_relleno, prop2deshabilitar_escala, prop2deshabilitar_pos_rectangulo, prop2deshabilitar_pos_poligono, prop2deshabilitar_pos_rayo }) => {

    const figura_activa = prop2figura; //Valor de la prop, no es un estado.

    const deshabilitar_mover_dcha = prop2deshabilitar_mover_dcha;
    const deshabilitar_mover_izq = prop2deshabilitar_mover_izq;
    const deshabilitar_mover_abajo = prop2deshabilitar_mover_abajo;
    const deshabilitar_mover_arriba = prop2deshabilitar_mover_arriba;
    const deshabilitar_color_borde = prop2deshabilitar_color_borde;
    const deshabilitar_grosor_borde = prop2deshabilitar_grosor_borde;
    const deshabilitar_color_relleno = prop2deshabilitar_color_relleno;
    const deshabilitar_escala = prop2deshabilitar_escala;

    const deshabilitar_pos_rectangulo = prop2deshabilitar_pos_rectangulo;
    const deshabilitar_pos_poligono = prop2deshabilitar_pos_poligono;
    const deshabilitar_pos_rayo = prop2deshabilitar_pos_rayo;

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
    /*const [deshabilitar_rectangulo, setDeshabilitarRectangulo] = useState(false);
    const [deshabilitar_poligono, setDeshabilitarPoligono] = useState(false);
    const [deshabilitar_rayo, setDeshabilitarRayo] = useState(false);*/

    /* Puntos a corregir:
    - Cada vez que se seleccione una figura los select de color borde, color relleno, grosor y tamaño deben mostrar la primera <option>
    - limitar los desplazamientos de las figuras al área del svg
    - hacer que el punto de referencia al aumentar el tamaño de la figura sea el centro de la misma
    - permitir la superposición arbitraria de las figuras
    */

    /*const handleSelectPosRectangulo = event => {
        if (event.target.value === "Fondo") {
            setFiguraFondo("rectangulo");
            console.log(id_figuraFondo);
        }
        if (event.target.value === "Intermedia") {
            setFiguraIntermedia("rectangulo");
        }
        if (event.target.value === "Frontal") {
            setFiguraFrontal("rectangulo");
        }
    }*/

    /*const handleSelectPosPoligono = event => {
        if (event.target.value === "Fondo" & id_figuraFondo !== "rectangulo") {
            setFiguraFondo("poligono");
        }*/

    /*if (event.target.value === "Fondo" & id_figuraFondo === "rectangulo") {
        alert("El rectángulo ya ocupa la posición 'Fondo'");
    }*/

    /*if (event.target.value === "Intermedia" & id_figuraIntermedia !== "rectangulo") {
        setFiguraIntermedia("poligono");
    }*/

    /*if (event.target.value === "Intermedia" & id_figuraIntermedia === "rectangulo") {
        alert("El rectángulo ya ocupa la posición 'Intermedia'");
    }*/

    /*if (event.target.value === "Frontal" & id_figuraFrontal !== "rectangulo") {
        setFiguraFrontal("poligono");
    }*/

    /*if (event.target.value === "Frontal" & id_figuraFrontal === "rectangulo") {
        alert("El rectángulo ya ocupa la posición 'Frontal'");
    }
}*/

    /*const handleSelectPosRayo = event => {
        if (event.target.value === "Fondo" & id_figuraFondo !== "rectangulo" & id_figuraFondo !== "poligono") {
            setFiguraFondo("rayo");
        }

        if (event.target.value === "Fondo" & id_figuraFondo === "rectangulo" || id_figuraFondo === "poligono") {
            alert("El rectángulo o el polígono ya ocupa la posición 'Frontal'");
        }

        if (event.target.value === "Intermedia" & id_figuraIntermedia !== "rectangulo" & id_figuraIntermedia !== "poligono") {
            setFiguraIntermedia("rayo");
        }
        if (event.target.value === "Intermedia" & id_figuraIntermedia === "rectangulo" || id_figuraIntermedia === "poligono") {
            alert("El rectángulo o el polígono ya ocupa la posición 'Intermedia'");
        }

        if (event.target.value === "Frontal" & id_figuraFrontal !== "rectangulo" & id_figuraFrontal !== "poligono") {
            setFiguraFrontal("rayo");
        }
        if (event.target.value === "Frontal" & id_figuraFrontal === "rectangulo" || id_figuraFrontal === "poligono") {
            alert("El rectángulo o el polígono ya ocupa la posición 'Frontal'");
        }
    }*/

    const handleSelectPosPoligono = event => {

        if (event.target.value === "Fondo") {
            setFiguraFondo("poligono");  // Combinación repetida C
            setFiguraIntermedia("rectangulo");
            setFiguraFrontal("rayo");
        }
        if (event.target.value === "Intermedia") {
            setFiguraFondo("rectangulo");  // Combinación repetida B
            setFiguraIntermedia("poligono");
            setFiguraFrontal("rayo");
        }
        if (event.target.value === "Frontal") {
            setFiguraFondo("rectangulo"); // Combinación repetida A
            setFiguraIntermedia("rayo");
            setFiguraFrontal("poligono");
        }

    }

    const handleSelectPosRectangulo = event => {

        if (event.target.value === "Fondo") {
            setFiguraFondo("rectangulo");
            setFiguraIntermedia("poligono");
            setFiguraFrontal("rayo");
        }
        if (event.target.value === "Intermedia") {
            setFiguraFondo("poligono");  // Combinación repetida C
            setFiguraIntermedia("rectangulo");
            setFiguraFrontal("rayo");
        }
        if (event.target.value === "Frontal") {
            setFiguraFondo("poligono");
            setFiguraIntermedia("rayo");
            setFiguraFrontal("rectangulo");
        }

    }

    const handleSelectPosRayo = event => {
        //rayo, rectanguo, poligono - rayo, poligono, rectangulo -- rectangulo, rayo, poligono - poligono, rayo, rectangulo -- rectangulo, poligono, rayo - poligono, rectangulo, rayo  
        if (event.target.value === "Fondo") {
            setFiguraFondo("rayo");
            setFiguraIntermedia("rectangulo");
            setFiguraFrontal("poligono");
        }
        if (event.target.value === "Intermedia") {
            setFiguraFondo("rectangulo");  // Combinación repetida A
            setFiguraIntermedia("rayo");
            setFiguraFrontal("poligono");
        }
        if (event.target.value === "Frontal") {
            setFiguraFondo("rectangulo");  // Combinación repetida B
            setFiguraIntermedia("poligono");
            setFiguraFrontal("rayo");
        }


    }

    //------------------------------------------------------ Color Borde
    const handleSelectColorBorde = event => {
        if (figura_activa === "Polígono") {
            setColorStrokePoligono(event.target.value);
        }
        if (figura_activa === "Rectángulo") {
            setColorStrokeRectangulo(event.target.value);
        }
        if (figura_activa === "Rayo") {
            setColorStrokeRayo(event.target.value);
        }
    }
    //------------------------------------------------------ Grosor Borde
    const handleSelectGrosorBorde = event => {
        if (figura_activa === "Polígono") {
            setGrosorStrokePoligono(event.target.value);
        }
        if (figura_activa === "Rectángulo") {
            setGrosorStrokeRectangulo(event.target.value);
        }
        if (figura_activa === "Rayo") {
            setGrosorStrokeRayo(event.target.value);
        }
    }

    //------------------------------------------------------ Color Relleno
    const handleSelectColorRelleno = event => {
        if (figura_activa === "Polígono") {
            setColorFillPoligono(event.target.value);
        }
        if (figura_activa === "Rectángulo") {
            setColorFillRectangulo(event.target.value);
        }
        if (figura_activa === "Rayo") {
            setColorFillRayo(event.target.value);
        }
        if (figura_activa === "Prenda") {
            setColorFillPrenda(event.target.value);
        }
    }
    //------------------------------------------------------ Escala
    const handleSelectEscala = event => {
        if (figura_activa === "Polígono") {
            setEscalaPoligono(event.target.value);
        }
        if (figura_activa === "Rectángulo") {
            setEscalaRectangulo(event.target.value);
        }
        if (figura_activa === "Rayo") {
            setEscalaRayo(event.target.value);
        }
    }
    //------------------------------------------------------ Traslación +X
    const handleClickTraslacionMasX = event => {
        if (figura_activa === "Polígono") {
            setTraslacionXPoligono(traslacionX_poligono + 20);
        }
        if (figura_activa === "Rectángulo") {
            setTraslacionXRectangulo(traslacionX_rectangulo + 20);
        }
        if (figura_activa === "Rayo") {
            setTraslacionXRayo(traslacionX_rayo + 20);
        }
    }
    //------------------------------------------------------ Traslación -X
    const handleClickTraslacionMenosX = event => {
        if (figura_activa === "Polígono") {
            setTraslacionXPoligono(traslacionX_poligono - 20);
        }
        if (figura_activa === "Rectángulo") {
            setTraslacionXRectangulo(traslacionX_rectangulo - 20);
        }
        if (figura_activa === "Rayo") {
            setTraslacionXRayo(traslacionX_rayo - 20);
        }
    }
    //------------------------------------------------------ Traslación +Y
    const handleClickTraslacionMasY = event => {
        if (figura_activa === "Polígono") {
            setTraslacionYPoligono(traslacionY_poligono + 20);
        }
        if (figura_activa === "Rectángulo") {
            setTraslacionYRectangulo(traslacionY_rectangulo + 20);
        }
        if (figura_activa === "Rayo") {
            setTraslacionYRayo(traslacionY_rayo + 20);
        }
    }
    //------------------------------------------------------ Traslación -Y
    const handleClickTraslacionMenosY = event => {
        if (figura_activa === "Polígono") {
            setTraslacionYPoligono(traslacionY_poligono - 20);
        }
        if (figura_activa === "Rectángulo") {
            setTraslacionYRectangulo(traslacionY_rectangulo - 20);
        }
        if (figura_activa === "Rayo") {
            setTraslacionYRayo(traslacionY_rayo - 20);
        }
    }

    return (
        <div className='tablero'>
            <div className='div-asc-desc'>Figura activa : {figura_activa}</div>
            <div className='div-selectores-tablero'>
                <button onClick={handleClickTraslacionMasX} className='boton-tablero' disabled={deshabilitar_mover_dcha}>Mover derecha</button>
                <button onClick={handleClickTraslacionMenosX} className='boton-tablero' disabled={deshabilitar_mover_izq}>Mover izquierda</button>
                <button onClick={handleClickTraslacionMasY} className='boton-tablero' disabled={deshabilitar_mover_abajo}>Mover abajo</button>
                <button onClick={handleClickTraslacionMenosY} className='boton-tablero' disabled={deshabilitar_mover_arriba}>Mover arriba</button>
            </div>
            <div className='div-selectores-tablero'>
                <label>
                    Color de borde:
                    <select title='Selección' className="selec-color-borde" onChange={handleSelectColorBorde} disabled={deshabilitar_color_borde}>
                        <option>Seleccionar:</option>
                        <option>red</option>
                        <option>Khaki</option>
                        <option>DarkTurquoise</option>
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
                    Grosor de borde:
                    <select title='Selección' className="selec-grosor-borde" onChange={handleSelectGrosorBorde} disabled={deshabilitar_grosor_borde}>
                        <option>Seleccionar:</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>4</option>
                        <option>6</option>
                        <option>8</option>
                        <option>10</option>
                        <option>12</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </label>
                <label>
                    Color de relleno:
                    <select title='Selección' className="selec-color-relleno" onChange={handleSelectColorRelleno} disabled={deshabilitar_color_relleno}>
                        <option>Seleccionar:</option>
                        <option>red</option>
                        <option>Khaki</option>
                        <option>DarkTurquoise</option>
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
                    <select title='Selección' className="selec-escala" onChange={handleSelectEscala} disabled={deshabilitar_escala}>
                        <option>Seleccionar:</option>
                        <option>0.5</option>
                        <option>0.75</option>
                        <option>1</option>
                        <option>1.25</option>
                        <option>1.5</option>
                    </select>
                </label>
            </div>
            <div className='div-selectores-tablero'>
                <label>
                    Posición rectágulo:
                    <select title='Selección' className="selec-color-borde" onChange={handleSelectPosRectangulo} disabled={deshabilitar_pos_rectangulo} >
                        <option>Seleccionar:</option>
                        <option>Fondo</option>
                        <option>Intermedia</option>
                        <option>Frontal</option>
                    </select>
                </label>
                <label>
                    Posición polígono:
                    <select title='Selección' className="selec-color-borde" onChange={handleSelectPosPoligono} disabled={deshabilitar_pos_poligono} >
                        <option>Seleccionar:</option>
                        <option>Fondo</option>
                        <option>Intermedia</option>
                        <option>Frontal</option>
                    </select>
                </label>
                <label>
                    Posición rayo:
                    <select title='Selección' className="selec-color-borde" onChange={handleSelectPosRayo} disabled={deshabilitar_pos_rayo} >
                        <option>Seleccionar:</option>
                        <option>Fondo</option>
                        <option>Intermedia</option>
                        <option>Frontal</option>
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
                    }} />
                {/*polygon:sup-centro(x,y),sup-decha(x,y),inf-dcha(x,y),inf-centro(x,y),inf-izq(x,y),sup-izq(x,y)*/}
                <polygon className='poligono' id='poligono'
                    points="100,240 
                        170,360
                        30,360"
                    style={{
                        fill: color_relleno_poligono,
                        stroke: color_borde_poligono,
                        strokeWidth: grosor_borde_poligono,
                        transform: `translate(${traslacionX_poligono}px, ${traslacionY_poligono}px) scale(${escala_poligono})`
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
                        transform: `translate(${traslacionX_rayo}px, ${traslacionY_rayo}px) scale(${escala_rayo})`
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
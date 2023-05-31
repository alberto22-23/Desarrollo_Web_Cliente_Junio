import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

const ContainerExtra = (props) => {

    //VARIABLE DE ESTADO
    const [color_relleno_poligono, setColorFillPoligono] = useState("blue");
    const [escala_poligono, setEscalaPoligono] = useState(1);
    const [posicion_poligono, setPosicionPoligono] = useState(0);

    

    const handleClickColor = event => {
        if (color_relleno_poligono === "blue") {
            setColorFillPoligono("green");
        }
        else {
            setColorFillPoligono("blue");
        }
    }

    const handleClickEscala = event => {
        if (escala_poligono === 1) {
            setEscalaPoligono(2);
        }
        else {
            setEscalaPoligono(1);
        }
    }

    /*const handleClickPosicion = event => {
        if (posicion_poligono === 0) {
            setPosicionPoligono(80);
        }
        else {
            setPosicionPoligono(0);
        }
    }*/


    return (
        <div className="containersvg">

            <div className='tablero-svg'>
                <div className='div-botones-tablero'>
                    <button onClick={handleClickColor} className='boton-tablero'>Cambia color relleno</button>
                    <button onClick={handleClickEscala} className='boton-tablero'>Cambia escala x2</button>
                    <button  className='boton-tablero'>Mover</button> 
                </div>

                <svg
                    height="150mm"
                    width="250mm"
                    style={{
                        background: "white"
                    }}>
                    {/*<polyline
                        points="0,0 150,120 100,220 200,170"
                        style={{
                            fill: "none",
                            stroke: "black",
                            strokeWidth: "2mm"
                        }} />
                    <rect
                        x="50"
                        y="20"
                        width="90" height="90"
                        style={{
                            fill: "blue",
                            stroke: "red",
                            strokeWidth: "2mm"
                        }} />*/}
                    {/*polygon:sup-centro(x,y),sup-decha(x,y),inf-dcha(x,y),inf-centro(x,y),inf-izq(x,y),sup-izq(x,y)*/}
                    <polygon
                        points="90,50 
                        130,70 
                        130,110 
                        90,130 
                        50,110 
                        50,70"
                        style={{
                            fill: color_relleno_poligono,
                            transform: `scale(${escala_poligono})`,
                            //transform: translate(200, 0) ,
                            stroke: "green",
                            strokeWidth: "1mm"
                        }} />
                </svg>
            </div>
        </div>
    )

}

export default ContainerExtra;
//polygon points="60,20 100,40 100,80 60,100 20,80 20,40" hexágono
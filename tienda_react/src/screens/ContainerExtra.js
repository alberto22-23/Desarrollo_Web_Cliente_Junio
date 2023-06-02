import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Tablero from '../components/Tablero';

const ContainerExtra = ({prop1figura, prop1deshabilitar_mover_dcha, prop1deshabilitar_mover_izq, prop1deshabilitar_mover_abajo, prop1deshabilitar_mover_arriba, prop1deshabilitar_color_borde, prop1deshabilitar_grosor_borde, prop1deshabilitar_color_relleno, prop1deshabilitar_escala}) => {

    

    return (
        <div className="containerextra">
            
            <Tablero prop2figura = {prop1figura}
            prop2deshabilitar_mover_dcha = {prop1deshabilitar_mover_dcha} 
            prop2deshabilitar_mover_izq = {prop1deshabilitar_mover_izq}
            prop2deshabilitar_mover_abajo = {prop1deshabilitar_mover_abajo}
            prop2deshabilitar_mover_arriba = {prop1deshabilitar_mover_arriba}
            prop2deshabilitar_color_borde = {prop1deshabilitar_color_borde}
            prop2deshabilitar_grosor_borde = {prop1deshabilitar_grosor_borde}
            prop2deshabilitar_color_relleno = {prop1deshabilitar_color_relleno}
            prop2deshabilitar_escala = {prop1deshabilitar_escala} 
            />
            
        </div>
    )

}

export default ContainerExtra;
//polygon points="60,20 100,40 100,80 60,100 20,80 20,40" hexágono
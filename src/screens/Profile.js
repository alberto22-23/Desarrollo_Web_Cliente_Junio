import axios from "axios";
import { useEffect } from "react";

//ok
const Profile = (props) => {

    //ESTADOS
    const pedirDatos = async () => {
        const respuesta = await axios.get("https://fakestoreapi.com/products");
        //promesa.then((respuesta) => {
        console.log("Se ha recibido la respuesta01");
        console.log(respuesta.data);
        //alert("Alerta" + respuesta.data[0].title);
        console.log("Naranja");
        console.log(pedirDatos);
        //})
    }

    pedirDatos();


    //EFECTOS
    useEffect(() => {
        let i = 0;
        i = i + 1;

        console.log(i);
        console.log("manzana");

        const promesa = axios.get("https://fakestoreapi.com/products");
        promesa.then((respuesta) => {
            console.log("Se ha recibido la respuesta02");
            console.log(respuesta.data);
            //alert("Alerta" + respuesta.data[0].title);
            console.log("Naranja");

        })
        console.log("kiwi");

        /*return <div>
            <h1>Profile</h1>
        </div>*/

    }) //HOOK DE EFECTO

    //RENDER
    return <div>
        <h1>Profile - /profile - (Profile.js)</h1>
    </div>
}

export default Profile;

//mandamos petición asíncrona desde aquí
    /*let i = 0;
    i = i + 1;

    console.log(i);
    console.log("manzana");

    const promesa = axios.get("https://fakestoreapi.com/products");
    promesa.then((respuesta) => {
        console.log("Se ha recibido la repuesta");
        console.log(respuesta.data);
        //alert("Alerta" + respuesta.data[0].title);
        console.log("Naranja"); //este es el último console.log que se ejecuta

    })
    console.log("kiwi");*/
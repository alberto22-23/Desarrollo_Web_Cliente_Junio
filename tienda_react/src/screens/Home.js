//ok
//Estilos
import "../styles/estilos.css";
import logotienda from "../components/logo-tienda.jpg"

const Home = (props) => {
    return <div className="presentacion">
        <img src={logotienda} alt="logo" title="Inicio Tienda React" className="imagen-logo" />
        <h2>Descripción del código de la aplicación.</h2>
        <p>
            El componente <strong>PageWithOutlet.js</strong> contiene a los componentes:<br></br>
            - Header<br></br>
            - Outlet<br></br>
            - Footer<br></br>
            <br></br>
            <strong>App.js</strong> contiene las diferentes rutas (Routes) de la aplicación en el servidor de React, todas muestran
            al componente PageWithOutlet.<br></br>
            Lo que varía de una ruta a otra es el componente Outlet cuya posición está ocupada por un determinado componente Route.<br></br>
            Cada Route tiene las propiedades path y element, este último es un componente Container (el cuerpo de la página) asignado a dicho path.<br></br>
            <br></br>
            <strong>Header.js</strong> es el Encabezado de las páginas de la aplicación y contiene los links a las principales rutas (Routes en App.js):<br></br>
            Productos, Categorías e Inicio.<br></br>
            <br></br>
            <strong>Características de los componentes Container:</strong><br></br>
            &gt; Solo se importan en App.js pues son los componentes a los que apuntan las Routes respectivas.<br></br>
            &gt; En cada uno de ellos:<br></br> 
            1) Se declara una variable de estado <strong><i>const [variableEst, setVariableEst] = useState(variableEstIni)</i></strong>;<br></br> 
            2) Dentro de una función <strong><i>useEffect()</i></strong>:<br></br>
            2.1) traen datos de la API con <strong><i>axios.get("https://fakestoreapi.com/...")</i></strong>.<br></br>
            2.2) dentro de una función Promesa se establece el valor de la variable de estado asignándole los datos que devuelve la API con <strong><i>setVariableEst()</i></strong><br></br>
            3) Con <strong><i>return</i></strong> devuelven un elemento &lt;div&gt; que sería el cuerpo de la página conteniendo los componentes hijo &lt;Card&gt; (a excepción de &lt;ContainerProductDetail&gt;
            que devuelve un elemento &lt;div&gt; simple) que visibilizan la información obtenida desde la API aplicado la función .map() sobre la variable de estado <strong><i>variableEst.map()</i></strong>. En esta aplicación la variable de estado suele ser un array de objetos, por lo tanto .map() pasa mediante <strong><i>props</i></strong> cada objeto
            del array a un componente &lt;Card&gt; que muestra los datos en la interfaz de usuario.<br></br>
            <br></br>
            <strong>Características de los componentes Card:</strong><br></br>
            Los componentes Card visibilizan en la interfaz de usuario la información obtenida desde la API<br></br>
            1) El componente &lt;CardProduct&gt; está enlazado mediante &lt;Link&gt; con el componente &lt;ContainerProductDetail&gt;<br></br>
            2) El componente &lt;CardCateg&gt; está enlazado mediante &lt;Link&gt; con &lt;ContainerCategProds&gt; que trae desde la API los productos de una determinada categoría y contiene a &lt;CardProduct&gt; (1)
        </p>
    </div>
}

export default Home;
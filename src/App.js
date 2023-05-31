//ok
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWithOutlet from './screens/PageWithOutlet';
import Profile from './screens/Profile';
import Home from './screens/Home';
import ContainerCategs from './screens/ContainerCategs';
import ContainerCategProds from './screens/ContainerCategProds';
import ContainerProducts from './screens/ContainerProducts';
import ContainerProductDetails from './screens/ContainerProductDetails';
import PreContainerUsers from './screens/PreContainerUsers';
import ContainerExtra from './screens/ContainerExtra';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageWithOutlet />}> {/*De esta forma aparece el footer y el header en todas las páginas*/}
            <Route index element={<Home />}></Route>                                                  {/*ocupa el <Outlet />*/}
            <Route path="/categorias" element={<ContainerCategs />}></Route>                          {/*ocupa el <Outlet />*/}
            <Route path="/categoria/:parametro_categoria" element={<ContainerCategProds />}></Route>  {/*ocupa el <Outlet />*/}
            <Route path="/productos" element={<ContainerProducts />}></Route>                         {/*ocupa el <Outlet />*/}
            <Route path="/producto/:parametro_id" element={<ContainerProductDetails />}></Route>      {/*ocupa el <Outlet />*/}
            <Route path="/usuarios" element={<PreContainerUsers />}></Route>                          {/*ocupa el <Outlet />*/}
            <Route path="/extra" element={<ContainerExtra />}></Route>                          {/*ocupa el <Outlet />*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
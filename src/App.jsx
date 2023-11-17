import {Navigate, Route, Routes } from "react-router-dom"
import NavBar from "./components/navbar"
import Inicio from "./pages/inicio"
import Promociones from "./pages/promociones"
import Imagenes from "./pages/imagenes"
import Consultas from "./pages/consultas"
import Footer from "./components/footer"


function App() {

  return (
    <>
      <div className="bg-primary min-h-screen">
        <NavBar/>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/promociones' element={<Promociones></Promociones>}></Route>
            <Route path='/imagenes' element={<Imagenes></Imagenes>}></Route>
            <Route path='/consultas' element={<Consultas></Consultas>}></Route>
            <Route path='*' element={<Navigate to='/'></Navigate>}></Route>
          </Routes>
      </div>   
      <Footer/>
    </>
  )
}

export default App

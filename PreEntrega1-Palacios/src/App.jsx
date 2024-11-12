import './App.css'
import Navbar from './components/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductsContainer from './components/pages/ProductsContainer'
import ContactContainer from './components/pages/ContactContainer'
import ItemListContainer from './components/pages/itemlistcontainer'
import DetailContainer from './components/DetailContainer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
  <Route exact path='/' element={<ItemListContainer/>}/>
  <Route exact path='/Productos' element={<ProductsContainer/>}/>
  <Route exact path="/product/:prodId" element={<DetailContainer/>} />
  <Route exact path='/Contacto' element={<ContactContainer/>}/>
  <Route exact path='/Inicio' element={<ItemListContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

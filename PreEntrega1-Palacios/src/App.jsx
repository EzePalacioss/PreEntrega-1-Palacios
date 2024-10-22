import './App.css'
import ItemListContainer from './components/itemlistcontainer'
import Navbar from './components/navbar'

function App() {

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={'Bienvenido a mi tienda digital!'}/>
    </>
  )
}

export default App

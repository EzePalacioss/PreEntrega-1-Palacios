import CartWidget from './cartwidget';
import './navbar.css'

const Navbar = () =>{
    
    return(
        <>
        <nav className="nav">
            <h2>TiendaDigita</h2>
<ul className="navList">
    <li className="navItem"><a href="">Productos</a></li>
    <li className="navItem"><a href="">Contacto</a></li>
    <li className="navItem"><a href="">Preguntas</a></li>
</ul>
<CartWidget/>
        </nav>
        </>      
    );
};

export default Navbar
import CartWidget from './cartwidget';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () =>{
    
    return(
        <>
        <nav className="nav">
            <h2><Link to={'/Inicio'}>JAB Computación</Link></h2>
<ul className="navList">
    <li className="navItem"><a href="">
        <Link to={'/'}>Inicio</Link>
        </a></li>
    <li className="navItem"><a href="">
        <Link to={'/Productos'}>Productos</Link>
        </a></li>
    <li className="navItem"><a href="">
    <Link to={'/Contacto'}>Contacto</Link>
        </a></li>
</ul>
<CartWidget/>
        </nav>
        </>      
    );
};

export default Navbar
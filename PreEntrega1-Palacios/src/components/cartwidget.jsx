import './cartwidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ()=> {

    return(
        <>
        <div className="cart-container"> 
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        <span className="cart-count" aria-hidden="true">3</span>
        </div>
        </>
    ) 
}


export default CartWidget
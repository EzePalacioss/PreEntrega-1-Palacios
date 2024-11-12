/* eslint-disable react/prop-types */
import './ProductCard.css'
import {Link} from 'react-router-dom'

export default function ProductCard({product}){

    return<>
    <article className='hero-container'>
<h3 className='hero-title'>{product.title} </h3>
<img src={product.image} alt={product.title} className='hero-img' />
<div className='info-container'>
<p className='hero-category'>Marca: {product.category}</p>
<p className='hero-price'>Precio: ${product.price}</p>
<p>Stock: {product.stock}</p>
<button className='hero-details'>
    <Link to={`/product/${product.id}`}>Ver Detalles</Link>
</button>
</div>
    </article>
    
    </>
}
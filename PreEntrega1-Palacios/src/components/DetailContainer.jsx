import { useParams } from "react-router-dom"
import {getProduct} from '../asyncMock.js'
import { useEffect, useState } from "react";
import './DetailContainer.css'
export default function DetailContainer(){
    const{prodId} = useParams();
    const[products, setProducts] = useState({})

    useEffect(()=>{
        setProducts(getProduct(prodId))
    })
    return<>
    
    <h1>Especificaciones</h1>
    <section className="hero-section">
    <h2>{products.title}</h2>
    <article className="hero-article">
    <img src={products.image} alt={products.title} />
    <p>{products.details}</p>
    </article>
    <div>
    <button>Comprar</button>
    <p>+</p>
    <p>{products.stock}</p>
    <p>-</p>
    </div>
    </section>
    
    </>
}
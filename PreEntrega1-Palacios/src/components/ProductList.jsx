import { useEffect, useState } from "react"
import { getProducts } from "../asyncMock"
import ProductCard from "./ProductCard"
import './ProductCard.css'

export default function ProductList(){
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
getProducts.then((data) => setProducts(data))

    }, [])

    return(
    <>
    
    <section className="hero-products">
        {products.map((product)=> (
            <ProductCard key={product.id} product={product}/>
        ))}
    </section>
    
    </>
    )
}
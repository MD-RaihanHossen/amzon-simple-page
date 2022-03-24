import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    //product theke data paichi ai fuction tai, product ar modhe click korle shop ar modhe shei data dekhabe jei datati ancilam products Componnets theke
    const handelAddToCart = (product) => {
        console.log(product)
       const newCart = [...cart,product]
       console.log(newCart)
       setCart(newCart)
    }


    return (
        <div className='shop-container'>
           <div className="products-container">
           {
               products.map(product => <Products handelAddToCart={handelAddToCart} key={product.id} product={product}></Products>)
           }
           </div>

           <div className="cart-contsiner">
            <h2>Order Samary</h2>
            <p>Select Items {cart.length}</p>
           </div>
           
        </div>
    );
};

export default Shop;
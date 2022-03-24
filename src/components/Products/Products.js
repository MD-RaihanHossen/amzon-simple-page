import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'

const Products = props => {
    const { img, name, price } = props.product
    const {handelAddToCart} = props
    
    return (
        <div className='product-data'>

            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
            </div>
            <button onClick={() =>handelAddToCart(props.product)} className='button'>
                <p className='p'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;
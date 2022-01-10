import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    // console.log(props.product.name)

const {img,name,seller,price,stock} = props.product;
    return (
        <div className='Product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h4 className='product-name'>product{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <br />
                <p>price :$<b>{price}</b> </p>
                <br />
                <p><small>only  {stock} left in stock - order fast</small></p>
                <button className='Main-button' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
            </div>
        </div>
    );
};

export default Product;
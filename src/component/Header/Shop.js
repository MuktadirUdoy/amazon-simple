import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from './Products/Product';
import Cart from './Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [Products,setProducts] = useState(first10);
    console.log(first10);

    const [cart,setCart]=useState([]);

    const handleAddProduct = (product) =>{
        console.log('product added',product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    
    return (
        <div className='Shop-container'>
           
            <div className="products-container">
            
             {
                 Products.map(pd => <Product handleAddProduct = {handleAddProduct} product={pd}></Product>)
             }
            
            </div>
            <div className="cart-container">
               <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
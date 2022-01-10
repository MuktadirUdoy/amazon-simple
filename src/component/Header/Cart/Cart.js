import React from 'react';

const cart = (props) => {
    const cart = props.cart;

    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total= total+ product.price;
    }
    
    let shipping =0;
    if (total>15) {
        shipping = 5.50;
    }
    else if(total>25){
        shipping = 4.50;
    }
    else if(total>0){
        shipping = 8.50;
    }
    const vatTax = total/10;
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price : {total.toFixed(2)}</p>
            <p>Shipping Price : {shipping.toFixed(2)}</p>
            <p>Vat+Tax : {vatTax.toFixed(2)}</p>
            <p>total Price : {(total+shipping+vatTax).toFixed(2)}</p>
        </div>
    );
};

export default cart;
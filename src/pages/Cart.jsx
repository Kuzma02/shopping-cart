import React, { useState } from 'react';
import { CartElement } from '../components';
import PImage1 from "../assets/images/1001.png";
import PImage2 from "../assets/images/1002.png";
import updateTitle from '../hooks/UpdateTitle';

export const Cart = () => {

  updateTitle("Cart");

  const [ productsInCart, setProductsInCart ] = useState([
    {
      id: 1,
      productImage: PImage1,
      productTitle: "Sony Wh-Ch510 Bluetooth Wireless",
      productPrice: "$149",
    },
    {
      id: 2,
      productImage: PImage2,
      productTitle: "boAt Rockerz 450",
      productPrice: "$49",
    },
  ]);

  return (
    <div className='text-center max-w-screen-xl mx-auto'>
      <h1 className='font-bold text-2xl py-10 '>Cart Items: 2</h1>

      <div className='w-full'>
        { productsInCart.map((productInCart) => (
            <CartElement key={ productInCart.id } productImage={productInCart.productImage} productTitle={productInCart.productTitle} productPrice={productInCart.productPrice} />
        )) }

      </div>
    </div>
  )
}

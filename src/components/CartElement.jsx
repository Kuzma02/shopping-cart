import React from 'react';


export const CartElement = ({ productTitle, productPrice, productImage }) => {
  return (
    <div className='cart-element flex justify-between items-center w-full border-b px-8 py-4'>
      <img className='w-36 max-sm:hidden justify-self-start' src={ productImage } alt="Product" />
      <h2>{ productTitle }</h2>
      <span>{ productPrice }</span>
      <button className='bg-red-700 text-white p-1 rounded-lg hover:bg-red-800 justify-self-end'>Remove</button>
    </div>
  )
}

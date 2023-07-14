import React from 'react'


export const Card = ({ productImage, productTitle, productPrice }) => {
  return (
    <div className='flex flex-col items-center max-w-sm gap-y-4'>
      <img src={ productImage } className='h-60' alt="Headphones" />
      <h2 className='text-xl max-lg:text-lg'>{ productTitle }</h2>
      <div className='flex items-center justify-between w-full px-4'>
        <span className="font-bold text-lg">{ productPrice }</span>
        <button className='text-white bg-blue-600 p-2 rounded-lg hover:bg-blue-700'>Add To Cart</button>
      </div>
    </div>
  )
}

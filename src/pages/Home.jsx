import React, { useState } from 'react';
import { Card } from "../components";
import PImage1 from "../assets/images/1001.png";
import PImage2 from "../assets/images/1002.png";
import PImage3 from "../assets/images/1003.png";
import PImage4 from "../assets/images/1004.png";
import PImage5 from "../assets/images/1005.png";
import PImage6 from "../assets/images/1006.png";
import updateTitle from '../hooks/UpdateTitle';

export const Home = () => {

  updateTitle("Home");

  const [ products, setProducts ] = useState([
    {
      id: 1,
      productImage: PImage1,
      productTitle: "Sony Wh-Ch510 Bluetooth Wireless",
      productPrice: "$149"
    },
    {
      id: 2,
      productImage: PImage2,
      productTitle: "boAt Rockerz 450",
      productPrice: "$49"
    },
    {
      id: 3,
      productImage: PImage3,
      productTitle: "JBL Tune 760NC",
      productPrice: "$129"
    },
    {
      id: 4,
      productImage: PImage4,
      productTitle: "Logitech H111 Wired",
      productPrice: "$159"
    },
    {
      id: 5,
      productImage: PImage5,
      productTitle: "APPLE Airpods Max Bluetooth Headset",
      productPrice: "$59"
    },
    {
      id: 6,
      productImage: PImage6,
      productTitle: "ZEBRONICS Zeb-Thunder Wired",
      productPrice: "$119"
    },
  ]);


  return (
    <div className='grid grid-cols-3 gap-4 max-w-screen-xl mx-auto px-4 py-12 max-md:grid-cols-2 max-sm:flex max-sm:justify-center flex-wrap'>
      {products.map((product) => (
        <Card key={product.id} productImage={product.productImage} productTitle={product.productTitle} productPrice={product.productPrice} />
      ))}
      
    </div>
  )
}

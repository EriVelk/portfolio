import React from 'react'
import './ProductList.css'
import Product from '../product/Product';
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Projects</h1>
            <p className='pl-desc'>
                Veliz is a creative portfolio that your word has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits inside.

                Some projects take time to fully load because the servers go into a dormant state
            </p>
        </div>
        <div className='pl-list'>
            {products.map((item) =>(
                <Product key={item.id} img={item.img} link={item.link} title={item.title}/>
            ))

            }
        </div>
    </div>
  )
}

export default ProductList
import React from 'react'
import './Product.css'

const Product = ({img, link, title}) => {
  return (
    <div className='p'>
      <div className='p-browser'>
        <div className='p-circle'>
        </div>
        <div className='p-circle'>
        </div>
        <div className='p-circle'>
        </div>
      </div>
      <div className='p-title'>
        <p>{title}</p>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className='p-img'/>
      </a>
    </div>
  )
}

export default Product
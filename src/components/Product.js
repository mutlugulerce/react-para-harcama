import React from 'react'

function Product({product}) {
  return (
    <div>
    <img src={product.image} alt="" />
    <h4>{product.title}</h4>
    <div className='price'>{product.price}TL</div>
    <div className='actions'>
        <button className='sell-btn'>Sat</button>
        <span className='amount'>0</span>
        <button className='buy-btn'>Satın Al</button>
    </div>
    </div>
  )
}

export default Product

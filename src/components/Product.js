import React from 'react'

function Product({product,basket,setBasket,money,total}) {

const basketItem = basket.find(item => item.id === product.id)

const addBasket = () => {

    const checkBasket = basket.find(item => item.id === product.id)

    if(checkBasket) {
        checkBasket.amount += 1

        setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
    }else{
        setBasket([...basket.filter(item => item.id !== product.id),
        {
            id: product.id,
            title: product.title,
            amount: 1
        }
        ])
    }
}

const removeBasket = () => {
    const currentBasket = basket.find(item => item.id=== product.id)
    currentBasket.amount -= 1

    if(currentBasket === 0){
        setBasket([...basket.filter(item=> item.id !== product.id)])
    }else{
        setBasket([...basket.filter(item => item.id !== product.id), currentBasket])
    }
}
  return (
    <div>
    <img src={product.image} alt="" />
    <h4>{product.title}</h4>
    <div className='price'>{product.price}TL</div>
    <div className='actions'>
        <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Sat</button>
        <span className='amount'>{basketItem && basketItem.amount || 0}</span>
        <button className='buy-btn' disabled={total+ product.price > money } onClick={addBasket}>Satın Al</button>
    </div>
    </div>
  )
}

export default Product

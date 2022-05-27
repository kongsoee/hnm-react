import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='card'>
        <div className='proBox'>
        <img className='productImg' src={item?.img}/>
        </div>
        <div>{item?.choice == true?"Conscious Chice":""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new == true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard
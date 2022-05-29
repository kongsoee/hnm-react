import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail=()=>{
    navigate(`/products/${item.id}`)
  }
  return (
    <div className='card' onClick={showDetail}>
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
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




const UpdateProduct = () => {
  const productData = useSelector((state)=>state.products)
  console.log(productData)
  
  return (
 <div>
  <div className='mt-5'>
          <Link to={"/shopprofile"} >PROFILE</Link>
  </div>
  
  <div className='product-list'>
  <h3 className='text-xl text-bold text-pink-950 mb-5'>PRODUCT LIST</h3>
  <ul>
    <li>Id</li>
    <li>Name</li>
    <li>Stock</li>
    <li>Price</li>
    <li>Update</li>
  </ul>
    {
      productData.productList.map((item)=>
      <ul key={item._id}>
        <li>{item.productid}</li>
        <li>{item.productname.split(' ').pop()}</li>
        <li>{item.stock}</li>
        <li>{item.price}</li>
        <li>
          <button className='bg-pink-800 hover:bg-red-950'>
            <Link to={"/update/"+item._id} className='text-white'>Update</Link>
          </button>
        </li>
      </ul>)
    }
  </div>
  
  
 </div>
  )
}

export default UpdateProduct
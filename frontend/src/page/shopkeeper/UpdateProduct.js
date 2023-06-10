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
  <table class="table-fixed border-separate border border-blue-900">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Stock</th>
      <th>Price</th>
      <th>Update</th>
    </tr>
  </thead>

  <tbody>
  {
      productData.productList.map((item)=>

      <tr key={item._id}>
      <td>{item.productid}</td>
      <td>{item.productname.split(' ').pop()}</td>
      <td>{item.stock}</td>
      <td>{item.price}</td>
      <td><button className='bg-pink-800 hover:bg-red-950'>
            <Link to={"/update/"+item._id} className='text-white'>Update</Link>
          </button>
      </td>
    </tr>
)
    }
    
  </tbody>
</table>
  
    
  </div>
  
  
 </div>
  )
}

export default UpdateProduct
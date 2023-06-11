import React, { useEffect, useState } from 'react'


function Orders() {
  
  // useEffect(()=>{
  //   (async()=>{
  //     const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/orders`)
  //     const resData = await res.json()
  //     console.log("resdata:"+resData)
  //   })()
  // },[])
    
      
  return (
    <div>
      {/* <h3 className='text-xl text-bold text-pink-950 mb-5'>ORDERS</h3>
  <table style={{width:"100%" }} class="styled-table" >
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
  
    
   */}
    </div>
  )
}

export default Orders

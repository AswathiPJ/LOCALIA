import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'

function Orders() {
  
  const userData = useSelector((state) => state.user);
  const params=useParams()
 const [orders,setOrders]=useState([])

  
  useEffect(()=>{
    const fetchData = async ()=>{
      console.log(userData._id)
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/orders/${params.id}`)
      const resData = await res.json()
      console.log(resData)
      // const orderList=[...{resData}]
      // console.log("orderList is "+orderList)
      setOrders(resData.result)
      console.log(orders)
    }
    
    fetchData()
  },[])
    
      
  return (
    <div>
      <h3 className='text-xl text-bold text-pink-950 mb-5'>ORDERS</h3>
  <table style={{width:"100%" }} class="styled-table" >
  <thead>
    <tr>
      {/* <th>Product</th> */}
      <th>Name</th>
      <th>Category</th>
      <th>Quantity</th>
      <th>Amount</th>
    </tr>
  </thead>

  <tbody>
  {
      orders.map((item)=>

      <tr key={item._id}>
      {/* <td>{item.image}</td> */}
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.qty}</td>
      <td>{item.total}</td>
  
    </tr>
)
    }
    
  </tbody>
</table>
  
    
  
    </div>
  )
}

export default Orders

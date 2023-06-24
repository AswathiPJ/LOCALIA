import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./UpdateProduct.css"
import { setDataProduct } from '../../redux/productsSlice'







const AdminOrders = () => {
  const [orders,setOrders]=useState([])
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.products)
  const shopkeeperData = useSelector((state)=>state.shopkeeper)
  const data={shopname:shopkeeperData.shopname}
 

 
  useEffect(() => {
    const fetchTheData = async () => {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/adminorders`);

      const dataRes = await fetchData.json();
      setOrders(dataRes)
    };

    fetchTheData();
  }, []);

  return (
 <div>
  
  
  <div className='product-list'>
  <h3 className='text-xl text-bold text-pink-950 mb-5'>ORDERS</h3>
  <table style={{width:"100%" }} class="styled-table" >
  <thead>
    <tr>
      <th>Name</th>
      <th>Total</th>
      <th>DeliveryGuy</th>
      <th>DeliveryStatus</th>
      <th>Assign</th>

    </tr>
  </thead>

  <tbody>
  {
      orders.map((item)=>

      <tr key={item._id}>
      <td>{item.name}</td>
      <td>{item.total}</td>
      <td>{item.deliveryguy}</td>
      <td>{item.deliverystatus}</td>
      <td><button className='bg-pink-800 hover:bg-red-950'>
            <Link to={"/assignDelivery/"+item._id} className='text-white'>Assign Delivery Guy</Link>
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

export default AdminOrders
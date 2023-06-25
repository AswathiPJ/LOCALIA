import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./UpdateProduct.css"
import { setDataProduct } from '../../redux/productsSlice'







const AdminShops = () => {
  const [orders,setOrders]=useState([])
  
 

 
  useEffect(() => {
    const fetchTheData = async () => {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/adminshops`);

      const dataRes = await fetchData.json();
      setOrders(dataRes)
    };

    fetchTheData();
  }, []);

  return (
 <div>
  
  
  <div className='product-list'>
  <h3 className='text-xl text-bold text-pink-950 mb-5'>SHOPS LIST</h3>
  <table style={{width:"100%" }} class="styled-table" >
  <thead>
    <tr>
      <th>Licence Number</th>
      <th>Shop name</th>
      <th>City</th>
      <th>Landmark</th>
      <th>Working Hours</th>

    </tr>
  </thead>

  <tbody>
  {
      orders.map((item)=>

      <tr key={item._id}>
      <td>{item.shoplicencenumber}</td>
      <td>{item.shopname}</td>
      <td>{item.city}</td>
      <td>{item.landmark}</td>
      <td>{item.workinghours}</td>
      
    </tr>
)
    }
    
  </tbody>
</table>
  
    
  </div>
  
  
 </div>
  )
}

export default AdminShops
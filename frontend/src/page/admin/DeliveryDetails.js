import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./UpdateProduct.css"
import { setDataProduct } from '../../redux/productsSlice'







const DeliveryDetails = () => {
  const [delivery,setDelivery]=useState([])
 
 

 
  useEffect(() => {
    const fetchTheData = async () => {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/admindelivery`);

      const dataRes = await fetchData.json();
      setDelivery(dataRes)
    };

    fetchTheData();
  }, []);

  return (
 <div>
  
  
  <div className='product-list'>
  <h3 className='text-xl text-bold text-pink-950 mb-5'>DELIVERY EMPLOYEE DETAILS</h3>
  <table style={{width:"100%" }} class="styled-table" >
  <thead>
    <tr>
      <th>Name</th>
      <th>Phonenumber</th>
      <th>Licence Number</th>
      <th>City</th>
      

    </tr>
  </thead>

  <tbody>
  {
      delivery.map((item)=>

      <tr key={item._id}>
      <td>{item.firstname}</td>
      <td>{item.phonenumber}</td>
      <td>{item.licencenumber}</td>
      <td>{item.city}</td>

    </tr>
)
    }
    
  </tbody>
</table>
  
    
  </div>
  
  
 </div>
  )
}

export default DeliveryDetails
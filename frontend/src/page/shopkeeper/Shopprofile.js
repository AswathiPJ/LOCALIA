import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Shopprofile = () => {
  const shopkeeperData = useSelector((state)=>state.shopkeeper)
  return (
    <div class="row">
      {/* <div class="column left bg-red-200">
          <div className='mt-5'>
          <Link to={"/shopprofile"} >PROFILE</Link>
          </div>
          <div className='mt-5'>
          <Link to={"/addproduct"}>ADD PRODUCT</Link>
          </div>
          <div className='mt-5'>
          <Link to={"/productdisplay"}>UPDATE PRODUCT</Link>
          </div>
          <div className='mt-5'>
          <Link to={"/orders"}>ORDERS</Link>
          </div>
    </div> */}
      <div class="column right bg-white p-3 md:p-4 ">
        <p className='mt-5 text-xl'>PROFILE</p>
        <p className='mt-10'>Licence Number: {shopkeeperData.shopname} </p>
          <p className='mt-10'>Licence Number: {shopkeeperData.shoplicencenumber} </p>
          <p className='mt-2'> Location: {shopkeeperData.city} </p>
          <p className='mt-2'> Phone Number: {shopkeeperData.phonenumber} </p>          
      </div>
      
    </div>
  )
}

export default Shopprofile
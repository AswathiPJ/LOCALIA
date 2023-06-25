import React from 'react';
import { Link,useNavigate } from 'react-router-dom'
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import { useState } from "react";
import toast from 'react-hot-toast';


function ShopkeeperSignup(){
  const navigate=useNavigate()
  const [showPassword,setShowPassword] = useState(false)
  const handleShowPassword = ()=>{
        setShowPassword(preve=> !preve)
   }
  const [data,setData] = useState({
      shoplicencenumber: "",
      shopname: "",
      city: "",
      landmark: "",
      pincode: "",
      workinghours: "",
      phonenumber: "",
      password: ""
   })

  console.log(data)
  const handleOnChange=(e)=> {
    const {name,value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
   }
   console.log(process.env.REACT_APP_SERVER_DOMIN)
   const handleSubmit=async(e)=>{
      e.preventDefault()
      const {shoplicencenumber,shopname,city,landmark,phonenumber,password} = data
      if(shoplicencenumber && shopname && city && landmark && phonenumber && password){
        const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/shopkeepersignup`,{
          method: "POST",
          headers: {
            "content-type":"application/json"
          },
          body: JSON.stringify(data)
        })
      
        const dataRes = await fetchData.json()
        console.log(dataRes)
        
        toast(dataRes.message)
        if(dataRes.alert){
          navigate("/shopkeeperlogin");
        }
      }
      else{
        alert("Please enter required fields")
      }
   }
  return (
    <div class="row">
      
      <div class="column right bg-white p-3 md:p-4">
        <div className='w-full max-w-sm m-auto'>
          <h1 className='text-center font-bold text-3xl text-pink-800'>
            Sign Up as Shopkeeper
          </h1>
        </div>
        <div className='p-3 md:p-4 w-full max-w-lg m-auto'>
        <form className='py-4 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='shoplicencenumber'>Shop Licence Number</label>
            <input type={'text'} id="shoplicencenumber" name='shoplicencenumber' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.shoplicencenumber} onChange={handleOnChange}/>

            <label htmlFor='shopname'>Shop Name</label>
            <input type={'text'} id="shopname" name='shopname' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800'value={data.shopname} onChange={handleOnChange}/>

            <label htmlFor='city'>City</label>
            <input type={'text'} id="city" name='city' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.city} onChange={handleOnChange}/>

            <label htmlFor='landmark'>Landmark</label>
            <input type={'text'} id="landmark" name='landmark' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.landmark} onChange={handleOnChange}/>

            <label htmlFor='pincode'>Pincode</label>
            <input type={'text'} id="pincode" name='pincode' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.pincode} onChange={handleOnChange}/>

            <label htmlFor='workinghours'>Working Hours</label>
            <input type={'text'} id="workinghours" name='workinghours' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.workinghours} onChange={handleOnChange}/>

            <label htmlFor='phonenumber'>Phone Number</label>
            <input type={'text'} id="phonenumber" name='phonenumber' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.phonenumber} onChange={handleOnChange}/>
            
            <label htmlFor='password'>Password</label>
              <div className='flex px-2 py-1 bg-neutral-200 rounded mt-1 mb-2 outline focus-within:outline-pink-800'>
              <input type={showPassword ? "text":"password"} id="password" name='password' className='bg-neutral-200 w-full border-none outline-none' value={data.password} onChange={handleOnChange}/>
              <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ?<BiShow/> :<BiHide/>}</span>
              </div>
            
            <button className='w-full m-auto mt-4 max-w-[400px] max-w-[100py] bg-pink-900 hover:bg-pink-950 cursor pointer text-white text-lg font-medium text-center rounded-full'>Create Account as Shopkeeper</button>
          </form>
          <p className='text-center text-sm'>Already have an account ? <Link to="/shopkeeperlogin" className='text-pink-950 underline'>Shopkeeper Login</Link></p>
        </div>
      </div>
    </div>
  )
}


export default ShopkeeperSignup
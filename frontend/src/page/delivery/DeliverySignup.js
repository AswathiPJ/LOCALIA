import React from 'react';
import { Link,useNavigate } from 'react-router-dom'
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import { useState } from "react";
import toast from 'react-hot-toast';


function DeliverySignup(){
  const navigate=useNavigate()
  const [showPassword,setShowPassword] = useState(false)
  const handleShowPassword = ()=>{
        setShowPassword(preve=> !preve)
   }
  const [data,setData] = useState({
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      licencenumber: "",
      city: "",
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
      const {firstname,lastname,phonenumber,email,licencenumber,city,password} = data
      if(firstname && phonenumber && city && email && licencenumber && city && password){
        const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/deliverysignup`,{
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
          navigate("/deliverylogin");
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
            Sign Up as Delivery Guy
          </h1>
        </div>
        <div className='p-3 md:p-4 w-full max-w-lg m-auto'>
        <form className='py-4 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='shoplicencenumber'>First Name</label>
            <input type={'text'} id="shoplicencenumber" name='firstname' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.firstname} onChange={handleOnChange}/>

            <label htmlFor='shopname'>Last name</label>
            <input type={'text'} id="shopname" name='lastname' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800'value={data.lastname} onChange={handleOnChange}/>

            <label htmlFor='city'>Phone number</label>
            <input type={'text'} id="city" name='phonenumber' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.phonenumber} onChange={handleOnChange}/>

            <label htmlFor='pincode'>Email</label>
            <input type={'text'} id="pincode" name='email' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.email} onChange={handleOnChange}/>

    
            <label htmlFor='landmark'>Two wheeler Licence number </label>
            <input type={'text'} id="landmark" name='licencenumber' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.licencenumber} onChange={handleOnChange}/>

            <label htmlFor='landmark'>City</label>
            <input type={'text'} id="landmark" name='city' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.city} onChange={handleOnChange}/>

            <label htmlFor='password'>Password</label>
              <div className='flex px-2 py-1 bg-neutral-200 rounded mt-1 mb-2 outline focus-within:outline-pink-800'>
              <input type={showPassword ? "text":"password"} id="password" name='password' className='bg-neutral-200 w-full border-none outline-none' value={data.password} onChange={handleOnChange}/>
              <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ?<BiShow/> :<BiHide/>}</span>
              </div>
            
            <button className='w-full m-auto mt-4 max-w-[400px] max-w-[100py] bg-pink-900 hover:bg-pink-950 cursor pointer text-white text-lg font-medium text-center rounded-full'>Create Account as Delivery guy</button>
          </form>
          <p className='text-center text-sm'>Already have an account ? <Link to="/shopkeeperlogin" className='text-pink-950 underline'>Shopkeeper Login</Link></p>
        </div>
      </div>
    </div>
  )
}


export default DeliverySignup
import React from 'react'
import { Link } from 'react-router-dom'
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import { useState } from "react";
import { Toast, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { sloginRedux } from '../../redux/shopkeeperSlice';


const ShopkeeperLogin = () => {
  const [showPassword,setShowPassword] = useState(false)
  const handleShowPassword = ()=>{
        setShowPassword(preve=> !preve)
   }
  const [data,setData] = useState({
      phonenumber: "",
      password: ""
   })
   const navigate = useNavigate()
   const userData = useSelector((state)=>state)

   const dispatch = useDispatch()

  const handleOnChange=(e)=> {
    const {name,value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
   }
   const handleSubmit=async(e)=>{
      e.preventDefault()
      const {phonenumber,password} = data
      if(phonenumber && password){
        const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/shopkeeperlogin`,{
          method: "POST",
          headers: {
            "content-type":"application/json"
          },
          body: JSON.stringify(data)
        })
      
        const dataRes = await fetchData.json()
        console.log(dataRes)
        console.log(userData.user)
        toast(dataRes.message)

        if(dataRes.alert){
          dispatch(sloginRedux(dataRes))
          setTimeout(()=>{
            navigate('/shopprofile')
          },1000);
          
        }
        
      }
      else{
        alert("Please enter required fields")
      }
   }
  return (
    <div class="row">
      <div class="column left bg-white p-3 md:p-4">
        <div className='w-full max-w-sm m-auto'>
          <h1 className='text-center font-bold text-3xl text-pink-800 mt-12'>
            Login
          </h1>
          <p className='text-sm mt-5 text-center'>Welcome back! Please Enter your details.</p>
        </div>
        <div className='p-3 md:p-4 w-full max-w-lg m-auto'>
        <form className='py-4 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='phonenumber'>Phone Number</label>
            <input type={'text'} id="phonenumber" name='phonenumber' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.phonenumber} onChange={handleOnChange}/>
            
            <label htmlFor='password'>Password</label>
              <div className='flex px-2 py-1 bg-neutral-200 rounded mt-1 mb-2 outline focus-within:outline-pink-800'>
              <input type={showPassword ? "text":"password"} id="password" name='password' className='bg-neutral-200 w-full border-none outline-none' value={data.password} onChange={handleOnChange}/>
              <span className='flex text-xl cursor pointer' onClick={handleShowPassword}>{showPassword ?<BiShow/> :<BiHide/>}</span>
              </div>
            
            <button className='w-full m-auto mt-4 max-w-[400px] max-w-[100py] bg-pink-900 hover:bg-pink-950 cursor pointer text-white text-lg font-medium text-center rounded-full'>Login as Shopkeeper</button>
          </form>
          <p className='text-center text-sm'>Don't have an account ? <Link to="/shopkeepersignup" className='text-pink-950 underline'>Shopkeeper Signup</Link></p>
        </div>
      </div>
      <div class="column right bg-red-50">
        <div class='h-screen flex items-center justify-center'>
          <div>
          <div className='semicircle'>
          </div>
          <div className='shadowsemicircle blur-sm'>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ShopkeeperLogin
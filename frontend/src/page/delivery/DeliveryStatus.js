import React, {useEffect, useState} from 'react'
import { ImagetoBase64 } from '../../utility/ImagetoBase64'
import { BsCloudUpload } from 'react-icons/bs'
import {useParams, Link,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { loginRedux } from '../../redux/shopkeeperSlice'
import { useDispatch } from 'react-redux'

const DeliveryStatus = () => {
  
//   const [name,setName]=useState('')
//   const [qty,setQty]=useState('')
//   const [total,setTotal]=useState('')
  const [status,setStatus]=useState('')
  
  const params=useParams()
  useEffect(()=>{
   getOrderDetails()
  },[])
  const getOrderDetails=async ()=>{
   console.warn(params)
   let result = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/status/${params.id}`)
   result=await result.json()
   console.warn(result)
   
   setStatus(result.deliverystatus)
  }

   
const navigate=useNavigate()
const handleSubmit=async(e)=>{
  e.preventDefault()
  let result = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/assign/${params.id}`,{
    method:'Put',
    body:JSON.stringify({deliverystatus:status}),
    headers:{
      'Accept':'Application/json',
      'Content-Type':'Application/json'
    }
  })
  const dataresult = await result.json()
  if(dataresult){
    toast("Order status updated")
    navigate('/deliveryprofile')
  }
}


  return (
    <div className="row">
      <div className="column left bg-red-200">
      
          
    </div>
      <div className="column right bg-white p-3 md:p-4">
      <div className='w-full max-w-sm m-auto'>
          <h1 className='text-center text-xl text-black'>
            Update order status
          </h1>
        </div>
        <div className='p-3 md:p-4 w-full max-w-lg m-auto'>
        <form className='py-4 flex flex-col' onSubmit={handleSubmit}>
            
            <label htmlFor='productname'>Order status</label>
            <input type={'text'} id="productname" name='productname' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800'value={status} onChange={(e)=>{setStatus(e.target.value)}} />

    
            
            
            <button className='w-full m-auto mt-4 max-w-[400px] max-w-[100py] bg-pink-900 hover:bg-pink-950 cursor pointer text-white text-lg font-medium text-center rounded-full'>Submit</button>
          </form>
        </div>
      </div>
      </div>
  )
}

export default DeliveryStatus
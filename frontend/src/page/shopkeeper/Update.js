import React, {useEffect, useState} from 'react'
import { ImagetoBase64 } from '../../utility/ImagetoBase64'
import { BsCloudUpload } from 'react-icons/bs'
import {useParams, Link,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { loginRedux } from '../../redux/shopkeeperSlice'
import { useDispatch } from 'react-redux'

const Update = () => {
  
  const [productname,setProductName]=useState('')
  const [otherdetails,setOtherDetails]=useState('')
  const [stock,setStock]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  
  const params=useParams()
  useEffect(()=>{
   getProductDetails()
  },[])
  const getProductDetails=async ()=>{
   console.warn(params)
   let result = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/update/${params.id}`)
   result=await result.json()
   console.warn(result)
   setProductName(result.productname)
   setOtherDetails(result.otherdetails)
   setStock(result.stock)
   setPrice(result.price)
   setImage(result.image)
  }

   const uploadImage =async(e)=> {
    const data = await ImagetoBase64(e.target.files[0])
    setImage((preve)=>{
        return{
            ...preve,
            image:data
        }
    })
}
const navigate=useNavigate()
const handleSubmit=async(e)=>{
  e.preventDefault()
  let result = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/update/${params.id}`,{
    method:'Put',
    body:JSON.stringify({productname,otherdetails,stock,price,image}),
    headers:{
      'Accept':'Application/json',
      'Content-Type':'Application/json'
    }
  })
  const dataresult = await result.json()
  if(dataresult){
    toast("Updated successfully")
    navigate('/shopprofile')
  }
}


  return (
    <div className="row">
      <div className="column left bg-red-200">
      <div className='mt-5'>
          <Link to={"/shopprofile"} >PROFILE</Link>
          </div>
          
    </div>
      <div className="column right bg-white p-3 md:p-4">
      <div className='w-full max-w-sm m-auto'>
          <h1 className='text-center text-xl text-black'>
            Update Product
          </h1>
        </div>
        <div className='p-3 md:p-4 w-full max-w-lg m-auto'>
        <form className='py-4 flex flex-col' onSubmit={handleSubmit}>
            
            <label htmlFor='productname'>Product Name</label>
            <input type={'text'} id="productname" name='productname' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800'value={productname} onChange={(e)=>{setProductName(e.target.value)}} />

            <label htmlFor='otherdetails'>Other Details</label>
            <input type={'text'} id="otherdetails" name='otherdetails' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={otherdetails} onChange={(e)=>{setOtherDetails(e.target.value)}}/>

            <label htmlFor='stock'>Stock</label>
            <input type={'number'} id="stock" name='stock' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={stock} onChange={(e)=>{setStock(e.target.value)}}/>

            <label htmlFor='price'>Price</label>
            <input type={'text'} id="price" name='price' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            
            <label htmlFor='image'>Image
            <div className='h-28 w-full bg-neutral-200 rounded flex items-center justify-center cursor-pointer'>
                    {
                        image ? <img src = {image} className='h-full'/> : <span className="text-5xl"><BsCloudUpload/></span>
                    }
                    
                    
                    <input type={"file"} accept='image/*' id='image' onChange={uploadImage} className='hidden'/>
              </div>
              </label>
            <button className='w-full m-auto mt-4 max-w-[400px] max-w-[100py] bg-pink-900 hover:bg-pink-950 cursor pointer text-white text-lg font-medium text-center rounded-full'>Submit</button>
          </form>
        </div>
      </div>
      </div>
  )
}

export default Update
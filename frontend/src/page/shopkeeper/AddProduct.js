import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { Toast, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { loginRedux } from '../../redux/shopkeeperSlice';
import {BsCloudUpload} from 'react-icons/bs';
import {ImagetoBase64} from '../../utility/ImagetoBase64'


const AddProduct = () => {
  const shopkeeperData = useSelector((state)=>state.shopkeeper)
    const [data,setData] = useState({
        shopname:shopkeeperData.shopname,
        city:shopkeeperData.city,
        landmark:shopkeeperData.landmark,
        productid:"",
        productname:"",
        category:"",
        brand:"",
        otherdetails:"",
        stock:"",
        price:"",
        image:""
     })
     const navigate = useNavigate()
    

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
        const {shopname,productid,productname,category,brand,stock,price} = data
        if(shopname && productid && productname && category && brand && stock && price){
          if(shopname===shopkeeperData.shopname){
            const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/addproduct`,{
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
              setTimeout(()=>{
                navigate('/shopprofile')
              },1000);
              
            }
          }
          else{
            alert("Enter correct shop name")
          }
          
        }
        else{
          alert("Please enter required fields")
        }
     }

const uploadImage =async(e)=> {
    const data = await ImagetoBase64(e.target.files[0])
    setData((preve)=>{
        return{
            ...preve,
            image:data
        }
    })
}

  return (
    <div class="row">
      
      <div class="column right bg-white p-3 md:p-4">
      <div className='w-full max-w-sm m-auto'>
          <h1 className='text-center text-xl text-black'>
            Add Product
          </h1>
        </div>
        <div className='p-3 md:p-4 w-full max-w-lg m-auto'>
        <form className='py-4 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='shopname'>Shop Name</label>
            <input type={'text'} id="shopname" name='shopname' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.shopname} onChange={handleOnChange}/>

            <label htmlFor='productid'>Product Id</label>
            <input type={'text'} id="productid" name='productid' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.productid} onChange={handleOnChange}/>

            <label htmlFor='productname'>Product Name</label>
            <input type={'text'} id="productname" name='productname' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800'value={data.productname} onChange={handleOnChange}/>

            <label htmlFor='category'>Category</label>
            <input type={'text'} id="category" name='category' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.category} onChange={handleOnChange}/>

            <label htmlFor='brand'>Brand</label>
            <input type={'text'} id="brand" name='brand' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.brand} onChange={handleOnChange}/>

            <label htmlFor='otherdetails'>Other Details</label>
            <input type={'text'} id="otherdetails" name='otherdetails' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.otherdetails} onChange={handleOnChange}/>

            <label htmlFor='stock'>Stock</label>
            <input type={'number'} id="stock" name='stock' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.stock} onChange={handleOnChange}/>

            <label htmlFor='price'>Price</label>
            <input type={'text'} id="price" name='price' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.price} onChange={handleOnChange}/>
            
            <label htmlFor='image'>Image
            <div className='h-28 w-full bg-neutral-200 rounded flex items-center justify-center cursor-pointer'>
                    {
                        data.image ? <img src = {data.image} className='h-full'/> : <span className="text-5xl"><BsCloudUpload/></span>
                    }
                    
                    
                    <input type={"file"} accept='image/*' id='image' onChange={uploadImage} className='hidden'/>
              </div>
              </label>
            <button className='w-full m-auto mt-4 max-w-[400px] max-w-[100py] bg-pink-900 hover:bg-pink-950 cursor pointer text-white text-lg font-medium text-center rounded-full'>Add Product</button>
          </form>
        </div>
      </div>
      </div>
      
    
  )
}

export default AddProduct
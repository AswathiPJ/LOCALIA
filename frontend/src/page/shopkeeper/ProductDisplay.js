import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Toast,toast } from 'react-hot-toast'
import { setDataProduct } from '../../redux/productsSlice'
import { loginRedux } from '../../redux/productSlice'

const ProductDisplay = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const [data,setData]=useState({
      shopname:""
    })
    const handleOnChange=(e)=> {
      const {name,value} = e.target
      setData((preve)=>{
        return{
          ...preve,
          [name]:value
        }
      })
       }
       
       const shopkeeperData = useSelector((state)=>state.shopkeeper)
        

    const handleSubmit = async(e)=>{
      e.preventDefault();
      const {shopname}=data
      if(shopname){
        if(shopname===shopkeeperData.shopname){
          
          const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/productdisplay`,{
            method: "POST",
            headers: {
              "content-type":"application/json"
            },
            body: JSON.stringify(data)
          })
          
              const dataRes = await fetchData.json()
          dispatch(setDataProduct(dataRes))
          console.log(dataRes)
            
          
          
          if(dataRes.alert){
            setTimeout(()=>{
              navigate('/updateproduct')
            },1000);
          }
        }
        else{
          alert('Enter correct shop name')
        }
      }
      else{
        alert("Please enter the shop name!")
      }
    }
  return (
    <div className='row'>
      <div className='column left bg-red-200'>
      <div className='mt-5'>
          <Link to={"/shopprofile"} >PROFILE</Link>
          </div>
      </div>
      <div className='column right bg-white'>
      <div className='p-3 md:p-4 w-full max-w-lg m-auto'>
      <form className='py-4 flex flex-col' onSubmit={handleSubmit}>
      <label htmlFor='shopname'>Shop Name</label>
            <input type={'text'} id="shopname" name='shopname' className='mt-1 mb-2 w-full bg-neutral-200 px-2 py-1 rounded focus-within:outline-pink-800' value={data.shopname} onChange={handleOnChange}/>

            <button className='w-full m-auto mt-4 max-w-[400px] max-w-[100py] bg-pink-900 hover:bg-pink-950 cursor pointer text-white text-lg font-medium text-center rounded-full'>Submit</button>

      </form>
      </div>
      </div>
        
    </div>
  )
}

export default ProductDisplay
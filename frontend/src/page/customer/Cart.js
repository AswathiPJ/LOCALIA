import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../../component/cartProduct";
import emptyCartImage from "../../assest/empty.gif"
import { toast } from "react-hot-toast";
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate} from "react-router-dom";
import { emptycart} from "../../redux/productSlide";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem)
  const user = useSelector(state => state.user)
  const userId=user._id
  const address=user.address
  console.log(user)
  const navigate = useNavigate()
  const dispatch=useDispatch()
  

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handleOrder=async ()=> {

    productCartItem.map(async (el)=>{
      const {name,category,image,qty,total,shopname}=el
      
    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/orders`,{
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify({userId,name,category,image,qty,total,shopname,address})
    })
    const dataRes = await fetchData.json()
    console.log(dataRes)
    })
    

    
    toast("Order placed successfully")
    dispatch(emptycart())
    navigate('/')
  }
 
  
  return (
    <>
    
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        {productCartItem[0] ?
        <div className="my-4 flex gap-3">
          {/* display cart items  */}
          <div className="w-full max-w-3xl ">
            {productCartItem.map((el) => {
              return (
                <CartProduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                />
              );
            })}
          </div>

          {/* total cart item  */}
          <div className="w-full max-w-md  ml-auto">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Qty :</p>
              <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Price</p>
              <p className="ml-auto w-32 font-bold">
                <span className="text-red-500">₹</span> {totalPrice}
              </p>
            </div>
            <button className="bg-red-500 w-full text-lg font-bold py-2 text-white" onClick={handleOrder}>
              Place Order
            </button>
          </div>
        </div>

        : 
        <>
          <div className="flex w-full justify-center items-center flex-col">
            <img src={emptyCartImage} className="w-full max-w-sm"/>
            <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
          </div>
        </>
      }
      </div>
    
    </>
  );
};

export default Cart;

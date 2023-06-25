import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { slogoutRedux} from "../redux/shopkeeperSlice";
import { dlogoutRedux} from "../redux/deliverySlice";
import { alogoutRedux} from "../redux/adminSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const shopkeeperData = useSelector((state) => state.shopkeeper);
  const deliveryData = useSelector((state) => state.delivery);
  const adminData = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    if(userData){
      dispatch(logoutRedux());
    }
    if(shopkeeperData){
      dispatch(slogoutRedux());
    }
    if(deliveryData){
      dispatch(dlogoutRedux());
    }
    if(adminData){
      dispatch(alogoutRedux());
    }
    

    toast("Logout successfully");
    navigate("/")
  };

  const cartItemNumber = useSelector((state)=>state.product.cartItem)

  const navigate = useNavigate();
  return (
    
<div>

{  shopkeeperData.shopname ?  
  <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}  
<div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={"shopprofile"}>Profile</Link>
            <Link to={"addproduct"}>Add product</Link>
            <Link to={"updateproduct"}>Update product</Link>
            <Link to={"shoporders/"+shopkeeperData.shopname}>Orders</Link>
          </nav>
          
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
  

                
                {shopkeeperData.shopname ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout ({shopkeeperData.shopname}){" "}
                  </p>
                  
                ) : (
                  <>
                  
                  <Link to ={"shopkeeperlogin"} className='whitespace-nowrap cursor-pointer'>Shopkeeper Login</Link>
                  </>
                )}

                {/* <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link
                    to={"menu/63f0fdbb3bcc2f97fa53d25d"}
                    className="px-2 py-1"
                  >
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-1">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link>
                </nav> */}
              </div>
            )}
          </div>
        </div>
      </div>
      </header> 
      : deliveryData.email ?
      <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
      <Link to={""}>
        <div className="h-10">
          <img src={logo} className="h-full" />
        </div>
      </Link>

      <div className="flex items-center gap-4 md:gap-7">
        <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
        <Link to={"deliveryprofile"}>Profile</Link>
          <Link to={"deliveryorders"}>View Orders</Link>
        
        </nav>
        
        <div className=" text-slate-600" onClick={handleShowMenu}>
          <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
            {userData.image ? (
              <img src={userData.image} className="h-full w-full" />
            ) : (
              <HiOutlineUserCircle />
            )}
          </div>
          {showMenu && (
            <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">


             
              {deliveryData.firstname ? (
                <p
                  className="cursor-pointer text-white px-2 bg-red-500"
                  onClick={handleLogout}
                >
                  Logout ({deliveryData.firstname}){" "}
                </p>
                
              ) : (
                <>
                
                <Link to ={"shopkeeperlogin"} className='whitespace-nowrap cursor-pointer'>Delivery Login</Link>
                </>
              )}

              <nav className="text-base md:text-lg flex flex-col md:hidden">
                <Link to={""} className="px-2 py-1">
                  Home
                </Link>
                <Link
                  to={"orders/"+userData._id}
                  className="px-2 py-1"
                >
                  Orders
                </Link>
                <Link to={"about"} className="px-2 py-1">
                  About
                </Link>
                <Link to={"contact"} className="px-2 py-1">
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
    </header>
      
      : adminData.email ?
      <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
      <Link to={""}>
        <div className="h-10">
          <img src={logo} className="h-full" />
        </div>
      </Link>

      <div className="flex items-center gap-4 md:gap-7">
        <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
          
        <Link to={"adminshops"}>Shops</Link>
        <Link to={"deliverydetails"}>Delivery Employees</Link>
          <Link to={"adminorders"}>Assign orders</Link>
        </nav>
        
        <div className=" text-slate-600" onClick={handleShowMenu}>
          <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
            {userData.image ? (
              <img src={userData.image} className="h-full w-full" />
            ) : (
              <HiOutlineUserCircle />
            )}
          </div>
          {showMenu && (
            <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">


              
              {adminData.email ? (
                <p
                  className="cursor-pointer text-white px-2 bg-red-500"
                  onClick={handleLogout}
                >
                  Logout Admin
                </p>
                
              ) : (
                <>
                
                <Link to ={"adminlogin"} className='whitespace-nowrap cursor-pointer'>Admin</Link>
                </>
              )}

              <nav className="text-base md:text-lg flex flex-col md:hidden">
                <Link to={""} className="px-2 py-1">
                  Home
                </Link>
                <Link
                  to={"orders/"+userData._id}
                  className="px-2 py-1"
                >
                  Orders
                </Link>
                <Link to={"about"} className="px-2 py-1">
                  About
                </Link>
                <Link to={"contact"} className="px-2 py-1">
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
    </header>  
      :  userData.firstName ?
      <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
      <Link to={""}>
        <div className="h-10">
          <img src={logo} className="h-full" />
        </div>
      </Link>

      <div className="flex items-center gap-4 md:gap-7">
        <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
          <Link to={""}>Home</Link>
          <Link to={"orders/"+userData._id}>Orders</Link>
          <Link to={"about"}>About</Link>
          <Link to={"contact"}>Contact</Link>
        </nav>
        <div className="text-2xl text-slate-600 relative">
          <Link to={"cart"}>
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
              {cartItemNumber.length}
            </div>
          </Link>
        </div>
        
        <div className=" text-slate-600" onClick={handleShowMenu}>
          <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
            {userData.image ? (
              <img src={userData.image} className="h-full w-full" />
            ) : (
              <HiOutlineUserCircle />
            )}
          </div>
          {showMenu && (
            <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">


              {userData.firstName ? (
                <p
                  className="cursor-pointer text-white px-2 bg-red-500"
                  onClick={handleLogout}
                >
                  Logout ({userData.firstName}){" "}
                </p>
                
              ) : (
                <>
                <Link to ={"login"} className='whitespace-nowrap cursor-pointer'>Customer Login</Link>
                
                </>
              )}
              

              <nav className="text-base md:text-lg flex flex-col md:hidden">
                <Link to={""} className="px-2 py-1">
                  Home
                </Link>
                <Link
                  to={"orders/"+userData._id}
                  className="px-2 py-1"
                >
                  Orders
                </Link>
                <Link to={"about"} className="px-2 py-1">
                  About
                </Link>
                <Link to={"contact"} className="px-2 py-1">
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
    </header> 
      :
      <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
      <Link to={""}>
        <div className="h-10">
          <img src={logo} className="h-full" />
        </div>
      </Link>

      <div className="flex items-center gap-4 md:gap-7">
        <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
          <Link to={""}>Home</Link>
          <Link to={"login"}>Orders</Link>
          <Link to={"about"}>About</Link>
          <Link to={"contact"}>Contact</Link>
        </nav>
        <div className="text-2xl text-slate-600 relative">
          <Link to={"login"}>
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
              {cartItemNumber.length}
            </div>
          </Link>
        </div>
        
        <div className=" text-slate-600" onClick={handleShowMenu}>
          <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
            {userData.image ? (
              <img src={userData.image} className="h-full w-full" />
            ) : (
              <HiOutlineUserCircle />
            )}
          </div>
          {showMenu && (
            <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">


              {userData.firstName ? (
                <p
                  className="cursor-pointer text-white px-2 bg-red-500"
                  onClick={handleLogout}
                >
                  Logout ({userData.firstName}){" "}
                </p>
                
              ) : (
                <>
                <Link to ={"login"} className='whitespace-nowrap cursor-pointer'>Customer Login</Link>
                
                </>
              )}
              {shopkeeperData.shopname ? (
                <p
                  className="cursor-pointer text-white px-2 bg-red-500"
                  onClick={handleLogout}
                >
                  Logout ({shopkeeperData.shopname}){" "}
                </p>
                
              ) : (
                <>
                
                <Link to ={"shopkeeperlogin"} className='whitespace-nowrap cursor-pointer'>Shopkeeper Login</Link>
                </>
              )}
              {deliveryData.email ? (
                <p
                  className="cursor-pointer text-white px-2 bg-red-500"
                  onClick={handleLogout}
                >
                  Logout 
                </p>
                
              ) : (
                <>
                
                <Link to ={"deliverylogin"} className='whitespace-nowrap cursor-pointer'>Delivery Login</Link>
                </>
              )}
              {adminData.email ? (
                <p
                  className="cursor-pointer text-white px-2 bg-red-500"
                  onClick={handleLogout}
                >
                  Logout 
                </p>
                
              ) : (
                <>
                
                <Link to ={"adminlogin"} className='whitespace-nowrap cursor-pointer'>Admin</Link>
                </>
              )}

              <nav className="text-base md:text-lg flex flex-col md:hidden">
                <Link to={""} className="px-2 py-1">
                  Home
                </Link>
                <Link
                  to={"orders/"+userData._id}
                  className="px-2 py-1"
                >
                  Orders
                </Link>
                <Link to={"about"} className="px-2 py-1">
                  About
                </Link>
                <Link to={"contact"} className="px-2 py-1">
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
    </header>  }

    </div>
  );
};

export default Header;

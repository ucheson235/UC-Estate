
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Header() {
  const [pageState, setPageState] = useState("Login");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
      if(user){
        setPageState("profile");
      }else {
        setPageState("Login");
      }

    });
  }, [auth])
  
  function pathMatchRoute(route){
    if (route === location.pathname){
      return true
    }
  }
  
   
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt='logo'
            className='h-5 cursor-pointer'
            onClick={() =>navigate("")}
          />
        </div>
        <div>
            <ul className='flex space-x-10'>
                <li className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${pathMatchRoute("/") && "text-black border-b-red-500"}`}  onClick={() =>navigate("/")}>Home</li>
                
                <li className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${pathMatchRoute("/Offer") && "text-black border-b-red-500"}`}  onClick={() =>navigate("/Offer")}>Offers</li>
                
                <li className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${(pathMatchRoute("/Login") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}`}  onClick={() =>navigate("/profile")}>{pageState}</li>
                

            </ul>
          
        </div>
      </header>
    </div>
  );
}


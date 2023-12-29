import React, { useState } from 'react'
import { IoLogoWechat } from "react-icons/io5";
import { TbBellRinging2Filled } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdFactCheck } from "react-icons/md";
import signlogo from '../../asset/signlogo.png'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const[clickout,setClickOut]=useState(0);
  const token=localStorage.getItem('Token')
  const changecolor = (newValue) => {
    setClickOut(newValue);
  };
  return (
    <div className=' mt-5 flex justify-between items-center p-2 border max-w-[90%] shadow-md mx-auto rounded-full'>
    <div>
        <img src={signlogo} className='h-12'></img>
    </div>
    <div className='flex gap-5'>
        <p className={`flex items-center text-lg font-semibold cursor-pointer ${clickout===0 ? "text-[#6B8DE6]" : " text-slate-500"}`} onClick={()=>{
          changecolor(0);
           navigate('/')
        }}><IoMdHome /> Home</p>
        <p className={`flex items-center text-lg font-semibold cursor-pointer ${clickout===1 ? "text-[#6B8DE6]" : " text-slate-500"}`} onClick={()=>{
           changecolor(1);
            navigate('/influencerPlan')
        }}>Influencer Plan</p>
        <p  className={`flex items-center text-lg font-semibold cursor-pointer ${clickout===2 ? "text-[#6B8DE6]" : " text-slate-500"}`} onClick={()=>{
           changecolor(2);
           navigate('/campaignlist');
        }}><MdFactCheck /> Campaign</p>
    </div>
    <div className='flex gap-5'>
        <IoLogoWechat className='text-2xl text-[#6B8DE6]' />
        <TbBellRinging2Filled className='text-2xl text-[#6B8DE6]' />
        {
           token ? (
             <div>
                 <FaUserCircle className='text-2xl' />
             </div>
           ) : (
            <div  className=' flex gap-3'>
                 <button className='  border uppercase text-white bg-[#6B8DE6] border-[#6B8DE6] p-1 rounded-md px-2'  onClick={()=>{
                    navigate('/signin')
                 }}>Login</button>
                 <button className='  border uppercase text-white bg-[#6B8DE6] border-[#6B8DE6] p-1 rounded-md px-2' onClick={()=>{
                    navigate('/signup')
                 }}>SignUp</button>
            </div>
           )
        }
    </div> 
    </div>
  )
}

export default Navbar
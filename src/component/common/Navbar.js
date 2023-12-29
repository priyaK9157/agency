import React from 'react'
import { IoLogoWechat } from "react-icons/io5";
import { TbBellRinging2Filled } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdFactCheck } from "react-icons/md";
import signlogo from '../../asset/signlogo.png'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className=' mt-5 flex justify-between items-center p-2 border max-w-[90%] shadow-md mx-auto rounded-full'>
    <div>
        <img src={signlogo} className='h-12'></img>
    </div>
    <div className='flex gap-5'>
        <p className='flex items-center text-lg font-semibold cursor-pointer' onClick={()=>{
           navigate('/')
        }}><IoMdHome /> Home</p>
        <p className='flex items-center text-lg font-semibold cursor-pointer' onClick={()=>{
            navigate('/influencerPlan')
        }}>Influencer Plan</p>
        <p className='flex items-center text-lg text-[#6B8DE6] font-semibold cursor-pointer' onClick={()=>{
           navigate('/campaignlist');
        }}><MdFactCheck /> Campaign</p>
    </div>
    <div className='flex gap-5'>
        <IoLogoWechat className='text-2xl text-[#6B8DE6]' />
        <TbBellRinging2Filled className='text-2xl text-[#6B8DE6]' />
        <FaUserCircle className='text-2xl' />
    </div>
    </div>
  )
}

export default Navbar
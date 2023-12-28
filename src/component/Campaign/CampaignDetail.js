import React from 'react'
import Navbar from '../common/Navbar'
import { FaSearch } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation } from 'react-router-dom';


const CampaignDetail = () => {
    const location = useLocation();
    const { name, description, image } = location.state || {};
    console.log('Received data in CampaignDetail:', name, description, image);
  return (
    <div className=''>
        <Navbar/>

        <div className='flex justify-around mt-3'>
            <p className='text-3xl font-bold'>CampaignDetail</p>
            <div className='flex items-center border'>
            <FaSearch /><input placeholder='Search' className=' px-5'></input>
            </div>
            <div className='flex gap-2'>
                <button className='text-[#6B8DE6]'>MASSAGES</button>
                <button className='text-[#6B8DE6] border border-[#6B8DE6] rounded-lg p-2'>ANALYSIS</button>
                <button className='bg-[#6B8DE6] text-white p-2 rounded-lg'>INVITE MORE</button>
            </div>
        </div>

        <div className='flex justify-between m-4 px-1'>
            <p className='flex items-center text-[#6B8DE6]'><FaArrowLeft />Back</p>
            <div className='flex gap-3'>
                <button className='bg-[#0288D1] p-2 rounded-lg text-white'>PAYMENT RECORD</button>
                <button className='bg-[#6B8DE6] p-2 rounded-lg text-white'>SHARE WITH BRAND</button>
            </div>
        </div>

        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={image} alt="Campaign Image" />
        </div>

        <div></div>
    </div>
  )
}

export default CampaignDetail
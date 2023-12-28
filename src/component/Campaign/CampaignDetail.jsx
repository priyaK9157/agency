import React from 'react'
import { useSelector } from 'react-redux'
import { FaSearch } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const CampaignDetail = () => {

    const{names,para,img}=useSelector((state)=>state.campaign)
  return (
    <div>
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

        <div className='flex gap-3 ml-5'>
            <img src={img} alt="Campaign Image" />
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-bold'>{names}</h1>
              <p>{para}</p>
            </div>
        </div>
    </div>
  )
}

export default CampaignDetail
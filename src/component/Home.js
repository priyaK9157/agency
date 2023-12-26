import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdFactCheck } from "react-icons/md";
import Frame19 from '../asset/Frame19.png'
import Frame20 from '../asset/Frame20.png'
import { FaArrowTrendUp } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
        <div className='flex flex-col gap-6 justify-between'>
            <div className='flex justify-center gap-5 p-4'>
                <p className='flex items-center'><IoMdHome />Home</p>
                <p className='flex items-center'><MdFactCheck />Campaign</p>
            </div>
            <div className='flex justify-center px-14'>
                <img src={Frame19}></img>
                <img src={Frame20}></img>
            </div>
            <div className='flex gap-6'>
                <div className='bg-[#E3F5FF] p-5 rounded-xl shadow-lg'>
                    <p className='font-bold text-xl'>views</p>
                    <p className='flex'><span className='gont-bold text-2xl'>721K</span><p>+11.01%</p><FaArrowTrendUp /></p>
                </div>
                <div className='bg-[#E5ECF6] p-5 rounded-xl shadow-lg'>
                    <p className='font-bold text-xl'>views</p>
                    <p className='flex'><span className='gont-bold text-2xl'>721K</span><p>+11.01%</p><FaArrowTrendUp /></p>
                </div>
                <div className='bg-[#E3F5FF] p-5 rounded-xl shadow-lg'>
                    <p className='font-bold text-xl'>views</p>
                    <p className='flex'><span className='gont-bold text-2xl'>721K</span><p>+11.01%</p><FaArrowTrendUp /></p>
                </div>
                <div className='bg-[#E5ECF6] p-5 rounded-xl shadow-lg'>
                    <p className='font-bold text-xl'>views</p>
                    <p className='flex'><span className='gont-bold text-2xl'>721K</span><p>+11.01%</p><FaArrowTrendUp /></p>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../component/common/Navbar'

const Payment = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <div className='flex justify-around p-3'>
                <div>
                    <p className='text-2xl font-bold'>Campaign Detail</p>
                </div>
                <div>
                    <input placeholder='Search' className='border px-3 py-1'></input>
                </div>
                <div className='flex gap-3'>
                    <button className='text-[#6B8DE6]'>MESSAGE</button>
                    <button className='text-[#6B8DE6] border border-[#6B8DE6] p-2'>ANALYSIS</button>
                    <button className='bg-[#6B8DE6] text-white p-2 rounded-lg'>INVITE MORE</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Payment
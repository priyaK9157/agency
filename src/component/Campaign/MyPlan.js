import React from 'react'
import Navbar from '../common/Navbar'
import Left from '../common/Left'

const MyPlan = () => {
    
  return (
    <div className=' mt-5'>
       <Navbar/>
        <div className=' mt-3 flex justify-around'>
             <p className=' text-2xl font-semibold'>Influencer List</p>
             <input placeholder=' search' className=' border border-slate-300 w-[30%] rounded-md p-2 outline-none'/>
             <div className=' flex gap-3'>
             <button className=' mt-2 border text-[#6B8DE6] p-1 rounded-md px-2 uppercase'>Shorts with ai</button>
                        <button className=' mt-2 border text-[#6B8DE6] border-[#6B8DE6] p-1 rounded-md px-2 uppercase'>Invite</button>
                        <button className=' mt-2 border text-white bg-[#6B8DE6] border-[#6B8DE6] p-1 rounded-md px-2 uppercase'>influencer detail</button>
             </div>
        </div>

        {/*left side*/}
        <div>
             <Left/>
        </div>
    </div>
  )
}

export default MyPlan
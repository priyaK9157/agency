import React from 'react'
import {FaInstagram,FaYoutube} from "react-icons/fa"

const Ongoing = ({data}) => {
  return (
<div className=' mt-4'>
    {
       data? (
           <div className=' border-b-2 border-slate-400 '>
                 {
                   data?.map((data,index)=>(
                       <div className=' mt-3 pb-6 border-b-2 border-slate-200 flex justify-around  w-9/12 mx-auto ' key={index}>
                           <p>{data.name}</p>
                           <div>
                               <div className=' flex items-center gap-2'>
                                  <FaInstagram className=' text-xl text-[#D800B9]' />
                                  <p className=' text-slate-500'>{data?.platform}</p>
                               </div>
                               <div className=' flex items-center gap-2'>
                                  <FaYoutube className=' text-xl text-[#FF0000] ' />
                                  <p className=' text-slate-500'>{data?.platform}</p>
                               </div>
                           </div>
                            <div>
                              <p className=' text-slate-700'>{data?.detail1}</p>
                              <p className=' text-slate-700'>{data?.detail2}</p>
                            </div>
                            <div className=' text-slate-600'>
                               {data?.gender}
                            </div>
                            <div className=' text-slate-500'>
                                {data?.price}
                            </div>
                            <button className=' bg-red-500  rounded-lg px-2 text-white'>
                               {data?.status}
                            </button>
                       </div>
                   ))
                 }
           </div>
       ) : (
          <div  className=' flex justify-center'>
                
          </div>
       )
    }
</div>
  )
}

export default Ongoing
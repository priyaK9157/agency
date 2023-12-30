import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import user from '../../../asset/user.png';

const EchOnboard = ({data}) => {
  return (
    <div>
         <div className='text-sm'>
                        {data?.map((item, index) => (
                        <div key={index} className='flex gap-20 items-center border-b p-2'>
                            <p className='flex items-center gap-2'>
                                <img src={user}></img>
                                {item.name}
                            </p>
                            <div className='flex gap-2 flex-col'>
                            <p className='flex items-center gap-1'><IoLogoInstagram className='text-red-500'/>{item.Platform1}</p>
                            <p className='flex items-center gap-1 '><FaYoutube className=' text-red-500'/>{item.Platform2}</p>
                            </div>
                            <div className='flex gap-2 flex-col'>
                            <p>{item.Audience1}</p>
                            <p>{item.Audience2}</p>
                            </div>
                            <p className='px-2'>{item.Gender}</p>
                            <p className='px-10'>{item.EarnedAmount}</p>
                            <button className='bg-[#0000001A] px-2 rounded-xl'>{item.Status}</button>
                        </div>
                        ))}
                    </div>
    </div>
  )
}

export default EchOnboard
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {FaInstagram,FaYoutube} from "react-icons/fa"
import Navbar from '../common/Navbar';
import Shortlishted from '../Influencer/TABS/Shortlishted';
import SharedInf from '../Influencer/TABS/SharedInf';
import Ongoing from '../Influencer/TABS/Ongoing';

const CampaignDetail = () => {

    const{names,para,img}=useSelector((state)=>state.campaign)
   const[clickout,setClickout]=useState(0);

   const data = [
    {
        name :  "Jeremy Jane",
        platform : "Instagram",
        platform1:"Youtube",
        detail1 : "Follower 1M",
        detail2: "Subscriber 1M",
        price : "737",
        gender : "Male",
        status : "not connected"
    },

    {
        name :  "Jeremy Jane",
        platform : "Instagram",
        platform1:"Youtube",
        detail1 : "Follower 1M",
        detail2: "Subscriber 1M",
        price : "737",
        gender : "Male",
        status : "not connected"
    },
]
  return (
    <div>
        <Navbar/>
        <div className=' mt-10'>
             <div className=' flex justify-around'>
                  <p className=' text-2xl font-semibold'>Campaign Detail</p>
                  <input placeholder='search' className=' border border-slate-300 w-[30%] rounded-md p-2 outline-none'/>
                  {/*button*/}
                  <div className=' flex gap-3'>
                        <button className=' mt-2 border text-[#6B8DE6] border-[#6B8DE6] p-1 rounded-md px-2 uppercase'>Messages</button>
                        <button className=' mt-2 border text-[#6B8DE6] border-[#6B8DE6] p-1 rounded-md px-2 uppercase'>Analysis</button>
                        <button className=' mt-2 border text-white bg-[#6B8DE6] border-[#6B8DE6] p-1 rounded-md px-2 uppercase'>Invite More</button>
                  </div>
             </div>

             <div className='  flex w-10/12 mx-auto justify-between mt-2'>
                 <div className=' text-[#6B8DE6]'>Back</div>
                 <div className=' flex gap-3'>
                  <button className=' bg-[#0288D1] mt-2 uppercase border text-white  border-[#6B8DE6] p-2 rounded-md px-2'>Payment Record</button>
                  <button className=' mt-2 border uppercase text-white bg-[#6B8DE6] border-[#6B8DE6] p-2 rounded-md px-2'>Share With Brand</button>
                 </div>
             </div>

             {/*main part*/}
             <div className=' w-10/12 mx-auto justify-between'>
                  <div className=' flex  gap-4'>
                       <img src={img}/>
                       <div className=' flex flex-col gap-3'>
                           <p className='font-semibold text-lg'>{names}</p>
                           <p className=' max-w-[60%]'>{para}</p>
                       </div>
                  </div>

                  <div className=' flex gap-5 mt-10 justify-end  w-11/12'>
                       {/*instagram*/}
                       <div className=' flex items-center gap-2 bg-[#6B8DE6] bg-opacity-20 p-1 px-2 rounded-md'>
                            <FaInstagram className=' text-2xl text-[#D800B9]' />
                            <p>instagram</p>
                       </div>
                       {/*youtube*/}
                       <div className=' flex items-center gap-2 bg-[#6B8DE6] bg-opacity-20 p-1 px-2 rounded-md'>
                            <FaYoutube className=' text-2xl text-[#FF0000] ' />
                            <p>youtube</p>
                       </div>
                 </div>
             </div>

             <div className=' mt-7 flex gap-8 bg-[#6B8DE6] p-2 bg-opacity-20  px-2 rounded-md w-9/12 mx-auto'>
            <p  className=' ml-8 text-[#6B8DE6] cursor-pointer uppercase' onClick={()=>{
               setClickout(0);
            }}>Shortlisted Influencers </p>
            <p className='text-[#6B8DE6] cursor-pointer uppercase' onClick={()=>{
                setClickout(1);
            }}>SHARED influencer </p>

             <p className='text-[#6B8DE6] cursor-pointer uppercase' onClick={()=>{
                 setClickout(2);
            }}>Ongoing influencer  </p>
             </div>
              
               <div>
                        {/*top level */}
                        <div className=' mt-3 w-9/12 mx-auto flex  bg-slate-200 p-2 justify-around'>
                            <p>Name</p>
                            <p>PlatForm</p>
                            <p>Price</p>
                            <p>Gender</p>
                            <p>Price</p>
                            <p>Status</p>
                       </div>

                       <div>
                         {
                             clickout==0 ? (
                                 <Shortlishted data={data}/>
                             ) : clickout===1 ? (
                                  <SharedInf data={data}/>
                             ): (
                               <Ongoing data={data}/>
                             )
                                  
                             
                         }
                       </div>
               </div>
        </div>
    </div>
  )
}

export default CampaignDetail
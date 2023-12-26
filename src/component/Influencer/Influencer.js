import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image1 from "../../Assets/49e58d5922019b8ec4642a2e2b9291c2.png"
import {FaInstagram,FaYoutube} from "react-icons/fa"
const Influencer = () => {
   
    const token = localStorage.getItem('Token');
    const[data,setdata]=useState();
    async function getInfluencerPlan(){
        try{
            const data={
                 "filters": {
                    "name": "none"
                  },
                 page:1,
                 pageSize:1
            }
             const response=await axios.post("https://agencyapi.getmentore.com/groups/list",data,token)
             if(response){
                 setdata(response?.data?.results);
             }
        } catch(error){
            console.log("error",error.message)
        }
    }

    useEffect(()=>{
        getInfluencerPlan();
    },[])

    const data1 = [
        {
          
          name: "Dettol",
          description:
            "Lorem ipsum dolor sit amet consectetur. Pellentesque viverra sed sed sit. Blandit lacus malesuada eu eleifend cras enim nunc mattis sit sollicitudin a.",
        
          report : "VIEW PLAN DETAILS",
          instagram : "Instagram",
          youtube : "YouTube"
        },
        {
          
            name: "Dettol",
            description:
            "Lorem ipsum dolor sit amet consectetur. Pellentesque viverra sed sed sit. Blandit lacus malesuada eu eleifend cras enim nunc mattis sit sollicitudin a.",
          
            report : "VIEW PLAN DETAILS",
            instagram : "Instagram",
            youtube : "YouTube"
        },
        {
           
            name: "Dettol",
            description:
            "Lorem ipsum dolor sit amet consectetur. Pellentesque viverra sed sed sit. Blandit lacus malesuada eu eleifend cras enim nunc mattis sit sollicitudin a.",
         
            report : "VIEW PLAN DETAILS",
            instagram : "Instagram",
            youtube : "YouTube"
        },
      ];
    
  return (
    <div className=' mt-10'>
        <div className=' flex justify-around'>
              <p className=' text-2xl text-black  font-bold'>Influencer Plan</p>
              <input placeholder='search' className='h-[40px] w-[30rem] border border-slate-300 pl-2  outline-none'  />
              <button  type="button" className="  rounded-xl ml-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Create Plan
              </button>
        </div>
        {data1 ? (
             <div className=' mt-10'>
             {data1?.map((data, index) => (
                                <div key={index} className='flex gap-3 w-11/12 justify-center mx-auto'>
                                  
                                    <div className=' gap-3'>
                                        <p className="text-black font-roboto text-xl font-semibold">{data.name}</p>
                                        <p className=' text-slate-500 max-w-[63%]'>{data.description}</p>
                                        <button className=' mt-4 bg-[#6B8DE6] bg-opacity-20 p-1 rounded-md px-2  text-[#6B8DE6]'>50+ Influencer</button>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-4   py-5'>
                                                <button className='flex items-center  gap-3'><FaInstagram  className=' text-2xl text-[#D800B9]'/>{data.instagram}</button>
                                                <button className='flex items-center gap-3'><FaYoutube className='text-2xl text-[#FF0000] ' />{data.youtube}</button>
                                            </div>
                                            <div className='flex gap-4'>
                                               
                                                <button className=' border border-[#6B8DE6] px-3 rounded-lg'>{data.report}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
             </div>
        ):(
            <div className=' mt-20 flex  justify-center items-center'>
                <img src={image1} />
            </div>
        )}
    </div>
  )
}

export default Influencer
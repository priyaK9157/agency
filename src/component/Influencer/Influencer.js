import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image1 from "../../Assets/49e58d5922019b8ec4642a2e2b9291c2.png"
import {FaInstagram,FaYoutube} from "react-icons/fa"
import Navbar from '../common/Navbar'
import { useNavigate } from 'react-router-dom'
const Influencer = () => {
   
    const token = localStorage.getItem('Token');
    const[data,setdata]=useState();
    const navigate=useNavigate();
    async function getInfluencerPlan(){
        try{
            const data={
                 "filters": {
                  
                  },
                 page:1,
                 pageSize:1
            }
            const response=await axios.post("https://agencyapi.getmentore.com/groups/list",data,{
                headers: {
                Authorization: `Bearer ${token}`,
                }
            })
             console.log("res",response)
             if(response){
                 setdata(response?.data?.data?.results);
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
    <div >
        <Navbar/>
        <div className=' flex justify-around mt-10'>
              <p className=' text-2xl text-black  font-bold'>Influencer Plan</p>
              <input placeholder='search' className='h-[40px] w-[30rem] border border-slate-300 pl-2  outline-none'  />
              <button  type="button" onClick={()=>{
                  navigate('/createplan');
              }} className="  rounded-xl ml-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Create Plan
              </button>
        </div>
        {data?.length>=1 && data[0]?.name!=='string'  ? (
             <div className=' mt-10'>
             {data?.map((data, index) => (
                                <div key={index} className='flex gap-3 w-11/12 justify-center mx-auto'>
                                  
                                    <div className=' gap-3'>
                                        <p className="text-black font-roboto text-xl font-semibold">{data.name}</p>
                                        <p className=' text-slate-500 max-w-[63%]'>{data.description}</p>
                                        <button className=' mt-4 bg-[#6B8DE6] bg-opacity-20 p-1 rounded-md px-2  text-[#6B8DE6]'>50+ Influencer</button>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-4   py-5'>
                                                <div>
                                                     {
                                                         data.platforms.map((data,index)=>(
                                                             <div key={index}>
                                                                <div>{data}</div>
                                                             </div>
                                                         ))
                                                     }
                                                </div>
                                               
                                            </div>
                                            <div className='flex gap-4'>
                                               
                                                <button className=' border border-[#6B8DE6] px-3 rounded-lg' onClick={()=>{
                                                     navigate('/influencerDetail');
                                                }}>{data.report}</button>
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
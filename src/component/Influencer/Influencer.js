import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image1 from "../../Assets/49e58d5922019b8ec4642a2e2b9291c2.png"
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
  return (
    <div className=' mt-10'>
        <div className=' flex justify-around'>
              <p className=' text-2xl text-black  font-bold'>Influencer Plan</p>
              <input placeholder='search' className='h-[40px] w-[30rem] border border-slate-300 pl-2  outline-none'  />
              <button  type="button" className="  rounded-xl ml-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Create Plan
              </button>
        </div>
        {data ? (
             <div className=' mt-10'>
                    {
                        data?.map((data,index)=>{
                         return   <div className=' w-[1012px] h-[197px] text-white flex justify-between' key={index}>
                                <div>
                                    <h1 className=' text-2xl ' >Dettols</h1>
                                    <p className=' text-slate-500'>Lorem ipsum dolor sit amet consectetur. Pellentesque viverra sed sed sit. Blandit lacus malesuada eu eleifend cras enim nunc mattis sit sollicitudin a.</p>
                                    <button type="button" className="  rounded-xl ml-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    50+ Influencer
                                    </button>
                                </div>
                                <div>
                                    <p>Ongoing</p>
                                    <p>Food</p>
                                    <p>India</p>
                                </div>
                            </div>
                        })
                    }
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
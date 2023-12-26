import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {FaInstagram,FaYoutube} from "react-icons/fa"
import image1 from "../../Assets/no-document-or-data-found-ui-illustration-design-free-vector.jpg"
import Shortlishted from './TABS/Shortlishted';
import Reachedout from './TABS/Reachedout';

const InfluencerDetail = () => {

    const[clickout,setClickout]=useState(0);
    const[shortlisted,setShortlisted]=useState();
    const[reachedOut,SetReachedOut]=useState()
    const token = localStorage.getItem('Token');
    
   async  function getShortlishtedInf(){
       try{
            const response=await axios.post("https://agencyapi.getmentore.com/responses/shortlist",{}, {
               headers: {
                 Authorization: `Bearer ${token}`,
               },})

               if(response){
                    setShortlisted(response.data);
               }
       } catch(error){
           console.log("error",error.message)
       }
    }
    
    async  function GetReachedOut(){
     try{
          const response=await axios.post("https://agencyapi.getmentore.com/responses/reach-out",{}, {
             headers: {
               Authorization: `Bearer ${token}`,
             },})

             if(response){
               SetReachedOut(response.data);
             }
     } catch(error){
         console.log("error",error.message)
     }
  }

    useEffect(()=>{
       getShortlishtedInf();
    })
  return (
    <div className=' mt-10 '>
       <div className=' flex justify-around '>
            <h1 className="text-Light-Text-Primary font-roboto text-3xl font-semibold leading-[123.5%] tracking-[0.25px]">Influencer Plan</h1>
             <input placeholder='search' className='h-[40px] w-[30rem] border border-slate-300 pl-2  outline-none'  />
              <button  type="button" className="  rounded-xl ml-12 text-white bg-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Add Influencer
              </button>
       </div>

       <div className=' mt-7 ml-32'>
             <div>
                    <h1 className="text-[rgba(0, 0, 0, 0.80)] font-roboto text-lg font-semibold">Dettols</h1>
                    <p className=' text-slate-600 max-w-[47%]'>Lorem ipsum dolor sit amet consectetur. Pellentesque viverra sed sed sit. Blandit lacus malesuada eu eleifend cras enim nunc mattis sit sollicitudin a.</p>
                    <button className=' mt-4 bg-[#6B8DE6] bg-opacity-20 p-1 rounded-md px-2  text-[#6B8DE6]'>50+ Influencer</button>
             </div>

             <div>
                 {/*shortlisted reached */}
                 <div>

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
       </div>

       {/*tabs*/}
       <div className=' mt-10 flex gap-8 bg-[#6B8DE6] bg-opacity-20 p-1 px-2 rounded-md w-9/12 mx-auto'>
            <p  className=' ml-8 text-[#6B8DE6] cursor-pointer' onClick={()=>{
                setClickout(0);
            }}>Shortlisted Influencers </p>
            <p className='text-[#6B8DE6] cursor-pointer' onClick={()=>{
                setClickout(1);
            }}>Reached Out INFLUENCERS</p>
       </div>

       {/*details influencer shortlisted*/}
       <div>
               {/*top level */}
               <div className=' mt-3 w-9/12 mx-auto flex  bg-slate-200 p-2 justify-around'>
                    <p>Name</p>
                    <p>PlatForm</p>
                    <p>Price</p>
                    <p>Gender</p>
                    <p>Status</p>
               </div>
               {/*lower level*/}
               <div>
                    {
                          clickout === 0 ? (
                               <Shortlishted data={shortlisted}/>
                          ) : (
                              <Reachedout data={reachedOut}/>
                          )
                    }
               </div>
       </div>
    </div>
  )
}

export default InfluencerDetail
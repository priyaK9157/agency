import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {FaInstagram,FaYoutube} from "react-icons/fa"
import image1 from "../../Assets/no-document-or-data-found-ui-illustration-design-free-vector.jpg"
import Shortlishted from './TABS/Shortlishted';
import Reachedout from './TABS/Reachedout';
import Navbar from '../common/Navbar';
import { useNavigate } from 'react-router-dom';
import "./Influencer.css"
import image2 from "../../Assets/Group 1000001634.png"
import image3 from "../../Assets/image 2 (1).png"
import {IoIosCloseCircle} from "react-icons/io"

const InfluencerDetail = () => {

    const[clickout,setClickout]=useState(0);
    const[reachout,setReachout]=useState(-1);
    const[shortlisted,setShortlisted]=useState();
    const[reachedOut,SetReachedOut]=useState()
    const token = localStorage.getItem('Token');
    const Navigate=useNavigate();
   async  function getShortlishtedInf(){
       try{
            const response=await axios.post("https://agencyapi.getmentore.com/responses/shortlist",{}, {
               headers: {
                 Authorization: `Bearer ${token}`,
               },})
               console.log(response)

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
       GetReachedOut();
    })
   
  return (
    < >
    <Navbar/>
               <div>
               <div className=' flex justify-around mt-10 relative '>
               <h1 className="text-Light-Text-Primary font-roboto text-3xl font-semibold leading-[123.5%] tracking-[0.25px]">Influencer Plan</h1>
               <input placeholder='search' className='h-[40px] w-[30rem] border border-slate-300 pl-2  outline-none'  />
               <div className=' flex '>
                         <button  type="button" className=" rounded-xl  text-white bg-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none">
                              Add Influencer
                         </button>
                         <button  type="button" className="  rounded-xl  text-white bg-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none">
                              Invite More
                         </button>
               </div>
          </div>

          <div className=' mt-7 ml-32'>
               <div>
                         <h1 className="text-[rgba(0, 0, 0, 0.80)] font-roboto text-lg font-semibold">Dettols</h1>
                         <p className=' text-slate-600 max-w-[47%]'>Lorem ipsum dolor sit amet consectetur. Pellentesque viverra sed sed sit. Blandit lacus malesuada eu eleifend cras enim nunc mattis sit sollicitudin a.</p>
                         <button className=' mt-4 bg-[#6B8DE6] bg-opacity-20 p-1 rounded-md px-2  text-[#6B8DE6]'>50+ Influencer</button>
               </div>

               <div>
                    {/*shortlisted reached */}
                    <div className=' mt-7  flex  justify-between w-11/12'>
                              <div className=''>
                                   <div className=' flex justify-between'>
                                             <div>
                                                  Shortlishted
                                             </div>
                                             <div>
                                                  Reachedout
                                             </div>

                                             <div>
                                                  Final List
                                             </div>
                                   </div>
                                   <div className=' flex items-center'>
                                        <div className=' translate-y-2 bg-[#00E817] h-3 w-3  rounded-3xl'></div>
                                        <div>___________________</div>
                                        <div className=' translate-y-2 bg-[#00E817] h-3 w-3  rounded-3xl'></div>
                                        <div>___________________</div>
                                        <div className=' translate-y-2 bg-[#00E817] h-3 w-3  rounded-3xl'></div>
                                   </div>
                              </div>
                              <div>
                              <button  type="button" className="  rounded-xl  text-white bg-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                   View Plan Details
                                   </button>
                              </div>
                    </div>
                    <div className=' flex justify-between gap-5 mt-10   w-11/12'>
                         <div className=' flex gap-3'>
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
                         <div>
                         <button onClick={()=>{
                              setReachout(0)
                         }}  type="button" className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">
                              Reach-Out
                         </button>
                         <button onClick={()=>{
                                setReachout(1);
                         }}  type="button" className="  rounded-xl  text-white bg-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">
                              Negotiate
                         </button>
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
          
            {
               reachout===0 && (
                      <div className=' modal-background'>
                          <div className='modal-content'>
                          <IoIosCloseCircle className=' text-2xl -translate-y-6 cursor-pointer'  onClick={()=> setReachout(false)}/>
                              <p className=' text-black font-semibold text-lg'>Reach Out Influencers</p>

                              <div>
                                   <div className=' mt-2 flex gap-44 p-1 rounded-xl   w-[50rem]  bg-slate-300'>
                                        <p className=' px-5'>Name</p>
                                        <p>Customized Mesage</p>
                                   </div>
                                   <div className='  flex mt-5 gap-44'>
                                        <p className=' ml-3 translate-x-6 flex  justify-center '>Jeremy Jane</p>
                                        <textarea className=' uppercase border border-slate-300 p-7 w-[26rem] h-[10rem] ' placeholder=' Type A message'/>
                                   </div>
                              </div>

                              <div className=' mt-4'>
                                  <h1 className=' text-black font-semibold text-lg'>Select Dilevery Type</h1>
                                        <div className=' flex gap-2 mt-2'>
                                             <button className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2 me-2 mb-2   focus:outline-none ">Reels</button>
                                             <button className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">Stories</button>
                                             <button className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">Integrated Video</button>
                                             <button className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">Dedivated Video</button>
                                             <button className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">Shorts Video</button>
                                        </div>

                              </div>

                              <div className=' mt-3'>
                                   <h1 className=' text-black font-semibold text-lg'>Contact Via</h1>
                                  <div className=' flex justify-between items-center '>
                                      <div className=' flex mt-2 gap-3 items-center'>
                                             <img src={image2}/>
                                             <img src={image3} className=' h-6'/>
                                        </div>
                                        <button className="  rounded-xl  text-white bg-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">Proceed</button>
                                  </div>
                                   
                              </div>
                         </div>
                      </div> 
                )
            }

            {
               reachout===1 && (
                      <div className=' modal-background'>
                          <div className='modal-content'>
                          <IoIosCloseCircle className=' text-2xl -translate-y-6 cursor-pointer'  onClick={()=> setReachout(false)}/>
                              <p className=' text-black font-semibold text-lg'>Negotiate Influencers </p>

                              <div>
                                   <div className=' mt-2 flex gap-44 p-1 rounded-xl   w-[50rem]  bg-slate-300'>
                                        <p className=' px-5'>Name</p>
                                        <p>Price</p>
                                        <p>Negotiate Price</p>
                                   </div>
                                   <div className='  flex mt-5 gap-44'>
                                        <p className=' ml-3 translate-x-6 flex  justify-center '>Jeremy Jane</p>
                                        <div className='   w-[50rem]  text-slate-500  flex flex-col gap-3 '>
                                             <div  className=' flex justify-between'>
                                                  <p>Reel</p>
                                                  <p>$800</p>
                                             </div>
                                             <div  className=' flex justify-between'>
                                                  <p>Stories</p>
                                                  <p>$800</p>
                                             </div>
                                             <div  className=' flex justify-between'>
                                                  <p>Integrated Video</p>
                                                  <p>$800</p>
                                             </div>
                                             <div  className=' flex justify-between'>
                                                  <p>Dedivated Video</p>
                                                  <p>$800</p>
                                             </div>
                                             <div  className=' flex justify-between'>
                                                  <p>Shorts</p>
                                                  <p>$800</p>
                                             </div>
                                        </div>
                                        <div className=' -translate-x-28 flex flex-col gap-2'>
                                              <input placeholder='          TYPE A PRICE' className=' border border-slate-400 p-1 rounded-lg  outline-none '/>
                                              <input placeholder='          TYPE A PRICE' className=' border border-slate-400 p-1 rounded-lg  outline-none'/>
                                              <input placeholder='          TYPE A PRICE' className=' border border-slate-400 p-1 rounded-lg  outline-none'/>
                                              <input placeholder='          TYPE A PRICE' className=' border border-slate-400 p-1 rounded-lg  outline-none'/>
                                              <input placeholder='          TYPE A PRICE' className=' border border-slate-400 p-1 rounded-lg  outline-none'/>
                                        </div>
                                   </div>
                              </div>

                              <div className=' mt-4'>
                                  <h1 className=' text-black font-semibold text-lg'>Select Dilevery Type</h1>
                                        <div className=' flex gap-2 mt-2'>
                                             <button className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2 me-2 mb-2   focus:outline-none ">Reels</button>
                                             <button className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">Stories</button>
                                             <button className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">Integrated Video</button>
                                             <button className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">Dedivated Video</button>
                                             <button className="  rounded-xl   text-[#6B8DE6]   border border-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">Shorts Video</button>
                                        </div>

                              </div>

                              <div className=' mt-3'>
                                   <h1 className=' text-black font-semibold text-lg'>Contact Via</h1>
                                  <div className=' flex justify-between items-center '>
                                      <div className=' flex mt-2 gap-3 items-center'>
                                             <img src={image2}/>
                                             <img src={image3} className=' h-6'/>
                                        </div>
                                        <button className="  rounded-xl  text-white bg-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">Proceed</button>
                                  </div>
                                   
                              </div>
                         </div>
                      </div> 
                )
            }


    </>
  )
}

export default InfluencerDetail
import React from 'react'
import Navbar from '../common/Navbar'
import { useNavigate } from 'react-router-dom'

const InfluencerOnboard = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Navbar/>
        <h1 className=' text-2xl  font-semibold mt-10 ml-24'>Influencer Onboarding Form</h1>
        {/*form*/}
        <div className=' mt-8  w-9/12 mx-auto  flex flex-col justify-center'>
            <fieldset className=" ml-10 p-[7px] border-slate-500">
                 <legend  className="text-md text-slate-400">Influencer Name</legend>
                 <input placeholder='JOHN'  className='border-none bg-slate-100 p-1 w-[28rem] outline-none'/>
            </fieldset>

            <fieldset  className=" ml-10 p-[7px] border-slate-500">
                 <legend  className="text-md text-slate-400">Expected Amount</legend>
                 <input placeholder='$ 800'  className='border-none bg-slate-100 p-1 w-[28rem] outline-none'/>
            </fieldset>

            <fieldset  className=" ml-10 p-[7px] border-slate-500">
                 <legend className="text-md text-slate-400">Category</legend>
                 <input placeholder='Fashion' className='border-none bg-slate-100 p-1 w-[28rem] outline-none'/>
            </fieldset>
            {/*media type*/}
            <div  className=' ml-10 mt-3' >
                <p className=' text-slate-600'>Media Type</p>
                 <div className=' flex gap-3 items-center'>
                    <div className=' mt-1 flex gap-2 items-center'>
                            <input name='insta' type='checkbox'/>
                            <label form='insta'>Instagram</label>
                        </div>

                    <div className=' mt-2 flex gap-2 items-center'>
                    <input name='You' type='checkbox'/>
                        <label form='You'>Youtube</label>
                    </div>
                 </div>
            </div>

            {/*deilevery type*/}
            <div className=' ml-10 mt-4 flex gap-10'>
                  {/*left side*/}
                   <div>
                    <h1 className=' text-slate-500'>Delivery type</h1>
                     <div className=' flex flex-col'>
                        <button className=' mt-2 border border-[#6B8DE6] p-1 rounded-md px-2'>Reels</button>
                        <button className=' mt-2 border border-[#6B8DE6] p-1 rounded-md '>Shorts </button>
                     </div>
                   </div>

                   {/*right side*/}
                   <div>
                       <h1 className=' text-slate-500'>Price</h1>
                       <input placeholder='$8.76'   className=' mt-2 border border-slate-200 p-1 outline-none'/> <br></br>
                       <input placeholder='$5.52' className=' mt-2 border border-slate-200 p-1 outline-none'/>
                   </div>
            </div>

            {/*message*/}
            {/*description*/}
            <fieldset className="border mt-3 ml-10 ">
                                        <legend className="text-sm  text-slate-500 px-3">Message</legend>
                                        <textarea 
                                        placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. " className=' p-2 px-2 border-none border border-slate-300 w-[28rem] h-32 outline-none'
                                        />
                    </fieldset>

            {/*button*/}
            <div className=' mt-[4rem] w-7/12 mx-auto flex justify-end '>
                    <button  onClick={()=>{
                        navigate('/')
                    }}  type="button" className="  rounded-xl ml-12 text-white bg-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Save
            </button>
        </div>
        </div>
    </div>
  )
}

export default InfluencerOnboard
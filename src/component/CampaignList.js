import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdFactCheck } from "react-icons/md";
import signlogo from '../asset/signlogo.png'
import { IoLogoWechat } from "react-icons/io5";
import { TbBellRinging2Filled } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Frame50 from '../asset/Frame50.png'

const CampaignList = () => {
  return (
    <div>
        <div className=''>
            <div className='flex justify-between items-center p-2 border max-w-[90%] shadow-md mx-auto rounded-full'>
            <div>
                <img src={signlogo} className='h-12'></img>
            </div>
            <div className='flex gap-5'>
                <p className='flex items-center text-lg font-semibold'><IoMdHome /> Home</p>
                <p className='flex items-center text-lg text-[#6B8DE6] font-semibold'><MdFactCheck /> Campaign</p>
            </div>
            <div className='flex gap-5'>
                <IoLogoWechat className='text-2xl text-[#6B8DE6]' />
                <TbBellRinging2Filled className='text-2xl text-[#6B8DE6]' />
                <FaUserCircle className='text-2xl' />
            </div>
            </div>

            <div className='flex justify-around gap-4 p-4'>
                <div className='font-bold text-2xl'>Campaign List</div>
                <div className='flex border gap-3 items-center'><FaMagnifyingGlass />
                    <input placeholder='Search'></input>
                </div>
                <div className='flex gap-3'>
                    <button className='bg-[#6B8DE6] text-white rounded-lg p-2'>PAYMENT RECORD</button>
                    <button className='bg-[#0288D1] text-white rounded-lg p-2'>CREATE CAMPAIGN</button>
                </div>
            </div>

            <div className='flex justify-around gap-8 p-16'>
                <div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-bold text-lg">Campaign Status</label>

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Active Campaign</label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="upcoming" />
                            <label htmlFor="upcoming">Upcoming Campaign</label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="past" />
                            <label htmlFor="past">Past Campaign</label>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                            <label className="font-bold text-lg">Platform</label>

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">YouTube</label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="upcoming" />
                            <label htmlFor="upcoming">Instagram</label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="past" />
                            <label htmlFor="past">Both</label>
                        </div>
                    </div>

                    <div className="mt-4 w-full">
                        <fieldset className="border ">
                            <legend className="text-sm font-semibold">Date</legend>
                            <input
                            placeholder="Value"
                            />
                        </fieldset>
                        <fieldset className="border ">
                            <legend className="text-sm font-semibold">Search Category</legend>
                            <input
                            placeholder="Value"
                            />
                        </fieldset>
                        
                        <div className='flex flex-col space-y-2'>
                            <div className='flex items-center space-x-2'>
                                <input type='checkbox' id='autos' />
                                <label htmlFor='autos'>Autos & Vehicles</label>
                            </div>

                            <div className='flex items-center space-x-2'>
                                <input type='checkbox' id='beauty' />
                                <label htmlFor='beauty'>Beauty</label>
                            </div>

                            <div className='flex items-center space-x-2'>
                                <input type='checkbox' id='blogsTravel' />
                                <label htmlFor='blogsTravel'>Blogs and Travel</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div><img src={Frame50}></img></div>
                        <div>
                            <h1>Dettol</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Pellentesque viverra sed sed sit. Blandit lacus malesuada eu eleifend cras enim nunc mattis sit sollicitudin a.</p>
                            <button>Instagram</button>
                            <button>YouTube</button>
                        </div>
                        <div>
                            <button>ANALYSIS</button>
                            <button>VIEW DETAILS</button>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div><img src={Frame50}></img></div>
                        <div>
                            <h1>Dettol</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Pellentesque viverra sed sed sit. Blandit lacus malesuada eu eleifend cras enim nunc mattis sit sollicitudin a.</p>
                            <button>Instagram</button>
                            <button>YouTube</button>
                        </div>
                        <div>
                            <button>ANALYSIS</button>
                            <button>VIEW DETAILS</button>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div><img src={Frame50}></img></div>
                        <div>
                            <h1>Dettol</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Pellentesque viverra sed sed sit. Blandit lacus malesuada eu eleifend cras enim nunc mattis sit sollicitudin a.</p>
                            <button>Instagram</button>
                            <button>YouTube</button>
                        </div>
                        <div>
                            <button>ANALYSIS</button>
                            <button>VIEW DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CampaignList
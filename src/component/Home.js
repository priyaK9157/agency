import React from 'react';
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6';
import { Pie } from 'react-chartjs-2'; // Updated import statement
import Navbar from './common/Navbar';
import { FaArrowTrendDown } from "react-icons/fa6";
import block1 from '../asset/Block1.jpg'
import { Doughnut } from 'react-chartjs-2';
import image1 from "../Assets/Screenshot 2023-12-31 102305.png"
import { PieChart } from '@mui/x-charts/PieChart';
const Home = () => {
    const testData = [
        { label: 'United States  38.6%', value: 38.6, color: '#6B8DE6' },
        { label: 'Canada   22.5%', value: 22.5, color: '#00CF7F' },
        { label: 'Mexico  30.8%', value: 30.8, color: '#FF7361' },
        { label: 'Other   8.1%', value: 8.1, color: '#B659FF' },
      ];
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col gap-6 justify-between mt-7'>
           
            <div className='flex justify-center '>
                <img src={Frame19} className='w-[730px] h-[265px]'></img>
                <img src={Frame20} className='w-[481px] h-[265px]'></img>
            </div>

            <div className='flex justify-center gap-14 items-center -ml-7'>
                <div className='flex gap-2'>
                    <div className='bg-[#E3F5FF] py-4 px-7 rounded-xl shadow-lg h-32 p-2 flex flex-col  '>
                        <p className='font-bold  mt-2 '>views</p>
                        <div className=' flex justify-between  gap-4 mt-3 '>
                              <h1 className=' text-xl font-semibold '>721k</h1>
                              <div className=' flex gap-1 items-center'>
                              <p>+11.01%</p> 
                              <FaArrowTrendUp/>
                              </div>
                        </div>
                    </div>
                    <div className='bg-[#E5ECF6] py-4 px-7 rounded-xl shadow-lg h-32 p-2 flex flex-col  '>
                        <p className='font-bold mt-2 '>Visits</p>
                        <div className=' flex justify-between  gap-4 mt-3 '>
                              <h1 className=' text-xl font-semibold '>367K</h1>
                              <div className=' flex gap-1 items-center'>
                              <p>-0.03%</p> 
                              <FaArrowTrendUp/>
                              </div>
                        </div>
                    </div>
                    <div className='bg-[#E5ECF6] py-4 px-7 rounded-xl shadow-lg h-32 p-2 flex flex-col  '>
                        <p className='font-bold mt-2 '>New Users</p>
                        <div className=' flex justify-between  gap-4 mt-3 '>
                              <h1 className=' text-xl font-semibold '>1,156</h1>
                              <div className=' flex gap-1 items-center'>
                              <p>+15.03%</p> 
                              <FaArrowTrendUp/>
                              </div>
                        </div>
                    </div>
                    <div className='bg-[#E5ECF6] py-4 px-7 rounded-xl shadow-lg h-32 p-2 flex flex-col  '>
                        <p className='font-bold mt-2 '>Active Users</p>
                        <div className=' flex justify-between  gap-4 mt-3 '>
                              <h1 className=' text-xl font-semibold '>239K</h1>
                              <div className=' flex gap-1 items-center'>
                              <p>+6.08%</p> 
                              <FaArrowTrendUp/>
                              </div>
                        </div>
                    </div>
                </div>

                <div className='  p-4 shadow-xl '>
                    <p className='font-bold'>Active Inflencers</p>
                    <div>
                        <div className='flex p-2 gap-2'>
                            <p className='flex items-center'>YouTube</p>
                            <div className='h-2 bg-black w-52 flex items-center rounded-2xl mt-2'></div>
                        </div>

                        <div className='flex p-2 gap-2'>
                            <p className='flex items-center'>Instagram</p>
                            <div className='h-2 bg-black w-48 flex items-center rounded-2xl mt-2'></div>
                        </div>

                        <div className='flex p-2 gap-2'>
                            <p className='flex items-center'>Facebook</p>
                            <div className='h-2 bg-[#1C1C1C1A] w-48 flex items-center rounded-2xl mt-2'></div>
                        </div>
                    </div>
                </div>
            </div>
                 
            <div className=' flex justify-around items-center mx-auto w-10/12   gap-10 '>
                       <div className=' translate-x-20 translate-y-6'>
                             <img src={image1} width="760px" height="246px"/>
                       </div>
                     
                       <PieChart
                                series={[
                                {
                                    paddingAngle: 5,
                                    innerRadius: 47,
                                    outerRadius: 80,
                                    data:testData,
                                },
                                ]}
                                margin={{ right: 300 }}
                                width={200}
                                height={200}
                               
                            />
                      
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

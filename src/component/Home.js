import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdFactCheck } from "react-icons/md";
import Frame19 from '../asset/Frame19.png'
import Frame20 from '../asset/Frame20.png'
import { FaArrowTrendUp } from "react-icons/fa6";
import Navbar from './common/Navbar';
import { FaArrowTrendDown } from "react-icons/fa6";
import block1 from '../asset/Block1.jpg'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col gap-6 justify-between mt-7'>
           
            <div className='flex justify-center px-14'>
                <img src={Frame19} className='w-[60rem] h-[15rem]'></img>
                <img src={Frame20} className='w-[60rem] h-[15rem]'></img>
            </div>

            <div className='flex justify-center gap-20'>
                <div className='flex gap-2'>
                    <div className='bg-[#E3F5FF] py-4 px-7 rounded-xl shadow-lg h-24'>
                        <p className='font-bold '>views</p>
                        <p className='flex'><span className='font-bold'>721K</span><p>+11.01%</p><FaArrowTrendUp /></p>
                    </div>
                    <div className='bg-[#E5ECF6] p-5 rounded-xl shadow-lg h-24'>
                        <p className='font-bold '>Visits</p>
                        <p className='flex'><span className='font-bold'>367K</span><p>-0.03%</p><FaArrowTrendUp /></p>
                    </div>
                    <div className='bg-[#E3F5FF] p-5 rounded-xl shadow-lg h-24'>
                        <p className='font-bold '>New Users</p>
                        <p className='flex'><span className='font-bold'>1,156</span><p>+15.03%</p><FaArrowTrendDown /></p>
                    </div>
                    <div className='bg-[#E5ECF6] p-5 rounded-xl shadow-lg h-24'>
                        <p className='font-bold'>Active Users</p>
                        <p className='flex'><span className='font-bold'>239K</span><p>+6.08%</p><FaArrowTrendUp /></p>
                    </div>
                </div>

                <div>
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
            {/* <CChart
                type="doughnut"
                data={{
                    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                    datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10],
                    },
                    ],
                }}
                options={{
                    plugins: {
                    legend: {
                        labels: {
                        color: getStyle('--cui-body-color'),
                        }
                    }
                    },
                }}
                /> */}
            {/* <div>
                <img src={block1}></img>
            </div> */}
            <div></div>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import image1 from "../Assets/Screenshot 2023-12-25 112806.png"
import Step1 from './SignUpSteps/Step1'
import Navbar from './common/Navbar'
const SignUp = () => {
  
  return (
   <div>
     <Navbar/>
         <div className=' flex justify-center items-center h-screen gap-6 '>
           <div className='mt-10 ml-14'>
                  <img src={image1}/>
           </div>
           <div className='h-[590px] w-[672px] mt-20 max-w-[70%]'>
                <Step1 />
           </div>
    </div>
   </div>
  )
}

export default SignUp
import React from 'react'
import image1 from "../Assets/Screenshot 2023-12-25 112806.png"
import Step1 from './SignUpSteps/Step1'
const SignUp = () => {
  
  return (
    <div className=' flex justify-center items-center h-screen gap-6 '>
           <div>
                  <img src={image1}/>
           </div>
           <div className='   h-[590px] w-[672px]'>
                <Step1 />
           </div>
    </div>
  )
}

export default SignUp
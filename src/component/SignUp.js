import React from 'react'
import image1 from "../Assets/Screenshot 2023-12-25 112806.png"
import Step1 from './SignUpSteps/Step1'
const SignUp = () => {
  return (
    <div>
           <div>
                  <img src={image1}/>
           </div>
           <Step1/>
    </div>
  )
}

export default SignUp
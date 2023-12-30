import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
   
  const navigate=useNavigate();
  const[set,setState]=useState({
    username:'',
    CompanyEmail:'',
    Otp:'',
    PhoneNumber:'',
    Designation:'',
    Password:'',
  })
  function sendOtp(){
        console.log("company email",CompanyEmail)
         try{
              const response=axios.post("https://agencyapi.getmentore.com/agent/auth/send-email",{
                 email:CompanyEmail
              })

              if(response){
                 console.log("res",response);
              }
         } catch(error){
              console.log("error",error.message)
         }
  }
   
 async function signUp(){
      try{
        const types=Otp.toString();
         const typesss=typeof types
       
           const  response=await axios.post("https://agencyapi.getmentore.com/agent/auth/signup",{
            otp:typesss,
            email:CompanyEmail,
            password:Password,
             name:username,
             "agency": {
              "name": "",
              "logo": "",
              "description": "",
              "website": "",
              "category": "Finance and Investment",
              "gst": "",
              "pan": ""
            },
           })
        navigate('/signin')
      } catch(error){
          console.log("error",error.message)
      }
  }
  const{username,CompanyEmail,Otp,PhoneNumber,Designation,Password}=set;

  
  
  return (
    <div>
        <h1 className="text-black bg-opacity-70 font-roboto text-24 font-medium leading-normal mt-4 ml-14 text-2xl">Echio</h1>
        <p className='mt-1 ml-14 text-xl'>Sign Up</p>
        <p className=' text-slate-600 mt- ml-14 mb-2'>to access Echio Home</p>

        {/*company name and company email*/}
        <div className=' ml-14'>
         <fieldset className='flex flex-col items-start gap-3 self-stretch '>
            <legend>Name</legend>
            <input placeholder='Nike' value={username} onChange={(event)=>{
              setState({
                ...set,
                username:event.target.value
              })
            }} className='h-[40px] w-[30rem] border border-slate-300 pl-2 outline-none' />
         </fieldset>

              <br></br>
             <div className=' flex gap-4'>
                <fieldset >
                    <legend>Company Email</legend>
                    <input placeholder='support@echio.in'  value={CompanyEmail} onChange={(event)=>{
                      setState({
                        ...set,
                        CompanyEmail:event.target.value
                      })
                    }}  className='h-[40px] w-[15rem] border border-slate-300 pl-2  outline-none' />
                </fieldset>

                <fieldset>
                        <legend>OTP</legend>
                        <input placeholder='OTP'  value={Otp} onChange={(event)=>{
                          setState({
                            ...set,
                            Otp:event.target.value
                          })
                        }}  className=' border border-slate-300 w-[8rem] h-[40px] pl-2 rounded-xl outline-none'/>
                        <button type="button" onClick={sendOtp} className="  ml-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Otp</button>
                </fieldset>
             </div>
              <br></br>
     

        {/*mobile no and designation*/}
    
             <fieldset className='flex flex-col items-start gap-3 self-stretch '>
                <legend>Phone Number</legend>
                <input placeholder='+91 XXXXXXXXXX' className='h-[40px] w-[30rem] border border-slate-300 pl-2  outline-none rounded-lg' />
            </fieldset>
            <br></br>
            <fieldset className='flex flex-col items-start gap-3 self-stretch '>
                <legend>Designation</legend>
                <input placeholder='' className='h-[40px] w-[30rem] border border-slate-300 pl-2  outline-none' />
            </fieldset>
            <br></br>
     

        {/*password ans confim pasword*/}
         <div className=' flex gap-5'>
          <fieldset>
          <legend>Password</legend>
              <input type=' password' placeholder='Password' value={Password} onChange={(event)=>{
                              setState({
                                ...set,
                                Password:event.target.value
                              })
                            }}   className='h-[40px]  rounded-lg pl-2  outline-none'/>
                <br></br>
          </fieldset>
            {/* <input type='password' placeholder=' Confirm Password' className='h-[40px]  border-2  border-pink-900 rounded-lg  pl-2  outline-none'/> */}
         </div>
       </div>

        {/*finish*/}
        <button onClick={signUp}  type="button" className="  mt-9 ml-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">finish</button>
    </div>
  )
}

export default Step1
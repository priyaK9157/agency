import React from 'react'

const Step1 = () => {
  return (
    <div>
        <h1 className="text-black bg-opacity-70 font-roboto text-24 font-medium leading-normal mt-4 ml-14">Echio</h1>
        <p className='mt-2 ml-14'>Sign Up</p>
        <p className=' text-slate-600 mt- ml-14'>to access Echio Home</p>

        {/*company name and company email*/}
        <div className=' ml-14'>
         <fieldset className='flex flex-col items-start gap-3 self-stretch '>
            <legend>Name</legend>
            <input placeholder='Nike' className='h-[40px] w-[30rem] border border-slate-300 pl-2 outline-none' />
         </fieldset>

              <br></br>
              <fieldset className='flex flex-col items-start gap-3 self-stretch '>
                <legend>Company Email</legend>
                <input placeholder='support@echio.in' className='h-[40px] w-[30rem] border border-slate-300 pl-2  outline-none' />
            </fieldset>
              <br></br>
     

        {/*mobile no and designation*/}
    
             <fieldset className='flex flex-col items-start gap-3 self-stretch '>
                <legend>Phone Number</legend>
                <input placeholder='+91 XXXXXXXXXX' className='h-[40px] w-[30rem] border border-slate-300 pl-2  outline-none' />
            </fieldset>
            <br></br>
            <fieldset className='flex flex-col items-start gap-3 self-stretch '>
                <legend>Designation</legend>
                <input placeholder='' className='h-[40px] w-[30rem] border border-slate-300 pl-2  outline-none' />
            </fieldset>
            <br></br>
     

        {/*password ans confim pasword*/}
         <div className=' flex gap-5'>
           <input type=' password' placeholder='Password' className='h-[40px]  border-2  border-pink-900 rounded-lg pl-2  outline-none'/>
            <br></br>
            <input type='password' placeholder=' Confirm Password' className='h-[40px]  border-2  border-pink-900 rounded-lg  pl-2  outline-none'/>
         </div>
       </div>

        {/*finish*/}
        <button  type="button" className="  mt-9 ml-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">finish</button>
    </div>
  )
}

export default Step1
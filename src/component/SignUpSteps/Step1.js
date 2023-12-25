import React from 'react'

const Step1 = () => {
  return (
    <div>
        <h1>Echio</h1>
        <p>Sign Up</p>
        <p>to access Echio Home</p>

        {/*company name and company email*/}
        <div>
              <input placeholder='Nike'/>
              <input placeholder='support@echio.in'/>
        </div>

        {/*mobile no and designation*/}
        <div>
            <input placeholder='1234'/>
            <input placeholder='Designation'/>
        </div>

        {/*password ans confim pasword*/}
        <div>
            <input type=' password' placeholder=''/>
            <input type='password'/>
        </div>

        {/*finish*/}
        <button>finish</button>
    </div>
  )
}

export default Step1
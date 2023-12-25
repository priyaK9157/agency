import React, { useState } from 'react';
import axios from 'axios';
import signinImage from '../asset/signin.png';
import signlogoImage from '../asset/signlogo.png';
import GoogleIcon from '../asset/Google.png';
import AppleIcon from '../asset/Apple.png';
import officeIcon from '../asset/office.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    axios.post('https://agencyapi.getmentore.com/api/signin', { email, password })
      .then(response => {
        console.log('Backend response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex justify-around p-10 gap-20">
      <div className="w-1/2">
        <img src={signinImage} alt="Sign In" className="w-full h-auto" />
      </div>
      
      <div className="w-1/2 flex flex-col">
        <div className="flex gap-2 mb-4">
          <img src={signlogoImage} alt="Echio Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold">Echio</span>
        </div>

        <div className="">
          <p className="text-xl font-semibold">Sign In</p>
          <p className="text-sm">to access Echio Home</p>
        </div>

        <div className="mt-4 w-full">
          <fieldset className="border ">
            <legend className="text-sm font-semibold">Email Address</legend>
            <input
              type="email"
              placeholder="john@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </fieldset>
        </div>

        <div className="mt-4 w-full">
          <fieldset className="border">
            <legend className="text-sm font-semibold">Password</legend>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </fieldset>
        </div>

        <div className="mt-4 text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <br />
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Yes, I understand and agree to the ECHIO Service.
          </label>
        </div>

        <div className="mt-4 text-center">
          <button
            className="bg-blue-500 text-white px-60 py-2 rounded hover:bg-blue-600"
            onClick={handleSignIn}
          >
            SIGN IN
          </button>
        </div>

        <div className="mt-4 text-sm flex justify-around">
          <p>or Sign in with your email</p>
          <p className='font-bold'>
            New to ECHIO? <a href="" className='text-blue-500'>Create Your account</a>
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="border p-2 rounded-lg shadow-md flex items-center gap-2">
            <img src={GoogleIcon} alt="Google" className="w-8 h-8" />
            <span className="text-sm">Google</span>
          </div>
          <img src={AppleIcon} alt="Apple" className="w-8 h-8 bg-black rounded-full" />
          <img src={officeIcon} alt="Office" className="w-8 h-8 border" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

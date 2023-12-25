import React from 'react';
import signinImage from '../asset/signin.png';
import signlogoImage from '../asset/signlogo.png';
import GoogleIcon from '../asset/Google.png';
import AppleIcon from '../asset/Apple.png';
import officeIcon from '../asset/office.png';

const SignIn = () => {
  return (
    <div className="flex justify-around p-10">
      <div className="w-1/2">
        <img src={signinImage} alt="Sign In" className="w-full h-auto" />
      </div>
      
      <div className="w-1/2 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <img src={signlogoImage} alt="Echio Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold">Echio</span>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">Sign In</p>
          <p className="text-sm">to access Echio Home</p>
        </div>
        <div className="mt-4 w-full">
          <fieldset className="border p-2">
            <legend className="text-sm font-semibold">Email Address</legend>
            <input
              type="email"
              placeholder="john@gmail.com"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </fieldset>
        </div>
        <div className="mt-4 w-full">
          <fieldset className="border p-2">
            <legend className="text-sm font-semibold">Password</legend>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
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
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            SIGN IN
          </button>
        </div>
        <div className="mt-4 text-sm text-center">
          <p>or Sign in with your email</p>
          <p>
            New to ECHIO? <a href="">Create Your account</a>
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <img src={GoogleIcon} alt="Google" className="w-8 h-8" />
          <span>Google</span>
          <img src={AppleIcon} alt="Apple" className="w-8 h-8 bg-black rounded-full" />
          <img src={officeIcon} alt="Office" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

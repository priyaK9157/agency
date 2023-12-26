import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Home from './component/Home';
import Influencer from './component/Influencer/Influencer';
import CampaignList from './component/CampaignList';

const App = () => {
  return (
    
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home/>} />
        <Route path='/influencerPlan' element={<Influencer/>}/>
        <Route path='/CampaignList' element={<CampaignList/>}/>
      </Routes>
    
  );
};

export default App;

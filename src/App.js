import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Home from './component/Home';
import Influencer from './component/Influencer/Influencer';
import CampaignList from './component/Campaign/CampaignList';
import InfluencerDetail from './component/Influencer/InfluencerDetail';
import CreatePlan from './component/Influencer/CreatePlan';
import CampaignDetail from './component/Campaign/CampaignDetail';
import InfluencerOnboard from './component/Influencer/InfluencerOnboard';

const App = () => {
  return (
    
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home/>} />
        <Route path='/influencerPlan' element={<Influencer/>}/>
        <Route path='/c' element={<CampaignList/>}/>
        <Route path='/influencerDetail' element={<InfluencerDetail/>}/>
        <Route path='/createplan' element={<CreatePlan/>}/>
        <Route path='/campaignDetail' element={<CampaignDetail/>}/>
        <Route path='/onboard' element={<InfluencerOnboard/>}/>
      </Routes>
    
  );
};

export default App;

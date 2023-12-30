import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Home from './component/Home';
import Influencer from './component/Influencer/Influencer';
import CampaignList from './component/Campaign/CampaignList';
import InfluencerDetail from './component/Influencer/InfluencerDetail';
import Createcampaign  from './component/Campaign/Createcampaign';
import Payment from './component/Payment/Payment'
import CreatePlan from './component/Influencer/CreatePlan';
import CampaignDetail from './component/Campaign/CampaignDetail';
import InfluencerOnboard from './component/Influencer/InfluencerOnboard';
import Onboarding from './component/Echio/Onboarding';
import ReachOut from './component/Influencer/ReachOut';

const App = () => {
  return (
    
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home/>} />
        <Route path='/influencerPlan' element={<Influencer/>}/>
        <Route path='/campaignlist' element={<CampaignList/>}/>
        <Route path='/influencerDetail' element={<InfluencerDetail/>}/>
        <Route path='/createcampaign' element={<Createcampaign/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/createplan' element={<CreatePlan/>}/>
        <Route path='/campaignDetail' element={<CampaignDetail/>}/>
        <Route path='/onboard' element={<InfluencerOnboard/>}/>
        <Route path='/Onboarding' element={<Onboarding/>}/>
        <Route path='/ReachOut' element={<ReachOut/>}/>
      </Routes>
    
  );
};

export default App;

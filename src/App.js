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
import CampaignDetail from './component/Campaign/CampaignDetail';

const App = () => {
  return (
    
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home/>} />
        <Route path='/influencerPlan' element={<Influencer/>}/>
        <Route path='/CampaignList' element={<CampaignList/>}/>
        <Route path='/influencerDetail' element={<InfluencerDetail/>}/>
        <Route path='/createcampaign' element={<Createcampaign/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/campaignDetail' element={<CampaignDetail/>}/>
      </Routes>
    
  );
};

export default App;

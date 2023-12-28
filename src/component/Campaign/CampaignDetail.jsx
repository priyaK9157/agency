import React from 'react'
import { useSelector } from 'react-redux'

const CampaignDetail = () => {

    const{names,para,img}=useSelector((state)=>state.campaign)
    console.log("data",names,para,img);
  return (
    <div>CampaignDetail</div>
  )
}

export default CampaignDetail
import React from 'react'
import { useSelector } from 'react-redux'

const CampaignDetail = () => {

    const{names,para,img}=useSelector((state)=>state.campaign)
  return (
    <div>CampaignDetail</div>
  )
}

export default CampaignDetail
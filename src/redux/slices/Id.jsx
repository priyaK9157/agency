import { createSlice } from "@reduxjs/toolkit";

const initialState={
     agencyid:null,
     influencerids:null,
     campaginid:null,
}
const ids=createSlice({
    name:'ids',
     initialState:initialState,
     reducers:{
         setAgency(state,value){
            state.agencyid=value.payload
         },
         setInfluencer(state,value){
            state.influencerids=value.payload
         },
         setCampaign(state,value){
             state.campaginid=value.payload
         }
     }
})

export const {setAgency,setInfluencer,setCampaign}=ids.actions;
export default ids.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    names:null,
    para:null,
    img:null
}

const campaign=createSlice({
    name:"campaigns",
    initialState:initialState,
    reducers:{
        setName(state,value){
            state.names=value.payload
            console.log(state.names);
        },
        setpara(state,value){
            state.para=value.payload
            console.log("state",state.para)
        },
        setImage(state,value){
            state.img=value.payload
        }
    }
})


export const {setName,setpara,setImage}=campaign.actions;
export default campaign.reducer;
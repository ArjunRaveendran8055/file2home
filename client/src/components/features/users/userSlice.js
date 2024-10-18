import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{},
    isLoggedIn:false
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,actions)=>{
            user=actions.payload,
            isLoggedIn=true
        },
        removeUser:(state,)=>{
            user={}
            isLoggedIn=false
        }
    }
})

export const {setUser,removeUser}=userSlice.actions

export default userSlice.reducer
import { createSlice } from '@reduxjs/toolkit'  

const iniValue = {toggleAuth:false}
const AuthSlice = createSlice({
    name:'auth',
    initialState:iniValue,
    reducers: {
        toggleAuth:(state, action) => {
            state.toggleAuth = !state.toggleAuth

        }
    }

})


export const {toggleAuth} = AuthSlice.actions;

export default AuthSlice.reducer;
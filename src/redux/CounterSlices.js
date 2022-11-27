// Step 1 Import CreateSlice From ReduxToolkit
import {createSlice } from '@reduxjs/toolkit'

// Step 2 Init Value Use Start App 
const initState = {value:0, toggle:false }

// Step 3 Create Slice With Toolkit 
const counterSlice = createSlice({
    name:'count',
    initialState: initState,
    reducers: {
        increase:(state, action) => {
            state.value += action.payload
        },

        decrease:(state, action) => {
            state.value -= action.payload
        },
    }
})

// Step 4 Export The Actions With Distraction
export const {increase , decrease} = counterSlice.actions;

// Step 5 Export Default The Slice To Store  
export default counterSlice.reducer;




// Step 1 Import ConfigrureStore From Redux ToolKit 
import { configureStore } from '@reduxjs/toolkit'
// Step 2 Import The Slice Here 
import counterSlice from './CounterSlices'

import AuthSlice from './AuthSlice'


// Step 3 Create Store And Export 
export const store = configureStore({
    reducer:{
        count: counterSlice,
        auth: AuthSlice

    }
})
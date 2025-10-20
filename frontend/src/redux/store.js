import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice.js'

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store;







// Example 

// store.getState();
// output:
// {
//   auth: {
//     token: null,
//     user: null
//   }
// }
import { configureStore } from '@reduxjs/toolkit'

import  userReducer  from 'react';
import cartReducer from "./cartSlice";

  export const  store = configureStore({
    reducer: {
        auth: userReducer,
        cart: cartReducer,
    }

});


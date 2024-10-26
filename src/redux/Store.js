import { configureStore } from '@reduxjs/toolkit';
import {CartSlice} from './Slices/CartSlice';

// Step:2 == Create redux store.

export const Store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});

// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import menuReducer from './menuActions';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        menuState: menuReducer,
    },
});

export default store;

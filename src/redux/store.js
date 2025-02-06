import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/CartSlice.jsx";

const store = configureStore({
    reducer:{
        cart: cartSlice
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/CartSlice.jsx";
import categorySlice from "./slice/CategorySlice.jsx";
import searchSlice from "./slice/SearchSlice.jsx";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        category: categorySlice,
        search: searchSlice
    }
})

export default store;
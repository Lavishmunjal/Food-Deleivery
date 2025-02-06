import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cart: []
    },
    reducers:{
        addToCart :(state, action)=>{
            const existingItem = state.cart.find((item)=>item.id===action.payload.id)
            if(existingItem){
                state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item, qty: item.qty+1} : item)
            }else {
                state.cart.push(action.payload) 
            }
            
        },
        removeToCart:(state, action)=>{
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        }
    }

})

export const {addToCart, removeToCart} = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

const addToCart = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        AddItem : (state) => {
            state.value += 1;
        },
        RemoveItem : (state) => {
            state.value > 0 ? state.value -= 1 : state.value = 0;
            // if(state.value > 0){
            //     state.value -= 1;
            // } else {
            //     state.value = 0;
            // }
        },
        ClearCart : (state) => {
            state.value = 0;
        }
    }
})

export const  { AddItem, RemoveItem, ClearCart } = addToCart.actions;
export default addToCart.reducer; 
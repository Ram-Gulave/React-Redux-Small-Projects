import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const addToCart = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        AddItem : (state, action) => {
            // state.value += 1;
            state.value.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.value));
            console.log(action.payload);
            
        },
        RemoveItem : (state, action) => {
            const itemIndex = state.value.findIndex(item => item.id === action.payload);
            console.log(action.payload);
            if (itemIndex !== -1) {
                state.value.splice(itemIndex, 1);
            } else {
                console.warn(`Item with id ${action.payload} not found in cart.`);
            }
            localStorage.setItem('cart', JSON.stringify(state.value)); },
        ClearCart : (state) => {
            state.value = [];
        }
    }
})

export const  { AddItem, RemoveItem, ClearCart } = addToCart.actions;
export default addToCart.reducer; 
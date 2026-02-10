import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slice";
import productReducer from "./productSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        products : productReducer,
        todo: todoReducer,
    }
})


export default store;
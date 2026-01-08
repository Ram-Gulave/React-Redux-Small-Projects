import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";

const fetchProduct = createAsyncThunk(
  'products',
  async() => {
    const response  = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
  }
);

const initialState = {
    items : [],
    status: undefined,
    error: null,
}

const productSilice = createSlice({
    name : 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = 'success',
            state.items = action.payload,
            state.error = null
        })
    }
})


export default productSilice.reducer;
export const fetchProducts = fetchProduct;
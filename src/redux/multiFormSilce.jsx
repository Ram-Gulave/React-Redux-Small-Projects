import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    formData: {
        fname: "",
        lname: "",
        email: "",
        number: "",
        tmarks: "",
        hmarks: "",
        intern: false
    }
}


const MultiFormSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        submitData: (state, action) => {
            const {field, value} = action.payload;
            state.formData[field] = value;

        },
        resetForm: (state) => {
            state.formData = initialState.formData;
            state.step = 1;
        },
        next: (state) => {
            state.step += 1;
        },
        previous: (state) => {
            state.step -= 1;
        }
    }
})

export const {submitData, resetForm, next, previous} = MultiFormSlice.actions;
export default MultiFormSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const initialState  = []

const cartSlice = createSlice({
    name: 'cart',
    initialState ,
    reducers: {
        add(state, action) {
            const itemExists = state.some(item => item.id === action.payload.id);
            if (!itemExists) {
                state.push(action.payload);
                }else{
                    state.message = 'Item is already exist in Cart!'
                }
        },
        remove(state, action) {
           return state.filter(item => item.id !== action.payload)
        },
        clearMessage(state) {
            state.message = ''; // Allow clearing the message
        }
    }
})
export  const {add, remove, clearMessage} = cartSlice.actions;
export default cartSlice.reducer
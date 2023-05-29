import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    prodItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const prodSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const id = action.payload;
            const prod = state.prodItems.find(
                (item) => item.id === id
            );

            state.totalQuantity++

            prod.quantity++
            // prod.totalProce = Number(prod.totalPrice) + Number()

            state.totalAmount = state.prodItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),0
            );
        },

        deleteItem: (state, action) => {
            const id = action.payload;
            const prod = state.prodItems.find(
                (item) => item.id === id
            );
    
            if (prod) {
                state.prodItems = state.prodItems.filter(
                    (item) => item.id !== id
                )
                state.totalQuantity = state.totalQuantity = prod.quantity
            }
    
            state.totalAmount = state.prodItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),0
            );
        },
    }
})

export const prodActions = prodSlice.actions

export default prodSlice.reducer
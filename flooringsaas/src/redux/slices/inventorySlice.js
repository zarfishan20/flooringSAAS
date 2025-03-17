import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inventory: [],  // array to hold inventory items
};

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        // Action to add an item to inventory
        addItem(state, action) {
            state.inventory.push(action.payload);
        },
        // Action to remove an item from inventory
        removeItem(state, action) {
            state.inventory = state.inventory.filter(item => item.id !== action.payload);
        },
        // Action to update inventory (e.g., stock levels)
        updateItem(state, action) {
            const index = state.inventory.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.inventory[index] = action.payload;
            }
        },
    },
});

export const { addItem, removeItem, updateItem } = inventorySlice.actions;
export default inventorySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Initial state for quotes
const initialState = {
    quotes: [],
};

// Create the slice for quotes
const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        // Action to add a quote
        addQuote(state, action) {
            state.quotes.push(action.payload);
        },
        // Action to remove a quote
        removeQuote(state, action) {
            state.quotes = state.quotes.filter(quote => quote.id !== action.payload);
        },
    },
});

// Export the actions to use them in components
export const { addQuote, removeQuote } = quoteSlice.actions;

// Export the reducer to use in the store
export default quoteSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "dark", // Default theme mode
    loading: false,
    error: null,
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark";
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { toggleTheme, setLoading, setError } = globalSlice.actions;
export default globalSlice.reducer;

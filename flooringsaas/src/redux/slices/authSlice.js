import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";



const initialState = {
    user: null,
    token: localStorage.getItem("token") || null,
};
// Async Thunks
export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        // Perform login API call
        const response = await api.post("/auth/login", userData);

        // Store token in localStorage
        localStorage.setItem("token", response.data.token);

        // Return user data and token
        return response.data;
    } catch (error) {
        // If there's an error, return a message from the error response
        const message = error.response?.data?.message || error.message || "Login failed!";
        return thunkAPI.rejectWithValue(message);
    }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
    // Clear token from localStorage on logout
    localStorage.removeItem("token");
    return null;
});

// Auth Slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: localStorage.getItem("token") || null,
        status: "idle", // Possible values: "idle", "loading", "succeeded", "failed"
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle login user
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            // Handle logout user
            .addCase(logoutUser.fulfilled, (state) => {
                state.status = "idle";
                state.user = null;
                state.token = null;
            });
    },
});

export default authSlice.reducer;

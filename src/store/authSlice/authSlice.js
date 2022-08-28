import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../../authServices/AuthService";

// const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
    "auth/register",
    async (newUser) => {
        try {
            const response = await AuthService.register(newUser.userName, newUser.email, newUser.password, newUser.confirmPassword);
            alert(response.data.message)
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (user) => {
        try {
            const response = await AuthService.login(user.email, user.password);
            alert(response.message)
            localStorage.setItem("user", response.token)
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);
export const loggedInUser = createAsyncThunk("auth/loggedInUser", async () => {
    const response = await AuthService.fetchLoggedInUser();
    console.log(response);
});
export const logout = createAsyncThunk("auth/logout", async () => {
    const response = await AuthService.logout();
    return response
});
const initialState = {
    loading: false,
    user: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
    isLoginUser: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoginUser = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoginUser = false;
        },
        [login.fulfilled]: (state, action) => {
            action.payload?.status === "failed" ? state.isLoginUser = false : state.isLoginUser = true;
            state.user = action.payload?.name;
            state.userToken = action.payload?.token
        },
        [login.rejected]: (state, action) => {
            state.isLoginUser = false;
            state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoginUser = false
        },
    }
})

export default authSlice.reducer
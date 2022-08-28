import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HouseService from "../../authServices/HouseService";


export const postHouse = createAsyncThunk(
    "houe/post",
    async (newHouse) => {
        try {
            const response = await HouseService.postHouse(newHouse.headline, newHouse.description, newHouse.location);
            alert(response.data.message)
            // console.log(response);
            // return newHouse
        } catch (error) {
            console.log(error);
        }
    }
);

export const getHouse = createAsyncThunk(
    "houe/get",
    async () => {
        try {
            const response = await HouseService.fetchHouses();
            console.log(response.data);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
);

const initialState = {
    houseData: {}
}

const houseSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [getHouse.fulfilled]: (state, action) => {
            state.houseData = action.payload;
        },

    }
})

export default houseSlice.reducer
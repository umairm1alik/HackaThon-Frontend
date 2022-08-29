import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HouseService from "../../authServices/HouseService";


export const postHouse = createAsyncThunk(
    "house/post",
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
    "house/get",
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
export const addFavProperty = createAsyncThunk(
    "house/fav",
    async (favProperty) => {
        try {
            const response = await HouseService.postFavProperty(favProperty.headline, favProperty.description, favProperty.location);
            alert(response.data.message)
        } catch (error) {
            console.log(error);
        }
    }
);
export const getFavProperty = createAsyncThunk(
    "house/getFavProperty",
    async () => {
        try {
            const response = await HouseService.fetchFavProperty();
            console.log(response.data);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
);

const initialState = {
    houseData: {},
    favHouseData: {}
}

const houseSlice = createSlice({
    name: "house",
    initialState,
    extraReducers: {
        [getHouse.fulfilled]: (state, action) => {
            state.houseData = action.payload;
        },
        [getFavProperty.fulfilled]: (state, action) => {
            state.favHouseData = action.payload;
        },


    }
})

export default houseSlice.reducer
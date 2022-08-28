import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "../store/authSlice/authSlice"
import HouseReducer from "../store/houseSlice/houseSlice"

const reducer = {
    AuthReducer,
    HouseReducer
}

const Store = configureStore({
    reducer
})
export default Store
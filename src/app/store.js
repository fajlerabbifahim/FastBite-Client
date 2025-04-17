import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "../features/addToCart/addToCartSlice"
import loaderReducer from "../features/loader/loaderSlice"
const store = configureStore({
    reducer: {
        addToCart: addToCartReducer,
        loader: loaderReducer,
    }
})

export default store;
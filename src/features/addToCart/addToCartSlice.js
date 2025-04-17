import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAddToCart } from "./addToCartApi"
const initialState = {
    addToCart: [],
    isLoading: false,
    error: null
}

// export const fetchAddToCart = createAsyncThunk('cart/fetchAddToCart',
//     async () => {
//         const addToCart = await getAddToCart();
//         console.log(addToCart)
//         return addToCart;
//     }
// )
const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        setAddToCart: (state, action) => {
            state.addToCart = action.payload;
            state.isLoading = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLogout: (state) => {
            state.addToCart = [];
        }
    }
})
export const { setAddToCart, setLoading, setError, setLogout } = addToCartSlice.actions;
export default addToCartSlice.reducer;
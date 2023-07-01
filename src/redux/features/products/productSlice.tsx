import { createSlice } from "@reduxjs/toolkit";
import { ProductProps, UserProfile } from "../../../interface";

const initialState: ProductProps = {
  isLoading: false,
  isError: false,
  isSidebarOpen: true,
  userProfile: {} as UserProfile,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.isError = action.payload;
    },

    openSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },

    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setLoader, setError, openSidebar, setUserProfile } =
  productSlice.actions;

export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  isSidebarOpen: true,
  userProfile: {},
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

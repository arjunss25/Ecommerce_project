import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryOpen: false,
  productsOpen: false,
};

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    toggleCategory :(state) => {
      state.categoryOpen = !state.categoryOpen;
      state.productsOpen = false;
    },
    toggleProducts :(state) => {
      state.productsOpen = !state.productsOpen;
      state.categoryOpen = false;
    },
    closeAllDropdowns :(state) => {
      state.productsOpen = false;
      state.categoryOpen = false;
    },
  },
});

export const { toggleCategory,toggleProducts,closeAllDropdowns } = dropdownSlice.actions;

export default dropdownSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/Slice';  
import cartReducer from './cartSlice';
import dropdownReducer from './dropdownSlice' // Import the cart slice

// Create the store
const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    dropdown: dropdownReducer, // Add the cart slice reducer
  },
});

// Export the store
export default store;

// Export a function to create a new store instance (for Next.js)
export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
      cart: cartReducer,
      dropdown: dropdownReducer, // Add the cart slice reducer here as well
    },
  });
};

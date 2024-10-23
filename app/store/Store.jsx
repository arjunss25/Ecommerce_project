import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/Slice';  
import cartReducer from './cartSlice';
import dropdownReducer from './dropdownSlice'


const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    dropdown: dropdownReducer,
  },
});
export default store;


export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
      cart: cartReducer,
      dropdown: dropdownReducer, 
    },
  });
};

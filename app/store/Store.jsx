
// import { configureStore } from '@reduxjs/toolkit'

// export const makeStore = () => {
//   return configureStore({
//     reducer: {},
//   })
// }

// export const store = makeStore()



import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../store/Slice'  // Adjust the import path as needed

// Create the store
const store = configureStore({
  reducer: {
    search: searchReducer,
  },
})

// Export the store
export default store

// Export a function to create a new store instance (for Next.js)
export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
    },
  })
}
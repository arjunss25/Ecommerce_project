// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

// export const slice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
    
//   },
// })

// export const { } = slice.actions

// export default slice.reducer



// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   isSearchOpen: false,
//   searchQuery: '',
// }

// export const searchSlice = createSlice({
//   name: 'search',
//   initialState,
//   reducers: {
//     toggleSearch: (state) => {
//       state.isSearchOpen = !state.isSearchOpen
//     },
//     setSearchQuery: (state, action) => {
//       state.searchQuery = action.payload
//     },
//     clearSearch: (state) => {
//       state.searchQuery = ''
//     }
//   },
// })

// export const { toggleSearch, setSearchQuery, clearSearch } = searchSlice.actions

// export default searchSlice.reducer



import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isSearchOpen: false,
    searchQuery: '',
  },
  reducers: {
    toggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    clearSearch: (state) => {
      state.searchQuery = ''
    }
  },
})

export const { toggleSearch, setSearchQuery, clearSearch } = searchSlice.actions

export default searchSlice.reducer
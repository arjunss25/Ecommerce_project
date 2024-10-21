

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


'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import store, { makeStore } from './Store'

export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = typeof window !== 'undefined' ? store : makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

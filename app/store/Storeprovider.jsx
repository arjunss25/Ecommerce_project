
'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import store, { makeStore } from './Store'


export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = typeof window !== 'undefined' ? store : makeStore()
  }

<<<<<<< HEAD
  return <Provider store={storeRef.current}>
    {children}
    </Provider>
=======
  return <Provider store={storeRef.current}>{children}</Provider>
>>>>>>> 4f5cbe0edd6cefa9586b58608131b8964c1cb126
}




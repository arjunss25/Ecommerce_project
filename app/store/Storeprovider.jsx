// 'use client'

// import { useRef } from 'react'
// import { Provider } from 'react-redux'
// import { makeStore } from './store'

// export default function StoreProvider({ children }) {
//   const storeRef = useRef()
//   if (!storeRef.current) {
   
//     storeRef.current = makeStore()
//   }

//   return <Provider store={storeRef.current}>{children}</Provider>
// }

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

  return <Provider store={storeRef.current}>{children}</Provider>
}
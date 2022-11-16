import { configureStore } from '@reduxjs/toolkit'
import clienteReducer from './clienteSlice'

export default configureStore({
  reducer: {
    cliente: clienteReducer,
  },
})
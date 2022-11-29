import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,
    productInEdition: null,
    userType: '' // customer ou store
  },
  reducers: {
    saveUser: (state, action) => {
      console.log('saveUser', action?.payload)
      state.user = action?.payload?.user
    },
    setUserType: (state, action) => {
      state.userType = action?.payload?.userType
    },
    setProductInEdition: (state, action) => {
      state.productInEdition = action?.payload?.product
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveUser, setUserType, setProductInEdition } = counterSlice.actions

export default counterSlice.reducer
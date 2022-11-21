import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,

    userType: 'customer' // customer ou store
  },
  reducers: {
    saveUser: (state, action) => {
      console.log('saveUser', action?.payload)
      state.user = action?.payload?.user
    },
    setUserType: (state, action) => {
      state.userType = action?.payload?.userType
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveUser, setUserType } = counterSlice.actions

export default counterSlice.reducer
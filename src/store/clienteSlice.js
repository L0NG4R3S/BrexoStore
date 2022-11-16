import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    cpf: '',
    zip_code: '',
    address: '',
    address_number: '',
    address_district: '',
    city: '',
    state: '',

    userType: 'customer' // customer ou store
  },
  reducers: {
    register: (state, action) => {
      state.name = action?.payload?.name
      state.email = action?.payload?.email
      state.password = action?.payload?.password
      state.password_confirmation = action?.payload?.password_confirmation
      state.cpf = action?.payload?.cpf
      state.zip_code = action?.payload?.zip_code
      state.address = action?.payload?.address
      state.address_number = action?.payload?.address_number
      state.address_district = action?.payload?.address_district
      state.city = action?.payload?.city
      state.state = action?.payload?.state
    },
    setUserType: (state, action) => {
      state.userType = action?.payload?.userType
    },
  },
})

// Action creators are generated for each case reducer function
export const { register, setUserType } = counterSlice.actions

export default counterSlice.reducer
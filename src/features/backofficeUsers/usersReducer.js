import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: '',
  users: {},
}

export const getUsers = createAsyncThunk('users/getUsers', async (data) => {
  try {
    const response = await axios.get('http://ongapi.alkemy.org/api/users')
    return response.data
  } catch {
    throw new Error()
  }
})

export const usersReducer = createSlice({
  name: 'backofficeUsers',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = action.payload.message
        state.users = action.payload.data
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = 'error'
      })
  },
})

export default usersReducer.reducer

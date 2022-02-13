import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getUsers } from '../../Services/apiServices/usersApiService'

const initialState = {
  status: '',
  users: [],
  loader: false,
}

export const getUsersThunk = createAsyncThunk(
  'users/getUsersThunk',
  async () => {
    try {
      const response = await getUsers()
      return response.data
    } catch {
      throw new Error()
    }
  },
)

export const usersReducer = createSlice({
  name: 'backofficeUsers',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.status = action.payload.message
        state.users = action.payload.data
        state.loader = false
      })
      .addCase(getUsersThunk.rejected, (state) => {
        state.status = 'error'
        state.loader = false
      })
  },
})

export default usersReducer.reducer

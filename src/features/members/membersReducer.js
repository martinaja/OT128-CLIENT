import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMembers } from '../../Services/apiServices/membersApiService'

const initialState = {
  members: [],
  status: 'idle',
  loader: false,
  errMsg: '',
}

export const fetchMember = createAsyncThunk('members/getMembers', async () => {
  try {
    const response = await getMembers()
    return response.data
  } catch (error) {
    throw new Error(error)
  }
})

export const membersSlice = createSlice({
  name: 'members',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMember.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(fetchMember.fulfilled, (state, action) => {
        state.status = action.payload.message
        state.members = action.payload.data
        state.loader = false
      })
      .addCase(fetchMember.rejected, (state, action) => {
        console.log(action)
        state.status = 'error'
        state.errMsg = action.error.message
        state.loader = false
      })
  },
})

export default membersSlice.reducer

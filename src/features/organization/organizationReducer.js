import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: {},
  status: '',
}

//Export to RegisterForm submitHandle => catch Error
export const getOrganizationData = createAsyncThunk(
  'organization/getOrganizationData',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://ongapi.alkemy.org/api/organizations',
      )
      return response.data
    } catch {
      return rejectWithValue({ error: 'error' })
    }
  },
)

export const organizationReducer = createSlice({
  name: 'organization',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrganizationData.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getOrganizationData.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.status = action.payload.success
      })
      .addCase(getOrganizationData.rejected, (state, action) => {
        state.status = action.payload.error
      })
  },
})

export default organizationReducer.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getOrganization } from '../../../services/ApiServices/organizationApiService'

const initialState = {
  data: {},
  status: 'idle',
  errorMsg: '',
  loader: false,
}

//Export to RegisterForm submitHandle => catch Error
export const getOrganizationData = createAsyncThunk(
  'organization/getOrganizationData',
  async () => {
    try {
      const response = await getOrganization()
      return response.data
    } catch (err) {
      throw new Error(err)
    }
  },
)

export const organizationReducer = createSlice({
  name: 'organization',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOrganizationData.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(getOrganizationData.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.status = 'success'
        state.loader = false
      })
      .addCase(getOrganizationData.rejected, (state, action) => {
        state.errorMsg = action.payload.error
        state.status = 'error'
        state.loader = false
      })
  },
})

export default organizationReducer.reducer

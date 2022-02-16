import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getOrganization } from '../../Services/apiServices/organizationApiService'

const initialState = {
  data: {},
  status: 'idle',
  errorMsg: '',
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

export const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOrganizationData.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getOrganizationData.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.status = 'success'
      })
      .addCase(getOrganizationData.rejected, (state, action) => {
        state.errorMsg = action.payload.error
        state.status = 'error'
      })
  },
})

export default organizationSlice.reducer

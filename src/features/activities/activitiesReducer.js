import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getActivity,
  getPublicActivity,
  searchActivities,
} from '../../Services/apiServices/activitiesApiService'

const initialState = {
  data: [],
  status: 'idle',
  errorMsg: '',
  loader: false,
}

export const getActivities = createAsyncThunk(
  'activities/getActivitiesData',
  async () => {
    try {
      const response = await getActivity()
      return response.data
    } catch (err) {
      throw new Error(err)
    }
  },
)

export const searchActivitie = createAsyncThunk(
  'activities/searchActivitiesData',
  async (query) => {
    try {
      const response = await searchActivities(query)
      return response.data
    } catch (err) {
      throw new Error(err)
    }
  },
)

export const getPublicActivities = createAsyncThunk(
  'activities/getPublicActivitiesData',
  async () => {
    try {
      const response = await getPublicActivity()
      return response.data
    } catch (err) {
      throw new Error(err)
    }
  },
)

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.status = 'success'
        state.loader = false
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.errorMsg = action.payload.error
        state.status = 'error'
        state.loader = false
      })

      .addCase(searchActivitie.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(searchActivitie.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.status = 'success'
        state.loader = false
      })
      .addCase(searchActivitie.rejected, (state, action) => {
        state.errorMsg = action.payload.error
        state.status = 'error'
        state.loader = false
      })

      .addCase(getPublicActivities.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(getPublicActivities.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.status = 'success'
        state.loader = false
      })
      .addCase(getPublicActivities.rejected, (state, action) => {
        state.errorMsg = action.payload.error
        state.status = 'error'
        state.loader = false
      })
  },
})

export default activitiesSlice.reducer

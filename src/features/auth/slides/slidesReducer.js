import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getSlide } from '../../../Services/apiServices/slideApiService';


const initialState = {
  slides: [],
  status: 'idle',
  loader: false,
  errMsg: '',
}

export const fetchSlide = createAsyncThunk('slides/getSlide', async () => {
  try {
    const response = await getSlide()
    return response.data
  } catch (error) {
    throw new Error(error)
  }
})

export const slidesSlice = createSlice({
  name: 'slides',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlide.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(fetchSlide.fulfilled, (state, action) => {
        state.status = action.payload.message
        state.slides = action.payload.data
        state.loader = false
      })
      .addCase(fetchSlide.rejected, (state, action) => {
        console.log(action)
        state.status = 'error'
        state.errMsg = action.error.message
        state.loader = false
      })
  },
})

export default slidesSlice.reducer
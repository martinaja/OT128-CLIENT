import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: '',
  data: '',
}

export const getTestimonies = createAsyncThunk(
  'testimonial/getTestimonial',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://ongapi.alkemy.org/api/testimonials',
      )
      if (response.data.success) {
        return response.data.data.slice(0, 6)
      } else {
        return rejectWithValue({ error: 'not success' }) // if error is no token the user input data is wrong
      }
    } catch (err) {
      return rejectWithValue({ error: err.response.data.message })
    }
  },
)

export const testimoniesReducer = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTestimonies.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getTestimonies.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.data = action.payload
      })
      .addCase(getTestimonies.rejected, (state, action) => {
        state.status = action.payload
      })
  },
})

export default testimoniesReducer.reducer

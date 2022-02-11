import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategories } from '../../Services/apiServices/categoriesApiService'

const initialState = {
  allCategories: [],
  status: 'idle',
  loader: false,
  errorMsg: '',
}

export const getCategory = createAsyncThunk(
  'category/getCategory',
  async () => {
    try {
      const response = await getCategories()
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  },
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.status = action.payload.message
        state.allCategories = action.payload.data
        state.loader = false
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.errorMsg = action.error.message
        state.status = 'error'
        state.loader = false
      })
  },
})

export default categoriesSlice.reducer

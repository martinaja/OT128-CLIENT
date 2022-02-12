import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getNews } from './../../Services/apiServices/newsApiService';


const initialState = {
  news: [],
  status: 'idle',
  loader: false,
  errMsg: '',
}

export const fetchNew = createAsyncThunk('news/getNews', async () => {
  try {
    const response = await getNews()
    return response.data
  } catch (error) {
    throw new Error(error)
  }
})

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNew.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(fetchNew.fulfilled, (state, action) => {
        state.status = action.payload.message
        state.news = action.payload.data
        state.loader = false
      })
      .addCase(fetchNew.rejected, (state, action) => {
        console.log(action)
        state.status = 'error'
        state.errMsg = action.error.message
        state.loader = false
      })
  },
})

export default newsSlice.reducer
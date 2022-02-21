import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  deleteNews,
  getNews,
  searchNews,
} from '../../../services/ApiServices/newsApiService'

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

// For backoffice
export const fetchSearchNews = createAsyncThunk(
  'news/searchNews',
  async (search) => {
    try {
      const response = await searchNews(search.name, search.category)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  },
)
export const fetchDeleteNews = createAsyncThunk(
  'news/deleteNews',
  async (id) => {
    try {
      const response = await deleteNews(id)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  },
)

export const newsReducer = createSlice({
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
      .addCase(fetchSearchNews.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(fetchSearchNews.fulfilled, (state, action) => {
        state.status = action.payload.message
        state.news = action.payload.data
        state.loader = false
      })
      .addCase(fetchSearchNews.rejected, (state, action) => {
        state.errMsg = action.error.message
        state.status = 'error'
        state.loader = false
      })
      .addCase(fetchDeleteNews.pending, (state) => {
        state.status = 'pending'
        state.loader = true
      })
      .addCase(fetchDeleteNews.fulfilled, (state, action) => {
        state.status = 'delete'
        state.loader = false
      })
      .addCase(fetchDeleteNews.rejected, (state, action) => {
        state.errMsg = action.error.message
        state.status = 'error'
        state.loader = false
      })
  },
})

export default newsReducer.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategories } from '../../Services/apiServices/categoriesApiService'

const initialState = {
  category: {},
  allCategories: [],
  status: 'idle',
  loader: false,
  errorMsg: '',
}

export const getCategory = createAsyncThunk(
  'category/getCategory',
  async (categoryId) => {
    try {
      const response = await getCategories(categoryId)
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
        state.category = action.payload.data
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

// export const searchCategories = createAsyncThunk(async (data, { dispatch }) => {
//   try {
//     const response = await getCategories(data.id)
//     console.log(response)
//   } catch {
//     throw new Error()
//   }
//   //   dispatch(setLoader())
//   //   const response = await getCategories(data.id)
//   //   console.log('asdasda ----> ', response)
//   //   dispatch(setCategory(response))
//   //   dispatch(setLoader())
// })

// export const searchWord = (word) => (dispatch) => {
//   dispatch(setLoader());
//   dispatch(setWord(word));
//   axios
//     .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}"`)
//     .then((response) => {
//       dispatch(
//         setResult(response.data[0].meanings[0].definitions[0].definition)
//       );
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       dispatch(setLoader());
//     });
// };

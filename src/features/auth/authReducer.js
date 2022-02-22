import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  register,
  login,
  getRole,
} from '../../Services/apiServices/authApiService'

const initialState = {
  status: '',
  token: false,
  isAuthenticated: true,
  user: {},
  role: 'Standard',
}

//Export to RegisterForm submitHandle => catch Error
export const userRegister = createAsyncThunk(
  'auth/userRegister',
  async (data, { rejectWithValue }) => {
    try {
      const response = await register(data)
      return response.data
    } catch (err) {
      return rejectWithValue({ error: err.response.data })
    }
  },
)

//export to LoginForm submitHandle => catch Error
export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data)
      if (response.data.success) {
        return response.data
      } else {
        return rejectWithValue(response.data) // if error is no token the user input data is wrong
      }
    } catch (err) {
      return rejectWithValue({ error: err.response.data.message })
    }
  },
)

export const getUserRole = createAsyncThunk(
  'auth/getUserRole',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getRole(id)

      if (response.data.success) {
        return response.data
      } else {
        return rejectWithValue(response.data)
      }
    } catch (err) {
      return rejectWithValue({ error: err.response.data.message })
    }
  },
)

export const authReducer = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    userLogout: (state) => {
      localStorage.removeItem('token')
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.user = action.payload.data.user
        state.token = action.payload.data.token
        state.isAuthenticated = true
        localStorage.setItem('token', action.payload.data.token)
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = action.payload
      })

    builder
      .addCase(userLogin.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.user = action.payload.data.user
        state.token = action.payload.data.token
        state.isAuthenticated = true
        localStorage.setItem('token', action.payload.data.token)
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = action.payload
      })

    builder
      .addCase(getUserRole.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getUserRole.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.role = action.payload.data.description
      })
      .addCase(getUserRole.rejected, (state, action) => {
        state.status = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { userLogout } = authReducer.actions

export default authReducer.reducer

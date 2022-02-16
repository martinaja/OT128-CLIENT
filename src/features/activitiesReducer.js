import { createSlice } from '@reduxjs/toolkit'
import {
  getActivity,
  searchActivities,
} from '../Services/apiServices/activitiesApiService'

const initialState = {
  activities: [],
  loading: false,
}

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload
    },
    getActivitie: (state, action) => {
      state.activities = action.payload
      state.loading = false
    },
    getActivitieSearched: (state, action) => {
      state.activities = action.payload
      state.loading = false
    },
  },
})

export const { getActivitie, getActivitieSearched, isLoading } =
  activitiesSlice.actions

export default activitiesSlice.reducer

export const getActivities = () => async (dispatch) => {
  const response = await getActivity()
  dispatch(getActivitie(response.data.data))
}

export const searchActivitie = (query) => async (dispatch) => {
  const response = await searchActivities(query)
  dispatch(getActivitieSearched(response.data.data))
}

export const setLoading = (loading) => (dispatch) => {
  dispatch(isLoading(loading))
}

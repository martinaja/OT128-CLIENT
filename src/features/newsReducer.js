import { createSlice } from '@reduxjs/toolkit'
import { getNews } from '../Services/apiServices/newsApiService'

const initialState = {
  activities: [],
}

const activitiesSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getActivities: (state, action) => {
      state.activities = action.payload
    },
    
  },
})

export const { getActivities } = activitiesSlice.actions

export default activitiesSlice.reducer

export const fetchActivities = () => async (dispatch) => {
  const response = await getNews()
  dispatch(getNews(response.data.data))
}
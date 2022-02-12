import { createSlice } from '@reduxjs/toolkit'
import { getActivity } from '../Services/apiServices/activitiesApiService'

const initialState = {
  activities: [],
}

const activitiesSlice = createSlice({
  name: 'activities',
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
  const response = await getActivity()
  dispatch(getActivities(response.data.data))
}

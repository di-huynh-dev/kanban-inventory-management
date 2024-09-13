import { createSlice } from '@reduxjs/toolkit'
import { localDataNames } from '../../constants/appInfo'

export interface AuthState {
  _id: string
  name: string
  accessToken: string
  refreshToken: string
}

const initialState = {
  _id: '',
  name: '',
  accessToken: '',
  refreshToken: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: initialState,
  },
  reducers: {
    addAuth(state, action) {
      state.data = action.payload
      syncLocal(action.payload)
    },
    removeAuth(stata, action) {
      stata.data = initialState
      localStorage.removeItem(localDataNames.authData)
    },
  },
})

export const authReducer = authSlice.reducer
export const { addAuth } = authSlice.actions

export const authSelector = (state: any) => state.authReducer.data

const syncLocal = (data: any) => {
  localStorage.setItem(localDataNames.authData, JSON.stringify(data))
}

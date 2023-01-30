import { createSlice } from '@reduxjs/toolkit'

export const uiSliceDarkMode = createSlice({
    name: 'ui',
    initialState: {
        DarkMode: true
    },
    reducers: {
        isDarkMode: (state, {payload})=>{
            state.DarkMode= payload
        }
    }
})
export const { isDarkMode } = uiSliceDarkMode.actions
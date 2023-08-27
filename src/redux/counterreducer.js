import { createSlice } from '@reduxjs/toolkit'

export const counterslice = createSlice({
    name: 'counter'
initialstate: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decreament: (state) => {
            state.value -= 1
        },
    },
})
export const { increment, decreament } = counterslice.actions
export const selectCount = (state) => state.counter.value
export default counterslice.reducer

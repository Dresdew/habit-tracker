import { createSlice } from '@reduxjs/toolkit'

const habitSlice = createSlice({
    name: 'habits',
    initialState: { habits: [] },
    reducers: {
        addHabit(state, action) {
            state.habits = [...state.habits, action.payload.habit]
        },
    }
})

export const { addHabit } = habitSlice.actions
export default habitSlice.reducer

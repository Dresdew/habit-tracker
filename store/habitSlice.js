import { createSlice } from '@reduxjs/toolkit'

const habitSlice = createSlice({
    name: 'habits',
    initialState: { habits: [] },
    reducers: {
        addHabit(state, action) {
            state.habits = [...state.habits, action.payload.habit]
        },
        setHabits(state, action) {
            state.habits = action.payload.habits
        }
    }
})

export const { addHabit, setHabits } = habitSlice.actions
export default habitSlice.reducer

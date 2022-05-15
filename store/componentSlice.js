import { createSlice } from '@reduxjs/toolkit'

const componentSlice = createSlice({
    name: 'component',
    initialState: { selectedComponent: 'VIEW_HABITS_PANEL' },
    reducers: {
        displayAddHabitPanel(state) {
            state.selectedComponent = 'ADD_HABIT_PANEL';
        },
        displayViewHabitsPanel(state) {
            state.selectedComponent = 'VIEW_HABITS_PANEL';
        },
    }
})


export const { displayAddHabitPanel, displayViewHabitsPanel } = componentSlice.actions
export default componentSlice.reducer
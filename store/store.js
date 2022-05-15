import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import habitReducer from './habitSlice'
import componentReducer from './componentSlice'

const reducer = combineReducers({
    habits: habitReducer,
    component: componentReducer
})
const store = configureStore({
    reducer,
})

export default store
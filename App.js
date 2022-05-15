import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ScrollView, Button, Alert } from "react-native";
import AddHabitPanel from './components/AddHabitPanel'
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import ViewHabitsPanel from './components/ViewHabitsPanel'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setHabits } from './store/habitSlice'

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const loadHabits = async () => {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      const habits = result.map(req => JSON.parse(req[1]))
      console.log(habits)
      dispatch(setHabits({ habits }))

    };
    loadHabits();
  }, [dispatch]);


  const selectedComponent = useSelector(state => state.component.selectedComponent)
  return <SafeAreaView>
    <Navbar />
    {selectedComponent === 'ADD_HABIT_PANEL' && <AddHabitPanel />}
    {selectedComponent === 'VIEW_HABITS_PANEL' && <ViewHabitsPanel />}
  </SafeAreaView>
}
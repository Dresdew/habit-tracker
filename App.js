import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ScrollView, Button, Alert } from "react-native";
import AddHabitPanel from './components/AddHabitPanel'
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const selectedComponent = useSelector(state => state.component.selectedComponent)
  return <SafeAreaView>
    <Navbar />
    {selectedComponent==='ADD_HABIT_PANEL'&&<AddHabitPanel />}
  </SafeAreaView>
}

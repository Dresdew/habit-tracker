import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COMPONENT_COLOR, BACKGROUND_COLOR, COMPONENT_SELECTED_COLOR } from './colors'
import { displayAddHabitPanel, displayViewHabitsPanel } from '../store/componentSlice'

export default function Navbar() {

    const selectedComponent = useSelector(state => state.component.selectedComponent)
    const dispatch = useDispatch()
    return <View style={styles.navbar}>
        <View style={{ marginLeft: 10 }}>
            <Button
                color={selectedComponent == 'ADD_HABIT_PANEL'
                    ? COMPONENT_SELECTED_COLOR : COMPONENT_COLOR}
                title="add"
                onPress={() => {
                    dispatch(displayAddHabitPanel())
                }}
            />
        </View>
        <View style={{ marginLeft: 10 }}>
            <Button
                color={selectedComponent == 'VIEW_HABITS_PANEL'
                    ? COMPONENT_SELECTED_COLOR : COMPONENT_COLOR}
                title="view"
                onPress={() => {
                    dispatch(displayViewHabitsPanel())
                }}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: BACKGROUND_COLOR
    },
});

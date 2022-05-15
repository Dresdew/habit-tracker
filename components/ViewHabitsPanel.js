import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Switch } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { COMPONENT_COLOR, BACKGROUND_COLOR, COMPONENT_SELECTED_COLOR } from './colors'


export default function ViewHabitsPanel() {
    const habits = useSelector(state => state.habits.habits)

    return <SafeAreaView>
        {habits.map(
            habit =>
                <View style={styles.view}>
                    <Text style={styles.titleText}>{habit.title}</Text>
                    <View style={styles.settingsPanel}>
                        <Text style={styles.text}>Done for today</Text>
                        <Switch />
                    </View>
                </View>
        )}
    </SafeAreaView>
}


const styles = StyleSheet.create({
    view: {
        margin: 12,
        borderWidth: 2,
        borderColor: COMPONENT_COLOR,
        padding: 10,
        borderRadius: 10,

    },
    settingsPanel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    },
    titleText: {
        color: COMPONENT_COLOR,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,

    },
    text: {
        fontSize: 17,
        fontWeight: "bold",
        marginRight:5,

    },
    button: {
        margin: 12,
    }
});
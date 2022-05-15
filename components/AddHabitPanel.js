import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ScrollView, Button, Alert, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addHabit } from '../store/habitSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COMPONENT_COLOR, BACKGROUND_COLOR, COMPONENT_SELECTED_COLOR } from './colors'


const AddHabitPanel = () => {
    const dispatch = useDispatch();

    const asyncFunc = async () => {
        const habit = {
            id: `@${Math.random()}`,
            habitText,
            n
        };
        await AsyncStorage.setItem(habit.id, JSON.stringify(habit))
        dispatch(addHabit({ habit }));
    }

    const [habitText, onHabitTextChange] = React.useState("");
    const [n, setN] = React.useState(1);

    return (
        <ScrollView>
            <Text style={styles.titleText}>Name of the habit</Text>
            <TextInput
                style={styles.input}
                onChangeText={onHabitTextChange}
                value={habitText}
            />
            <Text style={styles.titleText}>Notification every N-th day</Text>
            <TextInput
                style={styles.input}
                onChangeText={setN}
                value={n}
                keyboardType="numeric"
            />
            <View style={{ margin: 10}}>
                <Button
                    color={COMPONENT_COLOR}
                    style={styles.button}
                    title="create"
                    onPress={asyncFunc}
                />
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    titleText: {
        color: COMPONENT_COLOR,
        marginLeft: 12,
        marginTop: 12,
        fontSize: 20,
        fontWeight: "bold"
    },
    button: {
        margin: 12,
    }
});

export default AddHabitPanel;
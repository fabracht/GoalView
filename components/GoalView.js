import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Modal, Button } from 'react-native';
import { GoalInput } from './GoalInput';
import { GoalItem } from './GoalItem';


const state = {
    goals: [],
};


export function GoalView(props) {
    const [myState, setMyState] = useState(state);

    const onButtonPress = (textInput, setTextInput) => {
        if (textInput.length > 0) {
            const newState = { goals: [...myState.goals, { key: Math.random().toString(), value: textInput }] };
            setMyState(newState);
            setTextInput("");
        }
        props.setVisible(!props.visible);
    };

    const removeElement = (key) => {
        const newGoals = myState.goals.filter(el => el.key !== key);
        setMyState({ ...myState, goals: newGoals });
    };

    return (
        <View>
            <Modal visible={props.visible} animationType="slide">

                <GoalInput myState={myState} setMyState={setMyState} onButtonPress={onButtonPress}></GoalInput>

                <View style={[styles.cancelButtonView]}>
                    <Button color="red" title="Cancel" onPress={() => props.setVisible(!props.visible)}></Button>
                </View>

            </Modal>

            <FlatList alignContent="center" style={[styles.flatList]} data={myState.goals} renderItem={itemData => <GoalItem data={itemData} removeElement={removeElement} />} />
        </View>
    );
}

export const styles = StyleSheet.create({

    cancelButtonView: {
        marginBottom: 30,
        width: "40%",
        alignSelf: "center",
    },
    flatList: {
        width: "90%",
    }
});
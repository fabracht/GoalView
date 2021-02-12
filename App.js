import React, { useState } from 'react';
import { Modal, View, Button, StyleSheet } from 'react-native';
import { GoalView } from './components/GoalView';

const state = {
  goals: [],
};


export default function App() {
  const [addMode, setAddMode] = useState(false);


  const onButtonPress = (textInput, setTextInput) => {
    if (textInput.length > 0) {
      const newState = { goals: [...myState.goals, { key: Math.random().toString(), value: textInput }] };
      setMyState(newState);
      setTextInput("");
    }
  };

  const removeElement = (key) => {
    const newGoals = myState.goals.filter(el => el.key !== key);
    setMyState({ ...myState, goals: newGoals });
  };

  return (
    <View style={[styles.root]}>
      <Button title="Add Goals" onPress={() => setAddMode(!addMode)} />
      <GoalView visible={addMode} setVisible={setAddMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 40,
  }
});



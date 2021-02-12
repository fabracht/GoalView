import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  goalInputView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputBox: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  textInput: {
    flex: 8,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
  },
  button: {
    fontWeight: "900",
    flex: 2,
  }
});

export function GoalInput(props) {
  const [textInput, setTextInput] = useState("");
  return (
    <View style={styles.container}>
      <View style={[styles.goalInputView]}>
        <View style={[styles.inputBox]}>
          <TextInput placeholder="Course Goal" style={[styles.textInput]} value={textInput} onChangeText={text => setTextInput(text)} />
          <Button style={[styles.button]} title="ADD" onPress={props.onButtonPress.bind(this, textInput, setTextInput)} />
        </View>
      </View>
    </View>);
}

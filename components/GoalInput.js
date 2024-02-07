import { View, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <View style={styles.buttonContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    matginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    flex: 1,
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginRight: 8,
    padding: 5,
    width: "80%",
  },
});

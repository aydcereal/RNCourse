import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoal);
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal, index) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText} key={index}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 40,
    flex: 1,
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#5e0acc",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
  },
  goalText: {
    fontSize: 18,
    color: "white",
  },
});

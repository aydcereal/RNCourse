import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.buttonContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
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
});

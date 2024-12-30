import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = (props) => {
  const [goalName, setGoal] = useState("");

  const handleInputChange = (event) => {
    setGoal(event);
  };
  const addGoalHandler = () => {
    props.onAddGoalClick(goalName);
    setGoal("");
  };

  const cancelHandler = () => {
    props.onCancelGoal();
  };

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.goal}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          value={goalName}
          onChangeText={handleInputChange}
          style={styles.textInput}
          placeholder="Add your goal here..."
        />
        <View style={styles.btnContainer}>
          <Button onPress={addGoalHandler} title="Add goal" color="#2E8B57" />
          <Button title="Cancel" onPress={cancelHandler} color="#003366" />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  goal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#ca3d0c'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    marginRight: 10,
    color: '#120438',
    borderRadius: 6,
    padding: 16
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 10
  },
});

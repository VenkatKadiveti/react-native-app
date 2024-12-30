import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [listOfGoals, setGoalList] = useState([]);
  const [modalVisible, setModalVisibility] = useState(false);

  const onAddGoalClick = (goalName) => {
    setGoalList((currentGoalsList) => [
      ...currentGoalsList,
      { text: goalName, key: Math.random().toString() },
    ]);
    console.log(listOfGoals)
    setModalVisibility(false);
  };

  const onAddnewGoalClicked = () => {
    setModalVisibility(true);
  };
  const onCancelGoal = () => {
    setModalVisibility(false);
  };

  const deteleGoalHandler = (id) => {
    setGoalList((currentGoalsList) => {
      return currentGoalsList.filter((goal) => goal.key !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={onAddnewGoalClicked} />
        <GoalInput
          onAddGoalClick={onAddGoalClick}
          modalVisible={modalVisible}
          onCancelGoal={onCancelGoal}
        />
      <View style={styles.goalsContainer}>
        <FlatList
          data={listOfGoals}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <GoalItem
                goalItem={itemData}
                deteleGoalHandler={deteleGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#FFCC00'
  },
  goalsContainer: {
    flex: 8,
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
  },
});

import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ goalItem, deteleGoalHandler }) => {

    const onDeleteClick = () => {
        console.log(goalItem.item)
        deteleGoalHandler(goalItem.item.key);
    }

  return (
      <View style={styles.individualGola} key={goalItem.key}>
        <Pressable android_ripple={{color: '#82cef6'}} onPress={onDeleteClick}>
        <Text style={styles.goalText}>{goalItem.item.text}</Text>
        </Pressable>
      </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  individualGola: {
    backgroundColor: "#9f0cca",
    marginVertical: 10,
    borderRadius: 5,
    color: "#FFF",
  },
  goalText: {
    color: "#FFF",
    padding: 10,
  },
});

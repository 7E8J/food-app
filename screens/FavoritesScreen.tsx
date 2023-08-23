import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

export const FavoritesScreen = ({navigation}) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  return (
    favMeals.length === 0 ? 
    <View style={styles.screen}>
      <Text>The Favorites Screen!</Text>
    </View>
    :
  <MealList listData={favMeals} navigation={navigation}/>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;

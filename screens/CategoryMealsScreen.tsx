import React from "react";
import {
  StyleSheet,
  View
} from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";


export const CategoryMealsScreen = ({route, navigation}: any) => {
  const catId = route.params.categoryid

  const displayedMeals = MEALS.filter(
    (meal) => {
      return meal.categoryIds.indexOf(catId) >= 0
    }
  );

  return (
    <View style={styles.screen}>
      <MealList listData={displayedMeals} navigation={navigation}/>
    </View>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

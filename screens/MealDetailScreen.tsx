import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const MealDetailScreen = ({navigation, route} : any) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Text>Dish : {route.params.dish}</Text>
      <Text>Step : {route.params.step}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
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

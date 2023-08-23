import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CategoriesScreen, CategoryMealsScreen, MealDetailScreen } from "../screens";
import { StackParamList } from "../types/navigation";
import { DrawerNavigation } from "./DrawerNavigation";

const Root = createNativeStackNavigator<StackParamList>();

export default function RootNavigation() {
  return (
      <Root.Navigator 
        screenOptions= {{ 
          headerStyle: { 
            backgroundColor: "#4a148c", 
          },
          headerTintColor: "white"
        }}>
        <Root.Screen name="DrawerNavigation" component={DrawerNavigation} 
          options={{
            headerShown: false,
          }}
        />
        <Root.Screen name="Categories" component={CategoriesScreen}
          options={{
            title: "Meal Categories"
          }}
        />
        <Root.Screen name="CategoryMeals" component={CategoryMealsScreen} 
          options={
            ({route}) => ({
              title : route.params.categoryTitle
            })
          } 
        />
        <Root.Screen name="MealDetail" component={MealDetailScreen} 
          options={
            ({route}) => ({
              title : route.params.dish,
            })
          }
        />
      </Root.Navigator>
  );
}

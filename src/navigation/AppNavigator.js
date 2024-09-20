import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Questions from "../screens/Questions";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "white",
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Questions" component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

import { View, Text, Button, Pressable } from "react-native";
import React from "react";

const Questions = ({ navigation }) => {
  return (
    <View>
      <Text>Questions</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default Questions;

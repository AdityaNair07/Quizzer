import {
  View,
  Text,
  Button,
  Pressable,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import tw, { style } from "twrnc";

const Splash = ({ navigation }) => {
  const instructions = [
    "Each question has 4 options.",
    "Only if you answer a question, you can move to the next question",
    "Progress bar can be seen at top of questions",
    "Happy Quizzing",
  ];

  const styles = StyleSheet.create({
    title: {
      fontFamily: "SpaceMono-Regular",
    },
  });

  return (
    <View style={tw`flex w-full h-full gap-5 p-5`}>
      <Text
        style={tw.style(
          "text-2xl text-orange-600 font-bold text-center",
          styles.title
        )}
      >
        Quizzer
      </Text>
      <Image
        source={require("../../assets/images/splash.svg")}
        style={tw.style("h-3/6 w-full", { aspectRatio: 1 })}
      />
      <View style={tw.style("w-full p-1 flex flex-col justify-start gap-3")}>
        <Text style={tw.style("text-xl text-orange-500 font-semibold")}>
          The More You Know...
        </Text>
        <FlatList
          data={instructions}
          renderItem={({ item }) => {
            return (
              <Text
                style={tw.style("font-bold text-gray-800")}
              >{`\u2022 ${item}`}</Text>
            );
          }}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Questions")}
        style={tw.style(
          "rounded-md shadow-md border border-orange-200 bg-orange-500 p-2"
        )}
      >
        <Text
          style={tw.style(
            "text-white font-semibold text-center uppercase",
            styles.title
          )}
        >
          Let's get started
        </Text>
      </Pressable>
    </View>
  );
};

export default Splash;

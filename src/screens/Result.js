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
import { useRoute } from "@react-navigation/native";

const Result = ({ navigation }) => {
  const route = useRoute();

  const { score } = route.params;

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
        Congratulations
      </Text>
      <Text
        style={tw.style(
          "text-xl text-orange-600 font-bold text-center",
          styles.title
        )}
      >
        You have completed the Quiz!!!
      </Text>
      <Text
        style={tw.style(
          "text-lg bg-orange-600 text-white rounded-md shadow-md font-bold text-center py-2 border-orange-500 border",
          styles.title
        )}
      >
        Score: {score}/50
      </Text>
      <Image
        source={require("../../assets/images/result.svg")}
        style={tw.style("h-3/6 w-full", { aspectRatio: 1 })}
      />
      <Pressable
        onPress={() => navigation.popToTop()}
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
          Back to Home
        </Text>
      </Pressable>
    </View>
  );
};

export default Result;

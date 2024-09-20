import { View, Text, Button, Pressable, FlatList, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { questions } from "../../assets/data/Questions";

const Questions = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      console.log("Last question");
      return;
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setIsSelected(null);
      setIsCorrect(false);
    }
    console.log("score: ", score);
  };

  const handleOption = (option) => {
    setIsSelected(option);

    let isAnswerCorrect = questions[currentQuestion].correctOption === option;

    if (isAnswerCorrect) setScore((prev) => prev + 5);

    setIsCorrect(isAnswerCorrect);
  };

  return (
    <View style={tw.style("w-full h-full p-5")}>
      <Text style={tw.style("font-bold text-xl text-orange-600 mb-5")}>
        {questions[currentQuestion].question}
      </Text>
      {questions[currentQuestion].options.map((option, index) => {
        return (
          <Pressable
            key={index}
            disabled={isSelected}
            style={tw.style(
              `w-full rounded-md border px-2 py-3 mb-3 ${
                isSelected === option
                  ? isCorrect
                    ? "bg-green-500 border-green-600 text-white"
                    : "bg-red-500 border-red-600 text-white"
                  : "bg-white border-orange-500 text-slate-800"
              }`
            )}
            onPress={() => {
              handleOption(option);
            }}
          >
            <Text style={tw.style(`font-semibold}`)}>{option}</Text>
          </Pressable>
        );
      })}

      <Pressable
        onPress={() =>
          currentQuestion === questions.length - 1
            ? navigation.navigate("Result", { score: score })
            : handleNext()
        }
        disabled={!isSelected}
        style={tw.style(
          `w-full rounded-md shadow-md ${
            isSelected ? "bg-orange-500" : "bg-orange-200"
          } p-2 mt-5`
        )}
      >
        <Text style={tw.style("text-xl font-semibold text-center text-white")}>
          {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
        </Text>
      </Pressable>
    </View>
  );
};

export default Questions;

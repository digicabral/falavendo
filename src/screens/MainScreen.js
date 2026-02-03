import { Link } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import Board from "../components/Board";
import Sentence from "../components/Sentence";
import TtsService from "../services/TtsService";

const MainScreen = () => {
  const [sentence, setSentence] = useState([]);

  const cards = [
    { id: "1", label: "Eu", image: require("../assets/images/eu.png") },
    {
      id: "2",
      label: "quero",
      image: require("../assets/images/quero.png"),
    },
    {
      id: "2",
      label: "preciso",
      image: require("../assets/images/quero.png"),
    },
    {
      id: "3",
      label: "comer",
      image: require("../assets/images/comer.png"),
    },
    {
      id: "4",
      label: "beber",
      image: require("../assets/images/beber.png"),
    },
    {
      id: "5",
      label: "banheiro",
      image: require("../assets/images/banheiro.png"),
    },
    {
      id: "6",
      label: "ajuda",
      image: require("../assets/images/ajuda.png"),
    },
  ];

  const handleCardSelect = (card) => {
    setSentence([...sentence, card]);
    TtsService.speak(card.label);
  };

  const handleSpeakSentence = () => {
    const textToSpeak = sentence.map((card) => card.label).join(" ");
    TtsService.speak(textToSpeak);
  };

  const handleClearSentence = () => {
    setSentence([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Falavendo</Text>
      <Sentence sentence={sentence} onClear={handleClearSentence} />
      <View style={styles.buttonsContainer}>
        <Button title="Falar" onPress={handleSpeakSentence} />
        <Link href="/phrases" style={styles.link}>
          <Text style={styles.linkText}>Frases Prontas</Text>
        </Link>
      </View>
      <Board cards={cards} onCardSelect={handleCardSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Adjusted padding
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  link: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    textAlign: "center",
  },
  linkText: {
    fontSize: 16,
  },
});

export default MainScreen;

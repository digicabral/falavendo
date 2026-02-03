import { Link } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import Board from "../components/Board";
import Sentence from "../components/Sentence";
import TtsService from "../services/TtsService";

const MainScreen = () => {
  const [sentence, setSentence] = useState([]);
  const [selectedParentCard, setSelectedParentCard] = useState(null);

  const categories = [
    {
      id: "feelings",
      label: "Sentimentos",
      image: require("../assets/images/sentimentos/alegria.png"),
      children: [
        {
          id: "cold",
          label: "Frio",
          image: require("../assets/images/sentimentos/frio.png"),
        },
        {
          id: "alegria",
          label: "Alegria",
          image: require("../assets/images/sentimentos/alegria.png"),
        },
        {
          id: "gratidão",
          label: "Gratidão",
          image: require("../assets/images/sentimentos/gratidão.png"),
        },
      ],
    },
    {
      id: "food",
      label: "Comida",
      image: require("../assets/images/comida/comida.png"),
      children: [
        {
          id: "rice",
          label: "Arroz",
          image: require("../assets/images/comida/arroz.png"),
        },
      ],
    },
    {
      id: "bodyparts",
      label: "Partes do Corpo",
      image: require("../assets/images/corpo/cabeca.png"),
      children: [
        {
          id: "head",
          label: "Cabeça",
          image: require("../assets/images/corpo/cabeca.png"),
        },
      ],
    },
  ];

  const handleParentCardSelect = (card) => {
    setSelectedParentCard(card);
    TtsService.speak(card.label);
  };

  const handleChildCardSelect = (card) => {
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
      <View style={styles.topSection}>
        <Text style={styles.title}>Falar</Text>
        <Sentence sentence={sentence} onClear={handleClearSentence} />
        <View style={styles.buttonsContainer}>
          <Button title="Falar" onPress={handleSpeakSentence} />
          <Link href="/phrases" style={styles.link}>
            <Text style={styles.linkText}>Frases Prontas</Text>
          </Link>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.leftPanel}>
          <Board cards={categories} onCardSelect={handleParentCardSelect} />
        </View>
        <View style={styles.rightPanel}>
          {selectedParentCard ? (
            <Board
              cards={selectedParentCard.children}
              onCardSelect={handleChildCardSelect}
            />
          ) : (
            <Text style={styles.placeholderText}>Selecione uma categoria</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Adjusted padding
    paddingHorizontal: 10,
  },
  topSection: {
    flex: 0.2, // Takes 40% of the screen height
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bottomSection: {
    flex: 0.8, // Takes 60% of the screen height
    flexDirection: "row",
    gap: 10, // Added gap for spacing between panels
    alignItems: "stretch",
  },
  leftPanel: {
    flex: 2, // Parent cards
    borderRadius: 8,
  },
  rightPanel: {
    flex: 2, // Child cards take more space
    borderRadius: 8,
  },
  placeholderText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#666",
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

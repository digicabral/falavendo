import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import TtsService from "../services/TtsService";

const phrases = [
  "Olá, tudo bem?",
  "Preciso de ajuda, por favor.",
  "Estou com fome.",
  "Estou com sede.",
  "Onde fica o banheiro?",
  "Obrigada!",
];

const PhrasesScreen = () => {
  const handlePhraseSelect = (phrase) => {
    TtsService.speak(phrase);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handlePhraseSelect(item)}
    >
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>{"Voltar"}</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Frases Prontas</Text>
      </View>
      <FlatList
        data={phrases}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    height: 60, // Give the header a fixed height
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  backButton: {
    position: "absolute",
    left: 16,
    paddingVertical: 10,
    paddingRight: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: "#007AFF", // Standard iOS blue or similar
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
  },
});

export default PhrasesScreen;

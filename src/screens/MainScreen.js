import { Link } from "expo-router";
import { useRouter } from "expo-router";

import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Board from "../components/Board";
import Sentence from "../components/Sentence";
import TtsService from "../services/TtsService";

const MainScreen = () => {
  const [sentence, setSentence] = useState([]);
  const [selectedParentCard, setSelectedParentCard] = useState(null);
  const router = useRouter();

  const categories = [
    {
      id: "phrases",
      label: "Necessidades",
      image: require("../assets/images/frases/estou_com.png"),
      children: [
        {
          id: "eu_quero",
          label: "Eu quero",
          image: require("../assets/images/frases/quero.png"),
        },
        {
          id: "estou_com",
          label: "Estou com",
          image: require("../assets/images/frases/estou_com.png"),
        },
        {
          id: "preciso_de",
          label: "Preciso de",
          image: require("../assets/images/frases/preciso_de.png"),
        },
        {
          id: "estou_sentindo",
          label: "Estou sentindo",
          image: require("../assets/images/frases/estou_sentindo.png"),
        },
      ],
    },
    {
      id: "feelings",
      label: "Sentimentos",
      image: require("../assets/images/sentimentos/sentimentos.png"),
      children: [
        {
          id: "dor",
          label: "Dor",
          image: require("../assets/images/sentimentos/dor.png"),
        },
        {
          id: "fome",
          label: "Fome",
          image: require("../assets/images/sentimentos/dor.png"),
        },
        {
          id: "sede",
          label: "Sede",
          image: require("../assets/images/sentimentos/dor.png"),
        },
        {
          id: "triste",
          label: "Triste",
          image: require("../assets/images/sentimentos/triste.png"),
        },
        {
          id: "feliz",
          label: "Feliz",
          image: require("../assets/images/sentimentos/feliz.png"),
        },
        {
          id: "cansada",
          label: "Cansada",
          image: require("../assets/images/sentimentos/cansada.png"),
        },
        {
          id: "frio",
          label: "Frio",
          image: require("../assets/images/sentimentos/frio.png"),
        },
        {
          id: "calor",
          label: "Calor",
          image: require("../assets/images/sentimentos/feliz.png"),
        },
        {
          id: "medo",
          label: "Medo",
          image: require("../assets/images/sentimentos/medo.png"),
        },
      ],
    },
    {
      id: "food",
      label: "Comida",
      image: require("../assets/images/comida/comida.png"),
      children: [
        {
          id: "agua",
          label: "Água",
          image: require("../assets/images/comida/agua.png"),
        },
        {
          id: "arroz",
          label: "Arroz",
          image: require("../assets/images/comida/arroz.png"),
        },
        {
          id: "feijao",
          label: "Feijão",
          image: require("../assets/images/comida/feijao.png"),
        },
        {
          id: "carne",
          label: "Carne",
          image: require("../assets/images/comida/carne.png"),
        },
        {
          id: "pao",
          label: "Pão",
          image: require("../assets/images/comida/pao.png"),
        },
        {
          id: "leite",
          label: "Leite",
          image: require("../assets/images/comida/leite.png"),
        },
        {
          id: "fruta",
          label: "Fruta",
          image: require("../assets/images/comida/fruta.png"),
        },
        {
          id: "doce",
          label: "Doce",
          image: require("../assets/images/comida/doce.png"),
        },
      ],
    },

    {
      id: "bodyparts",
      label: "Corpo",
      image: require("../assets/images/corpo/cabeca.png"),
      children: [
        {
          id: "cabeca",
          label: "Cabeça",
          image: require("../assets/images/corpo/cabeca.png"),
        },
        {
          id: "olho",
          label: "Olho",
          image: require("../assets/images/corpo/olho.png"),
        },
        {
          id: "ouvido",
          label: "Ouvido",
          image: require("../assets/images/corpo/ouvido.png"),
        },
        {
          id: "boca",
          label: "Boca",
          image: require("../assets/images/corpo/boca.png"),
        },
        {
          id: "garganta",
          label: "Garganta",
          image: require("../assets/images/corpo/garganta.png"),
        },
        {
          id: "peito",
          label: "Peito",
          image: require("../assets/images/corpo/peito.png"),
        },
        {
          id: "barriga",
          label: "Barriga",
          image: require("../assets/images/corpo/barriga.png"),
        },
        {
          id: "braco",
          label: "Braço",
          image: require("../assets/images/corpo/braco.png"),
        },
        {
          id: "perna",
          label: "Perna",
          image: require("../assets/images/corpo/pernas.png"),
        },
        {
          id: "pes",
          label: "Pés",
          image: require("../assets/images/corpo/pes.png"),
        },
      ],
    },
  ];

  const handleParentCardSelect = (card) => {
    setSelectedParentCard(card);
  };

  const handleChildCardSelect = (card) => {
    setSentence((prev) => [...prev, card]);
    TtsService.speak(card.label);
  };

  const handleSpeakSentence = () => {
    const textToSpeak = sentence.map((card) => card.label).join(" ");
    if (textToSpeak) {
      TtsService.speak(textToSpeak);
    }
  };

  const handleClearSentence = () => {
    setSentence([]);
  };

  return (
    <View style={styles.container}>
      {/* TOPO */}
      <View style={styles.topSection}>
        <Sentence sentence={sentence} onClear={handleClearSentence} />

        <View style={styles.buttonsContainer}>
          <Pressable
            style={StyleSheet.compose(styles.actionButton, styles.clearButton)}
            onPress={handleClearSentence}
          >
            <Text style={styles.actionButtonText}>Limpar</Text>
          </Pressable>

          <Pressable
            style={StyleSheet.compose(styles.actionButton, styles.speakButton)}
            onPress={handleSpeakSentence}
          >
            <Text style={styles.actionButtonText}>Falar</Text>
          </Pressable>

          <Pressable
            style={{
              ...styles.actionButton,
              ...styles.phrasesButton,
            }}
            onPress={() => router.push("/phrases")}
          >
            <Text style={styles.actionButtonText}>Frases Prontas</Text>
          </Pressable>
        </View>
      </View>

      {/* BASE */}
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
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  topSection: {
    flex: 0.2,
    justifyContent: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    gap: 14,
  },

  bottomSection: {
    flex: 0.8,
    flexDirection: "row",
  },

  leftPanel: {
    flex: 1,
  },

  rightPanel: {
    flex: 1,
  },

  placeholderText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    color: "#666",
  },

  actionButton: {
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 140,
  },

  actionButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },

  clearButton: {
    backgroundColor: "#E0E0E0",
  },

  speakButton: {
    backgroundColor: "#A5D6A7",
  },

  phrasesButton: {
    backgroundColor: "#90CAF9",
  },
});

export default MainScreen;

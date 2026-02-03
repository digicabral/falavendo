import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Sentence = ({ sentence, onClear }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {sentence.map((card) => card.label).join(" ")}
      </Text>
      <Button title="Limpar" onPress={onClear} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
});

export default Sentence;

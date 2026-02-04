import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Sentence = ({ sentence }) => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {sentence.map((card) => card.label).join(" ")}
        </Text>
      </View>
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
  textContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    color: "#000",
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
    width: 80,
    marginRight: 10,
    alignSelf: "center",
  },
  button: {
    marginTop: 10,
    width: 80,
    marginRight: 10,
    alignSelf: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
});

export default Sentence;

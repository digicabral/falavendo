import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Card from "./Card";

const Board = ({ cards, onCardSelect }) => {
  const renderItem = ({ item }) => <Card item={item} onCardSelect={onCardSelect} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-around',
    marginBottom: 10, // Add some vertical space between rows
  },
});

export default Board;

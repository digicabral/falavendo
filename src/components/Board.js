import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from './Card';

const Board = ({ cards, onCardSelect }) => {
  const renderItem = ({ item }) => (
    <Card image={item.image} label={item.label} onSelect={onCardSelect} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default Board;

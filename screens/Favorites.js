// screens/Favorites.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites1</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Favorites;
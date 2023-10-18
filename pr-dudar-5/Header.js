import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 18,
  },
});

export default Header;

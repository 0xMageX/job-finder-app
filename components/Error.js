import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Error = ({ message }) => (
  <View style={styles.error}>
    <Text>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default Error;

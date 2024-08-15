import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const JobDetailScreen = ({ route }) => {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text>Location: {job.location}</Text>
      <Text>Salary: {job.salary}</Text>
      <Text>Phone: {job.phone}</Text>
      {/* Add more details if available */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default JobDetailScreen;

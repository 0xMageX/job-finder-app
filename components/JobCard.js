import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookmarkButton from './BookmarkButton';

const JobCard = ({ job, onPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text>{job.location}</Text>
      <Text>{job.salary}</Text>
      <Text>{job.phone}</Text>
      <BookmarkButton job={job} />
      <TouchableOpacity onPress={onPress} style={styles.detailsButton}>
        <Text>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default JobCard;


import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import JobCard from '../components/JobCard';
import { fetchJobs } from '../utils/api';

const JobsScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // Define the loadJobs function
  const loadJobs = async () => {
    try {
      const newJobs = await fetchJobs(page);
      console.log('Fetched jobs:', newJobs); // Log the data
      if (newJobs && Array.isArray(newJobs)) {
        setJobs((prevJobs) => [...prevJobs, ...newJobs]);
        setPage((prevPage) => prevPage + 1);
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      setError('Failed to load jobs.');
    } finally {
      setLoading(false);
    }
  };

  // Call loadJobs when the component mounts and when page changes
  useEffect(() => {
    loadJobs();
  }, [page]);

  // Handler for pagination
  const handleEndReached = () => {
    if (!loading) {
      setLoading(true);
      loadJobs();
    }
  };

  // Render each job item
  const renderJob = ({ item }) => (
    <JobCard
      job={item}
      onPress={() => navigation.navigate('JobDetail', { job: item })}
    />
  );

  // Display loading or error messages
  if (loading && !error) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  // Main rendering
  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={renderJob}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default JobsScreen;

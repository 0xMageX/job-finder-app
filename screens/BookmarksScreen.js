import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import JobCard from '../components/JobCard';
import { fetchBookmarks } from '../utils/storage';
import Loader from '../components/Loader';
import Error from '../components/Error';

const BookmarksScreen = ({ navigation }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const data = await fetchBookmarks();
        setBookmarks(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load bookmarks.');
        setLoading(false);
      }
    };

    loadBookmarks();
  }, []);

  const renderJob = ({ item }) => (
    <JobCard
      job={item}
      onPress={() => navigation.navigate('JobDetail', { job: item })}
    />
  );

  return (
    <View style={styles.container}>
      {loading && !error && <Loader />}
      {error && <Error message={error} />}
      <FlatList
        data={bookmarks}
        renderItem={renderJob}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BookmarksScreen;

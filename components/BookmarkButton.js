import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const BookmarkButton = ({ job }) => {
  const handleBookmark = async () => {
    try {
      let bookmarks = await AsyncStorage.getItem('bookmarks');
      bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
      bookmarks.push(job);
      await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } catch (error) {
      console.error('Error saving bookmark:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handleBookmark} style={styles.button}>
      <Text>Bookmark</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default BookmarkButton;

import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchBookmarks = async () => {
  try {
    const bookmarks = await AsyncStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    return [];
  }
};

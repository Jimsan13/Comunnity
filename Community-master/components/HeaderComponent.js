import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBarComponent from './SearchBar';
import Notifications from './Notifications';

const HeaderComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.header}>
      <SearchBarComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Notifications />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f8f8f8', // linea de color 
  },
});

export default HeaderComponent;

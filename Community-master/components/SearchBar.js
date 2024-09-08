import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          placeholder="Buscar"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.textInput}
          underlineColor="transparent"
          theme={{ colors: { primary: 'transparent', underlineColor: 'transparent' } }}/>
      </View>
      <IconButton
        icon="magnify"
        size={28}
        color="white"
        style={styles.iconButton}
        onPress={() => console.log('Search for', searchQuery)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    flex: 1,
    marginRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#2EC6BD',
    height: 40,
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: 'transparent',
  },
  iconButton: {
    backgroundColor: '#2EC6BD',
    borderRadius: 20,
  },
  icon: {
    color: '#309EED',
  },
});

export default SearchBar;


import React from 'react';
import { View } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <TextInput
        placeholder="Buscar"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={{ flex: 1, marginRight: 10 }}
        mode="outlined"
      />
      <IconButton
        icon="magnify"
        size={28}
        onPress={() => console.log('Search for', searchQuery)}
      />
    </View>
  );
};

export default SearchBar;

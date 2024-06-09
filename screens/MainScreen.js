import React from 'react';
import { View, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import MenuComponent from '../components/MenuComponent';
import SearchBar from '../components/SearchBar';
import Notifications from '../components/Notifications';
import ItemList from '../components/ItemList';

const MainScreen = () => {
  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <MenuComponent />
        <SearchBar />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
          <Notifications />
        </View>
        <ScrollView>
          <ItemList />
        </ScrollView>
      </View>
    </PaperProvider>
  );
};

export default MainScreen;

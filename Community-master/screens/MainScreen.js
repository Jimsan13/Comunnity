import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import ItemList from '../components/ItemList';
import HeaderComponent from '../components/HeaderComponent';  
import Footer from '../components/Footer';

const MainScreen = () => {
  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}/>
          <HeaderComponent />  
        <ScrollView>
          <ItemList />
        </ScrollView>
        <Footer/>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 35, // linea para modijifar la posicion de la barra 
  },
});

export default MainScreen;



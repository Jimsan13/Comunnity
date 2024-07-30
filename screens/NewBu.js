import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderComponent from '../components/HeaderComponent';  
import Footer from '../components/Footer';  

const JoinBusinessScreen = () => {
  return (
    <View style={styles.screenContainer}>
     <View style={styles.headerContainer} />
      <HeaderComponent />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.joinContainer}>
          <Text style={styles.joinTitle}>Unirse a un negocio</Text>
          <TextInput
            style={styles.accessCodeInput}
            placeholder="Código de acceso..."
          />
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Unirse</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  joinContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  joinTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  accessCodeInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: '#00CED1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    marginTop: 35, // línea para modificar la posición de la barra
  },
});

export default JoinBusinessScreen;

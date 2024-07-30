import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent';  
import Footer from '../components/Footer'; 
import { useNavigation } from '@react-navigation/native';

const BusinessForm = () => {
  const navigation = useNavigation();

  const handleSave = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}/>
      <HeaderComponent />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Card.Content>
            <TouchableOpacity style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Subir fotos</Text>
            </TouchableOpacity>
          </Card.Content>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre de tu negocio"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            placeholder="Número de teléfono"
            placeholderTextColor="#A9A9A9"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="#A9A9A9"
            keyboardType="email-address"
          />
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>
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
    padding: 10,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginBottom: 16,
  },
  uploadButton: {
    backgroundColor: '#2EC6BD',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: '#2EC6BD',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
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

export default BusinessForm;

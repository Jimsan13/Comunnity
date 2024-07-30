import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';  
import Footer from '../components/Footer'; 

const PropuestaUpload = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { business } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}/>
      <HeaderComponent />
      <View style={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Propuesta</Text>
            <TextInput
              style={styles.input}
              placeholder="Titulo"
              placeholderTextColor="#D3D3D3"
            />
            <View style={styles.propuestaContainer}>
              <TextInput
                style={styles.textArea}
                placeholder="Agregar propuesta"
                placeholderTextColor="#D3D3D3"
                multiline
              />
            </View>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Propuestas', { business })}>
              <Text style={styles.buttonText}>Subir</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  card: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  propuestaContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    padding: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#2EC6BD',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  headerContainer: {
    marginTop: 35, // linea para modificar la posicion de la barra
  },
});

export default PropuestaUpload;

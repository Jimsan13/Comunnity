import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DataTable, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';  
import Footer from '../components/Footer'; 

const PropuestasScreen = ({ route }) => {
  const navigation = useNavigation();
  const { business } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}/>
      <HeaderComponent />
      <View style={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Image source={require('../assets/images/logo.png')} style={styles.image} />
            <Text style={styles.title}>{business.name}</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={24} color="#FFD700" />
              <Text style={styles.rating}>{business.rating}</Text>
            </View>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Título</DataTable.Title>
                <DataTable.Title>Estado</DataTable.Title>
                <DataTable.Title>Creado por</DataTable.Title>
                <DataTable.Title>Revisores</DataTable.Title>
                <DataTable.Title>Last update</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>Propuesta servicios</DataTable.Cell>
                <DataTable.Cell>
                  <View style={styles.statusContainer}>
                    <Text style={styles.statusText}>In progress</Text>
                  </View>
                </DataTable.Cell>
                <DataTable.Cell>Juan</DataTable.Cell>
                <DataTable.Cell>Dueño</DataTable.Cell>
                <DataTable.Cell>03/02/2024, 1:49 pm</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Creacion de propuesta', { business })}
            >
              <Text style={styles.buttonText}>Propuesta</Text>
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
  image: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rating: {
    fontSize: 18,
    marginLeft: 5,
  },
  statusContainer: {
    backgroundColor: '#FFD700',
    borderRadius: 4,
    padding: 4,
  },
  statusText: {
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#309eed',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  headerContainer: {
    marginTop: 35, // linea para modificar la posicion de la barra
  },
});

export default PropuestasScreen;

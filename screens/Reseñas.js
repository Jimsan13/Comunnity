import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';  
import Footer from '../components/Footer'; 

const ReseñaScreen = ({ route }) => {
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
            <Text style={styles.description}>{business.description}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Creacion de reseña', { business })}
            >
              <Text style={styles.buttonText}>Reseña</Text>
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
  description: {
    fontSize: 16,
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

export default ReseñaScreen;

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Footer from '../components/Footer';

const UserDetailScreen = ({ navigation }) => {
  const user = {
    name: 'John Doe',
    email: 'john@gmail.com',
    registrationDate: '29/05/2022',
    age: 21,
    gender: 'Masculino',
    seniority: 2,
    phone: '+52-223-122-7889',
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <View style={styles.userDetailCard}>
      { /* <Image source={require('../assets/images/user-avatar.png')} style={styles.userImage} /> */ }
        
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>Correo electronico: {user.email}</Text>
        <Text style={styles.userRegistrationDate}>Fecha de alta: {user.registrationDate}</Text>
        <Text style={styles.userInfo}>Edad (años): {user.age}   Género: {user.gender}</Text>
        <Text style={styles.userInfo}>Antigüedad (años): {user.seniority}   Teléfono: {user.phone}</Text>
        <TouchableOpacity style={styles.deactivateButton} onPress={() => { /* Lógica para dar de baja */ }}>
          <Text style={styles.deactivateButtonText}>Dar de baja</Text>
        </TouchableOpacity>
      </View>
      <Footer style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: 35, // línea para modificar la posición de la barra
  },
  userDetailCard: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 10,
  },
  userRegistrationDate: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 10,
  },
  deactivateButton: {
    backgroundColor: '#FF6347',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  deactivateButtonText: {
    color: '#FFFFFF',
  },
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
});

export default UserDetailScreen;

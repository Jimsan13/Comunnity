import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';  
import Footer from '../components/Footer';  

const ProfileScreen = () => {
  return (
    <View style={styles.screenContainer}>
    <View style={styles.headerContainer} />
      <HeaderComponent />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarPlaceholder} />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileInfo}>22 años | Community employee</Text>
          <View style={styles.separator} />
          <Text style={styles.sectionTitle}>Método de pago</Text>
          <TextInput
            style={styles.input}
            placeholder="Número de tarjeta"
          />
          <TextInput
            style={styles.input}
            placeholder="Nombre en la tarjeta"
          />
          <TextInput
            style={styles.input}
            placeholder="Código de Seguridad"
          />
          <TextInput
            style={styles.input}
            placeholder="Fecha de vencimiento"
          />
          
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
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
  profileContainer: {
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
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0E0E0',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileInfo: {
    color: '#888888',
    marginBottom: 20,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  paypalLogo: {
    width: 100,
    height: 50,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#00CED1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutButtonText: {
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

export default ProfileScreen;

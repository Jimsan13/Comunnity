import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button, TextInput, RadioButton, useTheme, Card } from 'react-native-paper';

import logo from '../assets/images/logo.png';

/* const RegistroScreen = ({ navigation }) => {
  const [checked, setChecked] = useState('dueño'); 
  const theme = useTheme(); */

  const HomeScreen = ({ navigation }) => {
    const [checked, setChecked] = useState('');
  
    const handlePress = () => {
      if (checked === 'dueño') {
        navigation.navigate('Owner');
      } else if (checked === 'comprador') {
        navigation.navigate('Buyer');
      } else {
        alert('Por favor selecciona una opción.');
      }
    };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          {/* Logo */}
          <Image
            source={logo}
            style={styles.logo}
          />

          <TextInput 
            label="Nombre completo" 
            style={styles.input} 
            mode="outlined"
            theme={{ colors: { background: '#EBEBEB', primary: '#309EED', text: '#000000' } }}
          />
          <TextInput 
            label="Correo electrónico" 
            style={styles.input} 
            mode="outlined"
            theme={{ colors: { background: '#EBEBEB', primary: '#309EED', text: '#000000' } }}
          />
          <TextInput 
            label="Contraseña" 
            secureTextEntry 
            style={styles.input} 
            mode="outlined"
            theme={{ colors: { background: '#EBEBEB', primary: '#309EED', text: '#000000' } }}
          />
          
      <Text style={styles.text}>Soy:</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="dueño"
          status={checked === 'dueño' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('dueño')}
          color="#309EED"
        />
        <Text style={styles.radioText}>Dueño</Text>
        <RadioButton
          value="comprador"
          status={checked === 'comprador' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('comprador')}
          color="#309EED"
        />
        <Text style={styles.radioText}>Comprador</Text>
      </View>
          <Button 
            title=""
            mode="contained" 
            onPress={handlePress} 
            style={styles.button}
            labelStyle={{ color: '#FFFFFF' }}
            contentStyle={{ backgroundColor: '#309EED' }}
          >
            Registrarse
          </Button>
          
          <View style={styles.loginContainer}>
            <Text style={styles.text}>¿Tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkText}>Inicia sesión</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>Descarga la app:</Text>
          <Image
            source={require('../assets/images/google-play.png')} 
            style={styles.googlePlay}
          />
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // Fondo blanco
    shadowColor: '#000', // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.25, // Opacidad de la sombra
    shadowRadius: 3.84, // Radio de la sombra
    elevation: 5, // Elevación para Android
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center'
  },
  input: {
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#EBEBEB'
  },
  text: {
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center'
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  radioText: {
    marginRight: 20,
    color: '#000000'
  },
  button: {
    width: '100%',
    backgroundColor: '#309EED',
    marginBottom: 10
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center'
  },
  linkText: {
    color: '#309EED'
  },
  googlePlay: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default HomeScreen;

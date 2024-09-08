import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, TextInput, useTheme, Card } from 'react-native-paper';


import logo from '../assets/images/logo.png';

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();

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
            label="Correo electrónico"
            mode="outlined"
            style={styles.input}
            theme={{ colors: { background: '#EBEBEB', primary: '#309EED', text: '#000000' } }}
          />
          <TextInput
            label="Contraseña"
            secureTextEntry
            mode="outlined"
            style={styles.input}
            theme={{ colors: { background: '#EBEBEB', primary: '#309EED', text: '#000000' } }}
          />
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Main')}
            style={styles.button}
            labelStyle={{ color: '#FFFFFF' }}
            contentStyle={{ backgroundColor: '#309EED' }}
          >
            Iniciar sesión
          </Button>

          <View style={styles.registerContainer}>
            <Text style={styles.text}>¿No tienes cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
              <Text style={styles.registerText}>Regístrate</Text>
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
    justifyContent: 'center',
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
    width: 100, // Ancho más grande
    height: 100, // Alto más grande
    marginBottom: 20,
    alignSelf: 'center'
  },
  input: {
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#EBEBEB',
  },
  button: {
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#309EED',
  },
  registerContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    textAlign: 'center',
  },
  registerText: {
    color: '#309EED',
  },
  googlePlay: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default LoginScreen;

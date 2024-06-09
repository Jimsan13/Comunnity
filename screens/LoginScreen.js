import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      {/* Logo */}
      <Image
       
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />

      <TextInput
        label="Correo electrónico"
        mode="outlined"
        style={{ marginBottom: 10, width: '100%' }}
      />
      <TextInput
        label="Contraseña"
        secureTextEntry
        mode="outlined"
        style={{ marginBottom: 10, width: '100%' }}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Main')}
        style={{ marginBottom: 10, width: '100%' }}
      >
        Iniciar sesión
      </Button>

      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <Text style={{ color: theme.colors.text }}>¿No tienes cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
          <Text style={{ color: theme.colors.primary }}>Regístrate</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ color: theme.colors.text, marginBottom: 10 }}>Descarga la app:</Text>
      <Image
       
        style={{ width: 150, height: 50 }}
      />
    </View>
  );
};

export default LoginScreen;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, TextInput, RadioButton, useTheme } from 'react-native-paper';

const RegistroScreen = ({ navigation }) => {
  const [checked, setChecked] = useState('dueño'); // Estado para el radio button
  const theme = useTheme();

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <TextInput 
        label="Nombre completo" 
        style={{ marginBottom: 10, width: '100%' }} 
        mode="outlined"
      />
      <TextInput 
        label="Correo electrónico" 
        style={{ marginBottom: 10, width: '100%' }} 
        mode="outlined"
      />
      <TextInput 
        label="Contraseña" 
        secureTextEntry 
        style={{ marginBottom: 10, width: '100%' }} 
        mode="outlined"
      />
      
      <Text style={{ marginBottom: 10, color: theme.colors.text }}>Soy:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <RadioButton
          value="dueño"
          status={checked === 'dueño' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('dueño')}
          color={theme.colors.primary}
        />
        <Text style={{ marginRight: 20, color: theme.colors.text }}>Dueño</Text>
        <RadioButton
          value="comprador"
          status={checked === 'comprador' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('comprador')}
          color={theme.colors.primary}
        />
        <Text style={{ color: theme.colors.text }}>Comprador</Text>
      </View>

      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Login')} 
        style={{ width: '100%' }}
      >
        Registrarse
      </Button>
      
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: theme.colors.text }}>¿Tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: theme.colors.primary }}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistroScreen;


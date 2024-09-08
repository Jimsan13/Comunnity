import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer}
        onPress={() => navigation.navigate('Main')}>
        <MaterialIcons name="people" size={24} color="black" />
        <Text style={styles.label}>Servicios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}
       onPress={() => navigation.navigate('Seguidor')}>
        <FontAwesome5 name="user-check" size={24} color="black" />
        <Text style={styles.label}>Seguidos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}
       onPress={() => navigation.navigate('Recompensa')}>
        <FontAwesome5 name="trophy" size={24} color="black" />
        <Text style={styles.label}>Recompensas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.iconContainer}
        onPress={() => navigation.navigate('MenuDueño')}
      >
        <MaterialIcons name="more-horiz" size={24} color="black" />
        <Text style={styles.label}>Más</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: 'black',
  },
});

export default Footer;


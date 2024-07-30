import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card, List, Divider } from 'react-native-paper';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';
import Footer from '../components/Footer';
import logo from '../assets/images/logo.png';

const MenuScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>Community</Text>
          </View>
          <Divider />
          <List.Section>
            <List.Item
              title="Servicios"
              left={() => <MaterialIcons name="person" size={24} />}
              onPress={() => navigation.navigate('Main')}
            />
            <List.Item
              title="Seguidos"
              left={() => <MaterialIcons name="people" size={24} />}
              onPress={() => navigation.navigate('Seguidor')}
            />
            <Divider />
            <List.Item
              title="Recompensas"
              left={() => <FontAwesome5 name="trophy" size={24} />}
              onPress={() => navigation.navigate('Recompensa')}
            />
            <List.Item
              title="Español"
              left={() => <FontAwesome5 name="language" size={24} />}
            />
            <List.Item
              title="Unirse a un negocio"
              left={() => <MaterialIcons name="business" size={24} />}
              onPress={() => navigation.navigate('Nuevo negocio')}
            />
            <List.Item
              title="Perfil"
              left={() => <MaterialIcons name="person" size={24} />}
              onPress={() => navigation.navigate('Perfil')}
            />
          </List.Section>
        </Card>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '90%',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  logo: {
    width: 75,
    height: 75,
    marginBottom: 20,
  },
  headerContainer: {
    height: 60, // Adjust height as needed
    marginTop: 35,
  },
  footerContainer: {
    height: 60, // Adjust height as needed
  },
});

export default MenuScreen;

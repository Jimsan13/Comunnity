import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Footer from '../components/Footer';

const UserItem = ({ user, onPress }) => {
  return (
    <TouchableOpacity style={styles.userItem} onPress={onPress}>
      { /* <Image source={require('../assets/images/user-avatar.png')} style={styles.userImage} /> */ }
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userAge}>{user.age} años</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
        <Text style={styles.userPhone}>{user.phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

const UsersListScreen = ({ navigation }) => {
  const users = [
    { name: 'John Doe', age: '36', email: 'john@gmail.com', phone: '+52-223-122-7889' },
    { name: 'John Doe', age: '36', email: 'john@gmail.com', phone: '+52-223-122-7889' },
  ];

  const handleUserPress = () => {
    navigation.navigate('UserDetailScreen');
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {users.map((user, index) => (
          <UserItem key={index} user={user} onPress={handleUserPress} />
        ))}
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
  headerContainer: {
    marginTop: 35, // línea para modificar la posición de la barra
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userDetails: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  userAge: {
    color: '#888888',
  },
  userEmail: {
    color: '#888888',
  },
  userPhone: {
    color: '#888888',
  },
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
});

export default UsersListScreen;

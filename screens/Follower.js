import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderComponent from '../components/HeaderComponent';  
import Footer from '../components/Footer';  

const FollowersScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}/>
      <HeaderComponent />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          {[1, 2, 3, 4].map((item, index) => (
            <View key={index} style={styles.followerItem}>
              <View style={styles.followerInfo}>
                <View style={styles.avatarPlaceholder} />
                <View>
                  <Text style={styles.followerName}>Ciber Marco | Tepeaca</Text>
                  <Text style={styles.followerUsername}>John Doe</Text>
                </View>
              </View>
              <View style={styles.followerActions}>
                <Icon name="star" size={24} color="#FFD700" />
                <Text style={styles.followerRating}>5</Text>
                <TouchableOpacity style={styles.unfollowButton}>
                  <Text style={styles.unfollowButtonText}>Dejar de seguir</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
    padding: 10,
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  followerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  followerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
  },
  followerName: {
    fontWeight: 'bold',
  },
  followerUsername: {
    color: '#888888',
  },
  followerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followerRating: {
    marginHorizontal: 5,
  },
  unfollowButton: {
    backgroundColor: '#00CED1',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  unfollowButtonText: {
    color: '#FFFFFF',
  },
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    marginTop: 35, // linea para modijifar la posicion de la barra 
  },
});

export default FollowersScreen;

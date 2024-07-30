import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Footer from '../components/Footer';

const ServiceItem = ({ service }) => {
  const canRedeem = parseInt(service.points.split('/')[0], 10) >= parseInt(service.points.split('/')[1], 10);

  return (
    <View style={styles.serviceItem}>
      <Image source={require('../assets/images/logo.png')} style={styles.serviceImage} />
      <View style={styles.serviceDetails}>
        <Text style={styles.serviceTitle}>{service.title}</Text>
        <Text style={styles.serviceSubtitle}>{service.subtitle}</Text>
        <View style={styles.serviceInfo}>
          <Text style={styles.servicePoints}>{service.points}</Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.redeemButton, canRedeem ? styles.redeemButtonActive : styles.redeemButtonInactive]}>
        <Text style={styles.redeemButtonText}>{canRedeem ? 'Canjear' : 'Puntos insuficientes'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ServicesCre = () => {
  const services = [
    { title: 'Servicio 2', subtitle: 'Cafe internet', points: '12/20' },
    { title: 'Servicio 2', subtitle: 'Cafe internet', points: '12/10' },
    { title: 'Servicio 2', subtitle: 'Cafe internet', points: '12/10' },
  ];

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer} />
      <HeaderComponent />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.newRewardContainer}>
        <Text style={styles.newRewardText}>Nueva recompensa</Text>
      </View>
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
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  serviceImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  serviceDetails: {
    flex: 1,
    marginLeft: 10,
  },
  serviceTitle: {
    fontWeight: 'bold',
  },
  serviceSubtitle: {
    color: '#888888',
  },
  serviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  servicePoints: {
    marginLeft: 5,
    color: '#888888',
  },
  redeemButton: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  redeemButtonActive: {
    backgroundColor: '#00CED1',
  },
  redeemButtonInactive: {
    backgroundColor: '#FF6347',
  },
  redeemButtonText: {
    color: '#FFFFFF',
  },
  newRewardContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  newRewardText: {
    color: '#00CED1',
    fontWeight: 'bold',
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

export default ServicesCre;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
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

const RewardModal = ({ visible, onClose }) => {
  const [name, setName] = useState('');
  const [points, setPoints] = useState('');
  const [active, setActive] = useState(false);

  const handleSave = () => {
    // Aquí puedes agregar lógica para guardar la recompensa
    // Navegar o hacer cualquier otra acción que necesites
    if (typeof onClose === 'function') {
      onClose(); // Asegúrate de que onClose es una función válida
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Subir foto</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Nombre de la recompensa"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Puntos solicitados"
            value={points}
            onChangeText={setPoints}
            keyboardType="numeric"
          />
          <View style={styles.activeContainer}>
            <Text style={styles.activeLabel}>Activa</Text>
            <TouchableOpacity
              style={[styles.activeButton, active ? styles.activeButtonActive : styles.activeButtonInactive]}
              onPress={() => setActive(!active)}
            >
              <Text style={styles.activeButtonText}>{active ? 'Sí' : 'No'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ServicesCre = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const services = [
    { title: 'Servicio 1', subtitle: 'Cafe internet', points: '12/20' },
    { title: 'Servicio 2', subtitle: 'Cafe internet', points: '12/10' },
    { title: 'Servicio 3', subtitle: 'Cafe internet', points: '12/10' },
  ];

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
          <TouchableOpacity
            style={styles.newRewardButton}
            onPress={openModal}
          >
            <Text style={styles.newRewardText}>Nueva recompensa</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer style={styles.footer} />
      <RewardModal
        visible={modalVisible}
        onClose={closeModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  headerContainer: {
    marginTop: 50, // Ajusta el margen superior para mover el header más abajo
    marginBottom: 20, // Ajusta el margen inferior si es necesario
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
  newRewardButton: {
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#00CED1',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  newRewardText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  uploadButton: {
    backgroundColor: '#00CED1',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
  },
  activeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  activeLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  activeButton: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  activeButtonActive: {
    borderColor: '#00CED1',
    backgroundColor: '#00CED1',
  },
  activeButtonInactive: {
    borderColor: '#FF6347',
    backgroundColor: '#FFFFFF',
  },
  activeButtonText: {
    color: '#1E1E1E',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#00CED1',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#FF6347',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ServicesCre;


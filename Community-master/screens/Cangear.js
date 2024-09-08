import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const RewardModal = ({ visible, onClose }) => {
  const [name, setName] = useState('');
  const [points, setPoints] = useState('');
  const [active, setActive] = useState(false);

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
            <Text>Activa</Text>
            <TextInput
              style={styles.activeInput}
              value={active ? 'Sí' : 'No'}
              onFocus={() => setActive(!active)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={onClose}>
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '80%',
  },
  activeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  activeInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginLeft: 10,
    width: 50,
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
  },
  cancelButton: {
    backgroundColor: '#FF6347',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelButtonText: {
    color: '#FFFFFF',
  },
});

export default RewardModal;

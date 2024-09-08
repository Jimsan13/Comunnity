import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const ShareModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Compartir en</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome name="whatsapp" size={24} color="black" />
              <Text>Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome name="facebook" size={24} color="black" />
              <Text>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome name="twitter" size={24} color="black" />
              <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome name="link" size={24} color="black" />
              <Text>Copiar Link</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Cerrar</Text>
          </TouchableOpacity>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semitransparente
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  icon: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#309eed',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ShareModal;

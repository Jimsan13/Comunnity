import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';

const Notifications = () => {
  const [visible, setVisible] = useState(false);

  const onToggleNotification = () => {
    setVisible(!visible);
  };

  const onDismissNotification = () => {
    setVisible(false);
  };

  const notifications = [
    { id: 1, text: 'Notificación 1' },
    { id: 2, text: 'Notificación 2' },
  ];

  return (
    <View style={styles.container}>
      <IconButton
        icon="bell"
        size={28}
        onPress={onToggleNotification}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onDismissNotification}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              {notifications.map(notification => (
                <TouchableOpacity
                  key={notification.id}
                  style={styles.notification}
                  onPress={() => {}}
                >
                  <View style={styles.squareAvatar} />
                  <Text style={styles.notificationText}>{notification.text}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity onPress={onDismissNotification} style={styles.dismissButton}>
              <Text style={styles.dismissText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 100,
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  squareAvatar: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  notificationText: {
    fontSize: 16,
  },
  dismissButton: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#309EED',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  dismissText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Notifications;

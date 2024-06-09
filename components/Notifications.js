import React from 'react';
import { IconButton } from 'react-native-paper';

const Notifications = () => {
  return (
    <IconButton
      icon="bell"
      size={28}
      onPress={() => console.log('Show notifications')}
    />
  );
};

export default Notifications;

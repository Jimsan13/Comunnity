import React from 'react';
import { Appbar, Menu, Switch } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Notifications from './Notifications';
import SearchBar from '../components/SearchBar';



const MenuComponent = ({ toggleDarkMode, isDarkMode }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View>
      <Appbar.Header>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="menu" onPress={openMenu} />}
        >
          <Menu.Item
            onPress={() => {}}
            title="Servicios"
            icon={() => <Icon name="account-group-outline" size={20} />}
          />
          <Menu.Item
            onPress={() => {}}
            title="Seguidos"
            icon={() => <Icon name="account-check-outline" size={20} />}
          />
          <Menu.Item
            onPress={() => {}}
            title="Recompensas"
            icon={() => <Icon name="trophy-outline" size={20} />}
          />
          <Menu.Item
            onPress={() => {}}
            title="Español"
            icon={() => <Icon name="translate" size={20} />}
          />
          <Menu.Item
            onPress={() => {}}
            title="Unirse a un negocio"
            icon={() => <Icon name="briefcase-outline" size={20} />}
          />
          <Menu.Item
            onPress={toggleDarkMode}
            title="Modo Oscuro"
            icon={() => <Icon name="theme-light-dark" size={20} />}
            right={() => <Switch value={isDarkMode} onValueChange={toggleDarkMode} />}
          />
          <Menu.Item
            onPress={() => {}}
            title="Mi perfil"
            icon={() => <Icon name="account-circle-outline" size={20} />}/>
        </Menu>
        <SearchBar />
        <Notifications/>
      </Appbar.Header>
    </View>
  );
};

export default MenuComponent;

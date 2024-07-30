import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import BusinessDetailsScreen from '../screens/BusinessDetailsScreen';
import Compartir from '../screens/Compartir';
import PropuestasScreen from '../screens/Propuestas';
import PropuestaUpload from '../screens/PropuestaUploadScreen';
import ReseñaScreen from '../screens/Reseñas';
import ReseñaUpload from '../screens/ReseñaUploadScreen';
import MenuScreen from '../screens/MenuScreen';
import FollowersScreen from '../screens/Follower';
import JoinBusinessScreen from '../screens/NewBu';
import ServicesScreen from '../screens/Reward';
import ProfileScreen from '../screens/Perfil';
import BusinessForm from '../screens/InicioDueño';
import BusinessCo from '../screens/Codigoacceso';
import ServicesCre from '../screens/RecompesaCrea';
import RewardModal from '../screens/Cangear';
import UsersListScreen from '../screens/Empleados';
import UserDetailScreen from '../screens/EmpleadosEdit';
import MenuDu from '../screens/MenuDueño';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={RegistroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessDetails" component={BusinessDetailsScreen}  options={{ headerShown: false }} /> 
        <Stack.Screen name="Compartir" component={Compartir}  options={{headerShown: false }}/>
        <Stack.Screen name="Propuestas" component={PropuestasScreen} options={{headerShown: false }} />
        <Stack.Screen name="Creacion de propuesta" component={PropuestaUpload} options={{headerShown: false }}/>
        <Stack.Screen name="Reseñas" component={ReseñaScreen} options={{headerShown: false }} />
       <Stack.Screen name="Creacion de reseña" component={ReseñaUpload} options={{headerShown: false}}/>
       <Stack.Screen name="Seguidor"component={FollowersScreen} options={{headerShown: false}}/>
       <Stack.Screen name="Nuevo negocio"component={JoinBusinessScreen} options={{headerShown: false}}/>
       <Stack.Screen name="Recompensa"component={ServicesScreen} options={{headerShown: false}}/>
       <Stack.Screen name="Perfil"component={ProfileScreen} options={{headerShown: false}}/>
       <Stack.Screen name="InicioDueño"component={BusinessForm} options={{headerShown: false}}/>
       <Stack.Screen name="CoDueño"component={BusinessCo} options={{headerShown: false}}/>
       <Stack.Screen name="ReDueño"component={ServicesCre} options={{headerShown: false}}/>
       <Stack.Screen name="Cangeo"component={RewardModal} options={{headerShown: false}}/>
       <Stack.Screen name="Empleados"component={UsersListScreen} options={{headerShown: false}}/>
       <Stack.Screen name="EmpleadosLista"component={UserDetailScreen} options={{headerShown: false}}/>
       <Stack.Screen name="MenuDueño"component={MenuDu} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
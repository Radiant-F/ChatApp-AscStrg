import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// SCREEN
import Login from '../auth/Login';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import NewMessage from '../screens/NewMessage';
import Drawer from './Drawer';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Drawer} />
        <Stack.Screen name="HomeOri" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="NewMessage" component={NewMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

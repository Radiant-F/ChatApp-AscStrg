import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Konten from '../screens/Drawer';

const Drawer = createDrawerNavigator();

const Side = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Konten {...props} />}>
      <Drawer.Screen name="Drawer" component={Home} />
    </Drawer.Navigator>
  );
};

export default Side;

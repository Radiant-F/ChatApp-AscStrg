import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/HomeAdmin';
import Home2 from '../screens/HomeUser';
import Konten from '../screens/Drawer';

const Drawer = createDrawerNavigator();

const Side = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Konten {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Home2" component={Home2} />
    </Drawer.Navigator>
  );
};

export default Side;

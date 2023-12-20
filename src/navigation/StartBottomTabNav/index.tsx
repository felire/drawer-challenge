import * as React from 'react';

import {DrawerScreenProps} from '@react-navigation/drawer';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedNavigator from 'navigation/AnimatedNavigator';

import GenericScreen from 'screens/GenericScreen';
import HomeStack from 'navigation/HomeStackNav';

const Tab = createBottomTabNavigator();

function Start(props: DrawerScreenProps<any>) {
  return (
    <AnimatedNavigator {...props}>
      <Tab.Navigator screenOptions={{header: () => null}}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Contact" component={GenericScreen} />
      </Tab.Navigator>
    </AnimatedNavigator>
  );
}

export default Start;

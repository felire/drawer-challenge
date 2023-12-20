import * as React from 'react';
import {View} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import DrawerNav from './DrawerNav';

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(0, 0, 0, 0)',
  },
};

export default function Navigation() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer theme={navigatorTheme}>
        <DrawerNav />
      </NavigationContainer>
    </View>
  );
}

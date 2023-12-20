import {Dimensions, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Start from 'navigation/StartBottomTabNav';
import DrawerContent from './DrawerContent';

import GenericAnimatedScreen from 'screens/GenericAnimatedScreen';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      screenOptions={{
        header: () => null,
        drawerType: 'back',
        overlayColor: 'transparent',
        drawerActiveTintColor: 'red',
        drawerActiveBackgroundColor: 'rgba(255, 0, 0, 0.1)',
        drawerInactiveTintColor: 'white',
        drawerStyle: {
          backgroundColor: '#18162d',
          width: Dimensions.get('window').width / 2.2,
        },
        sceneContainerStyle: {
          backgroundColor: '#18162d',
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Start"
        component={Start}
        options={{drawerLabel: 'Start'}}
      />
      <Drawer.Screen
        name="YourCart"
        component={GenericAnimatedScreen}
        options={{drawerLabel: 'Your Cart'}}
      />
      <Drawer.Screen
        name="Favorites"
        component={GenericAnimatedScreen}
        options={{drawerLabel: 'Favorites'}}
      />
      <Drawer.Screen
        name="YourOrders"
        component={GenericAnimatedScreen}
        options={{drawerLabel: 'Your Orders'}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav;

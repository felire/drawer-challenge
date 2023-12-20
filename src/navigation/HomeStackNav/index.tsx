import {createStackNavigator} from '@react-navigation/stack';
import GenericScreen from 'screens/GenericScreen';
import HomeScreen from 'screens/HomeScreen';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={HomeScreen} />
      <Stack.Screen name="Screen2" component={GenericScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;

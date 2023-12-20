import {Text, View} from 'react-native';
import AnimatedNavigator from 'navigation/AnimatedNavigator';
import {DrawerScreenProps} from '@react-navigation/drawer';

const GenericAnimatedScreen = (props: DrawerScreenProps<any>) => {
  return (
    <AnimatedNavigator {...props}>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text>Empty Screen</Text>
      </View>
    </AnimatedNavigator>
  );
};

export default GenericAnimatedScreen;

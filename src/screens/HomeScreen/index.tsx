import {StackScreenProps} from '@react-navigation/stack';
import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}: StackScreenProps<any>) => {
  const onPress = () => {
    navigation.navigate('Screen2');
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text>Empty Screen - Press and Navigate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

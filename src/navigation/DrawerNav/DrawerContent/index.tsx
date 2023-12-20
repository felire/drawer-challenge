import {View} from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const progress = useDrawerProgress();
  const animatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, 40], {
      extrapolateRight: Extrapolation.CLAMP,
    });
    return {
      transform: [{translateY}],
    };
  });
  return (
    <Animated.View style={[animatedStyles, {flex: 1}]}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          labelStyle={[
            {
              fontSize: 20,
              width: '100%',
              margin: 20,
              textAlign: 'center',
              color: 'white',
            },
            {
              fontWeight: 'bold',
              marginBottom: 25,
              fontSize: 30,
            },
          ]}
          label="Beka"
        />
        <DrawerItemList {...props} />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'gray',
            margin: 10,
            alignContent: 'center',
          }}
        />
        <DrawerItem
          inactiveTintColor="white"
          activeBackgroundColor="rgba(255, 0, 0, 0.1)"
          activeTintColor="red"
          label="Sign Out"
        />
      </DrawerContentScrollView>
    </Animated.View>
  );
};

export default DrawerContent;

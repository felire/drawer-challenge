import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {
  DrawerScreenProps,
  useDrawerProgress,
} from '@react-navigation/drawer';

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

function AnimatedNavigator({
  children,
  navigation,
  route,
}: {
  children: React.ReactNode;
} & DrawerScreenProps<any>) {
  const progress = useDrawerProgress();
  const animatedStyles = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, -10], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    const translateX = interpolate(progress.value, [0, 1], [0, 70], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    const translateY = interpolate(progress.value, [0, 1], [0, 40], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    return {
      transform: [{translateY}, {rotate: `${rotate}deg`}, {translateX}],
    };
  });
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const title = route.name;
  return (
    <Animated.View
      style={[
        animatedStyles,
        {flex: 1, borderColor: 'white', borderRadius: 30, borderWidth: 10},
      ]}>
      <View
        style={{
          height: 120,
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={toggleDrawer} style={{marginRight: 20}}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text>{title}</Text>
      </View>
      {children}
    </Animated.View>
  );
}

export default AnimatedNavigator;

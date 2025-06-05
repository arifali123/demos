import React, { useCallback } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

import type { Screens } from '../../screens';
import { NavigationItem } from '../navigation/navigation-item';

type GridItemProps = {
  item: (typeof Screens)[number];
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  colors: readonly string[];
};

const GridItem: React.FC<GridItemProps> = React.memo(
  ({ item, onPress, style, colors }) => {
    const handleNavigate = useCallback(() => {
      onPress();
    }, [onPress]);

    return (
      <Animated.View
        style={[styles.itemContainer, style]}
        layout={LinearTransition.duration(350)}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(300)}>
        {/* Main touchable area for the app item */}
        <NavigationItem
          style={styles.pressable}
          onNavigate={handleNavigate}
          config={{
            borderRadius: 16,
            color: colors[0],
          }}>
          <View style={styles.iconContainer}>
            <View
              style={[
                styles.gradient,
                {
                  backgroundColor: colors[0],
                },
              ]}>
              <View style={styles.iconWrapper}>
                <item.icon />
              </View>
            </View>
          </View>
        </NavigationItem>
        <Text style={styles.label} numberOfLines={2}>
          {item.name}
        </Text>
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
  },
  pressable: {
    flex: 1,
    width: '100%',
    marginBottom: 6,
  },
  iconContainer: {
    aspectRatio: 1,
    width: '100%',
  },
  gradient: {
    flex: 1,
    borderRadius: 16,
    borderCurve: 'continuous',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'FiraCode-Regular',
    lineHeight: 14,
  },
});

export { GridItem };

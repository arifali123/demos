import React, { useCallback, useEffect, useState } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';
import { getColors } from 'react-native-image-colors';

import type { Screens } from '../../screens';
import { NavigationItem } from '../navigation/navigation-item';
import { Image } from 'expo-image';

type GridItemProps = {
  item: (typeof Screens)[number];
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  colors: readonly string[];
};

// Mapping of screen names to their corresponding icon files
const ICON_MAPPINGS: Record<string, any> = {
  sudoku: require('../../../../assets/icons/sudoku.png'),
  'composable-text': require('../../../../assets/icons/composable-text.png'),
  'threads-holo-ticket': require('../../../../assets/icons/threads-holo-ticket.png'),
  'shake-to-delete': require('../../../../assets/icons/shake-to-delete.png'),
  'particles-button': require('../../../../assets/icons/particles-button.png'),
  'ios-home-grid': require('../../../../assets/icons/ios-home-grid.png'),
  '3d-scroll-transition': require('../../../../assets/icons/3d-scroll-transition.png'),
  'fluid-tab-interaction': require('../../../../assets/icons/fluid-tab-interaction.png'),
  'clock-time-picker': require('../../../../assets/icons/clock-time-picker.png'),
  'card-shader-reflections': require('../../../../assets/icons/cards-shader-reflections.png'),
};

const GridItem: React.FC<GridItemProps> = React.memo(
  ({ item, onPress, style, colors }) => {
    const [extractedColors, setExtractedColors] = useState<{
      primary: string;
      background: string;
    }>({ primary: colors[0], background: colors[0] });

    const handleNavigate = useCallback(() => {
      onPress();
    }, [onPress]);

    const backgroundImageSource =
      ICON_MAPPINGS[item.name.toLowerCase().split(' ').join('-')];

    // This has to be precomputed since it won't work on Expo Go
    useEffect(() => {
      if (backgroundImageSource) {
        getColors(backgroundImageSource, {
          fallback: colors[0],
          cache: true,
          key: item.name,
        })
          .then(result => {
            if (result.platform === 'ios') {
              setExtractedColors({
                primary: result.primary,
                background: result.background,
              });
            } else if (result.platform === 'android') {
              setExtractedColors({
                primary: result.dominant || colors[0],
                background: result.vibrant || colors[0],
              });
            }
          })
          .catch(() => {
            // Fallback to original colors if extraction fails
            setExtractedColors({ primary: colors[0], background: colors[0] });
          });
      }
    }, [backgroundImageSource, colors, item.name]);

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
            color: extractedColors.background,
          }}>
          <View style={styles.iconContainer}>
            <View
              style={[
                styles.gradient,
                { backgroundColor: extractedColors.primary },
              ]}>
              {backgroundImageSource && (
                <Image
                  source={backgroundImageSource}
                  style={styles.backgroundImage}
                  contentFit="cover"
                />
              )}
              <View style={styles.iconWrapper}>{/* <item.icon /> */}</View>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
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

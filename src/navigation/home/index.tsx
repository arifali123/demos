import { useNavigation } from '@react-navigation/native';
import { useAtomValue } from 'jotai';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  LinearTransition,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { Screens } from '../screens';
import { ActiveScreensAtom } from '../states/filters';

import { GridItem } from './components/grid-item';
import { getColorForItem } from './constants';
import { useCustomNavigation } from './navigation/expansion-provider';

/** Grid layout constants */
const SPACING = 12;
const NUM_COLUMNS = 4;

const HomeGrid = React.memo(() => {
  const navigation = useNavigation();
  const { width: screenWidth } = useWindowDimensions();
  const { top: safeTop } = useSafeAreaInsets();

  /**
   * Calculate layout dimensions based on screen width
   */
  const layoutConfig = useMemo(() => {
    const horizontalPadding = SPACING * 2;
    const availableWidth = screenWidth - horizontalPadding;

    // Calculate item size based on available width and fixed number of columns
    const totalSpacing = SPACING * (NUM_COLUMNS - 1);
    const itemSize = Math.floor((availableWidth - totalSpacing) / NUM_COLUMNS);

    return {
      itemSize,
      spacing: SPACING,
      containerPadding: horizontalPadding / 2,
    };
  }, [screenWidth]);

  const data = useAtomValue(ActiveScreensAtom);

  /**
   * Group items into rows for proper grid layout
   */
  const itemRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < data.length; i += NUM_COLUMNS) {
      rows.push(data.slice(i, i + NUM_COLUMNS));
    }
    return rows;
  }, [data]);

  const handleItemPress = useCallback(
    (item: (typeof Screens)[number]) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navigation.navigate(item.route);
    },
    [navigation],
  );

  const { springProgress } = useCustomNavigation();
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: 1 - springProgress.value * 0.05 },
        {
          translateY: springProgress.value * 5,
        },
      ],
    };
  });

  return (
    <Animated.View style={[rStyle, styles.container]}>
      <Animated.ScrollView
        contentContainerStyle={[
          styles.gridContainer,
          {
            paddingTop: safeTop + 20,
            paddingHorizontal: layoutConfig.containerPadding,
            paddingBottom: 150,
          },
        ]}
        layout={LinearTransition}
        showsVerticalScrollIndicator={false}>
        {itemRows.map((row, rowIndex) => (
          <Animated.View
            key={rowIndex}
            style={[
              styles.row,
              // Only center if the row has the full number of columns
              row.length < NUM_COLUMNS && { justifyContent: 'flex-start' },
            ]}
            layout={LinearTransition}>
            {row.map((item, itemIndex) => {
              const globalIndex = rowIndex * NUM_COLUMNS + itemIndex;
              const colorPalette = getColorForItem(item, globalIndex);

              return (
                <GridItem
                  key={item.route}
                  item={item}
                  colors={colorPalette.colors}
                  style={[
                    {
                      width: layoutConfig.itemSize,
                      height: layoutConfig.itemSize + 30, // Extra height for label
                      padding: SPACING / 2,
                    },
                    itemIndex < row.length - 1 && {
                      marginRight: layoutConfig.spacing,
                    },
                  ]}
                  onPress={() => handleItemPress(item)}
                />
              );
            })}
          </Animated.View>
        ))}
      </Animated.ScrollView>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  gridContainer: {
    flexGrow: 1,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SPACING,
  },
});

export { HomeGrid as Home };

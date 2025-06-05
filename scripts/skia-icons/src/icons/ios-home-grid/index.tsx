import {
  LinearGradient,
  Group,
  Rect,
} from '@shopify/react-native-skia/lib/commonjs/headless';
import React from 'react';

import { ICON_SIZE } from '../../shared/constants';

export const iOSHomeGridIcon: React.FC = () => {
  return (
    <Group>
      {/* Main icon background */}
      <Rect
        x={0}
        y={0}
        width={ICON_SIZE}
        height={ICON_SIZE}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: ICON_SIZE }}
          colors={['#E8E9ED', '#B8B9BD']} // Brushed Steel palette
        />
      </Rect>

      {/* Top highlight for depth */}
      <Rect
        x={0}
        y={0}
        width={ICON_SIZE}
        height={ICON_SIZE * 0.5}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: ICON_SIZE * 0.5 }}
          colors={[
            '#E8E9ED40', // 25% opacity highlight
            '#E8E9ED10', // 6% opacity
          ]}
        />
      </Rect>

      {/* Subtle inner glow effect */}
      <Rect
        x={2}
        y={2}
        width={ICON_SIZE - 4}
        height={ICON_SIZE - 4}
        style="stroke"
        strokeWidth={1}
        color="#E8E9ED30"
      />

      {/* Outer border for definition */}
      <Rect
        x={0}
        y={0}
        width={ICON_SIZE}
        height={ICON_SIZE}
        style="stroke"
        strokeWidth={1}
        color="#B8B9BD60"
      />
    </Group>
  );
}; 
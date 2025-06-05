import {
  LinearGradient,
  Group,
  RoundedRect,
} from '@shopify/react-native-skia/lib/commonjs/headless';
import React from 'react';

import type { IconGenerationProps } from '../../shared/types';

export const iOSHomeGridIcon: React.FC<IconGenerationProps> = ({
  width,
  height,
  Skia,
}) => {
  const size = 1024; // Fixed size
  const cornerRadius = 180; // iOS-style corner radius for 1024px icon
  
  return (
    <Group>
      {/* Main icon background */}
      <RoundedRect
        x={0}
        y={0}
        width={size}
        height={size}
        r={cornerRadius}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: size }}
          colors={['#E8E9ED', '#B8B9BD']} // Brushed Steel palette
        />
      </RoundedRect>

      {/* Top highlight for depth */}
      <RoundedRect
        x={0}
        y={0}
        width={size}
        height={size * 0.5}
        r={cornerRadius}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: size * 0.5 }}
          colors={[
            '#E8E9ED40', // 25% opacity highlight
            '#E8E9ED10', // 6% opacity
          ]}
        />
      </RoundedRect>

      {/* Subtle inner glow effect */}
      <RoundedRect
        x={2}
        y={2}
        width={size - 4}
        height={size - 4}
        r={cornerRadius - 2}
        style="stroke"
        strokeWidth={1}
        color="#E8E9ED30"
      />

      {/* Outer border for definition */}
      <RoundedRect
        x={0}
        y={0}
        width={size}
        height={size}
        r={cornerRadius}
        style="stroke"
        strokeWidth={1}
        color="#B8B9BD60"
      />
    </Group>
  );
}; 
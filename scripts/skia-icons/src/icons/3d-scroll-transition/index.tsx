import {
  LinearGradient,
  SweepGradient,
  Group,
  Rect,
  Text,
  Blur,
  Paint,
} from '@shopify/react-native-skia/lib/commonjs/headless';
import React from 'react';

import { ICON_SIZE } from '../../shared/constants';

export const ThreeDScrollTransitionIcon: React.FC = () => {
  const center = ICON_SIZE / 2;
  const layerHeight = ICON_SIZE / 8;
  const layerWidth = ICON_SIZE * 0.7;
  const layerStartX = (ICON_SIZE - layerWidth) / 2;

  return (
    <Group>
      {/* Black background */}
      <Rect
        x={0}
        y={0}
        width={ICON_SIZE}
        height={ICON_SIZE}
        color="#000000"
      />

      {/* Create 7 scrolling layers with 3D perspective effect */}
      {Array.from({ length: 7 }, (_, i) => {
        const layerIndex = i;
        const yPosition = center - (layerHeight * 3.5) + (layerHeight * layerIndex);
        
        // Calculate 3D perspective scaling and opacity based on distance from center
        const distanceFromCenter = Math.abs(layerIndex - 3);
        const scale = 1 - (distanceFromCenter * 0.15);
        const opacity = 1 - (distanceFromCenter * 0.25);
        const skew = distanceFromCenter * 0.1;
        
        const actualWidth = layerWidth * scale;
        const actualHeight = layerHeight * scale;
        const actualX = center - (actualWidth / 2);

        return (
          <Group
            key={layerIndex}
            transform={[
              { translateX: actualX },
              { translateY: yPosition },
              { skewX: layerIndex < 3 ? -skew : layerIndex > 3 ? skew : 0 },
            ]}>
            
            {/* Layer with gradient and blur for 3D effect */}
            <Group
              layer={
                distanceFromCenter > 0 ? (
                  <Paint>
                    <Blur blur={distanceFromCenter * 2} />
                  </Paint>
                ) : undefined
              }>
              
              {/* Main layer rectangle */}
              <Rect
                x={0}
                y={0}
                width={actualWidth}
                height={actualHeight}
                opacity={opacity}>
                <SweepGradient
                  c={{ x: actualWidth / 2, y: actualHeight / 2 }}
                  colors={[
                    '#00FFFF', // cyan
                    '#FF00FF', // magenta  
                    '#FFFF00', // yellow
                    '#00FFFF', // cyan
                  ]}
                />
              </Rect>

              {/* Highlight effect on focused layer */}
              {layerIndex === 3 && (
                <Rect
                  x={0}
                  y={0}
                  width={actualWidth}
                  height={actualHeight / 3}
                  opacity={0.3}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: actualHeight / 3 }}
                    colors={['#FFFFFF80', '#FFFFFF00']}
                  />
                </Rect>
              )}
            </Group>
          </Group>
        );
      })}

      {/* Scroll indicator on the right side */}
      <Group transform={[{ translateX: ICON_SIZE * 0.9 }, { translateY: ICON_SIZE * 0.2 }]}>
        <Rect
          x={0}
          y={0}
          width={8}
          height={ICON_SIZE * 0.6}
          color="#333333"
        />
        <Rect
          x={2}
          y={ICON_SIZE * 0.2}
          width={4}
          height={ICON_SIZE * 0.2}
          color="#00FFFF"
        />
      </Group>

      {/* Motion lines to indicate scrolling */}
      {Array.from({ length: 3 }, (_, i) => (
        <Group key={i} transform={[{ translateX: ICON_SIZE * 0.05 }]}>
          <Rect
            x={i * 15}
            y={center - 50 + (i * 30)}
            width={30}
            height={2}
            opacity={0.4}
            color="#00FFFF"
          />
          <Rect
            x={i * 15}
            y={center + 50 + (i * 30)}
            width={25}
            height={2}
            opacity={0.3}
            color="#FF00FF"
          />
        </Group>
      ))}
    </Group>
  );
}; 
import React, { useCallback } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useDerivedValue,
} from 'react-native-reanimated';
import {
  Canvas,
  Fill,
  Shader,
  Skia,
  useClock,
} from '@shopify/react-native-skia';

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

    const clock = useClock();

    // Noise shader with animated time
    const noiseShader = Skia.RuntimeEffect.Make(`
      uniform float time;
      uniform vec2 resolution;
      uniform vec3 color;
      
      // Simple noise function
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }
      
      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        
        vec2 u = f * f * (3.0 - 2.0 * f);
        
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      
      // Smooth distortion function inspired by Raycast wallpapers
      vec2 distort(vec2 st, float time) {
        float distortion1 = sin(st.x * 3.14159 + time * 0.5) * 0.1;
        float distortion2 = cos(st.y * 3.14159 + time * 0.3) * 0.1;
        return st + vec2(distortion1, distortion2);
      }
      
      half4 main(vec2 fragCoord) {
        vec2 st = fragCoord / resolution.xy;
        vec2 originalSt = st;
        
        // Apply smooth distortion like Raycast wallpapers
        st = distort(st, time);
        
        // Create multiple radial gradients for blob-like effect
        vec2 center1 = vec2(0.3, 0.4);
        vec2 center2 = vec2(0.7, 0.6);
        
        float dist1 = distance(st, center1);
        float dist2 = distance(originalSt, center2);
        
        // Smooth blob-like gradients
        float blob1 = 1.0 - smoothstep(0.0, 0.6, dist1);
        float blob2 = 1.0 - smoothstep(0.0, 0.4, dist2);
        
        // Base color - keep it neutral
        vec3 baseColor = color * 0.6;
        
        // Detect if color is light (white/light grey) and reduce color variations
        float colorBrightness = (color.r + color.g + color.b) / 3.0;
        bool isLightTheme = colorBrightness > 0.9;
        
        vec3 color1, color2, color3;
        if (isLightTheme) {
          // For light themes, keep variations minimal and neutral
          color1 = baseColor * vec3(1.05, 1.05, 1.05); // Very subtle variation
          color2 = baseColor * vec3(0.98, 0.98, 0.98); // Very subtle variation
          color3 = baseColor * vec3(1.02, 1.02, 1.02); // Very subtle variation
        } else {
          // For dark themes, use the original color variations
          color1 = baseColor * vec3(1.2, 0.8, 0.9); // Warm tint
          color2 = baseColor * vec3(0.8, 0.9, 1.2); // Cool tint
          color3 = baseColor * vec3(0.9, 1.1, 0.8); // Green tint
        }
        
        // Smooth noise for organic texture
        float organicNoise = 0.0;
        vec2 noiseCoord = st * 6.0 + time * 0.1;
        organicNoise += 0.5 * noise(noiseCoord);
        noiseCoord *= 2.0;
        organicNoise += 0.25 * noise(noiseCoord);
        noiseCoord *= 2.0;
        organicNoise += 0.125 * noise(noiseCoord);
        
        // Fine grain for texture
        float grain = random(originalSt + fract(time * 0.5)) * 0.05;
        
        // Blend colors based on blobs and distortion
        vec3 finalColor = mix(color1, color2, blob1);
        finalColor = mix(finalColor, color3, blob2 * 0.5);
        
        // Reduce noise intensity for light themes
        float noiseIntensity = isLightTheme ? 0.04 : 0.08;
        finalColor += vec3(organicNoise * noiseIntensity - noiseIntensity * 0.5);
        
        // Reduce chromatic aberration for light themes
        float aberration = isLightTheme ? 0.001 : 0.002;
        finalColor.r += sin(dist1 * 10.0 + time) * aberration;
        finalColor.g += cos(dist2 * 8.0 + time * 1.1) * aberration;
        finalColor.b += sin((dist1 + dist2) * 6.0 + time * 0.9) * aberration;
        
        // Add fine grain
        finalColor += vec3(grain);
        
        // Subtle vignette for elegance
        float vignette = 1.0 - smoothstep(0.3, 1.0, distance(originalSt, vec2(0.5)));
        finalColor *= (0.7 + vignette * 0.3);
        
        // Clamp to prevent over/under exposure
        finalColor = clamp(finalColor, 0.0, 1.0);
        
        return vec4(finalColor, 1.0);
      }
    `)!;

    const uniforms = useDerivedValue(() => ({
      time: clock.value / 1000, // Convert to seconds
      resolution: [200, 200], // Adjust based on your item size
      color: [
        parseInt(colors[0].slice(1, 3), 16) / 255,
        parseInt(colors[0].slice(3, 5), 16) / 255,
        parseInt(colors[0].slice(5, 7), 16) / 255,
      ],
    }));

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
              {/* Skia Canvas with noise shader background */}
              <Canvas style={StyleSheet.absoluteFillObject}>
                <Fill>
                  <Shader source={noiseShader} uniforms={uniforms} />
                </Fill>
              </Canvas>
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

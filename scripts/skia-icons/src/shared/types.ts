import type { SkFont, Skia } from '@shopify/react-native-skia/lib/commonjs/skia/types';

export interface IconGenerationProps {
  width: number;
  height: number;
  Skia: Skia;
  font: SkFont;
}

export interface CommandLineArgs {
  theme?: string;
  [key: string]: string | undefined;
} 
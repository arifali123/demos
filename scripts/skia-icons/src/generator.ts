/* eslint-disable camelcase */
import fs from 'fs';
import path from 'path';

import { LoadSkiaWeb } from '@shopify/react-native-skia/lib/commonjs/web/LoadSkiaWeb';
import {
  makeOffscreenSurface,
  drawOffscreen,
  getSkiaExports,
} from '@shopify/react-native-skia/lib/commonjs/headless';
import React from 'react';

import type { CommandLineArgs } from './shared/types';
import { ICON_SIZE } from './shared/constants';

// Dynamically discover available themes
const getAvailableThemes = (): string[] => {
  const iconsDir = path.join(__dirname, 'icons');
  if (!fs.existsSync(iconsDir)) {
    return [];
  }
  
  return fs.readdirSync(iconsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
};

// Parse command line arguments
const args = process.argv.slice(2);
const parsedArgs: CommandLineArgs = {};

args.forEach(arg => {
  const [key, value] = arg.split('=');
  const cleanKey = key.replace('--', '');
  parsedArgs[cleanKey] = value;
});

const { theme } = parsedArgs;
const availableThemes = getAvailableThemes();

// Validate theme selection
if (theme && !availableThemes.includes(theme)) {
  console.error(`❌ Unknown theme: ${theme}`);
  console.error(`📋 Available themes: ${availableThemes.join(', ')}`);
  process.exit(1);
}

// Determine which themes to generate
const themesToGenerate = theme ? [theme] : availableThemes;

(async () => {
  try {
    console.log(`🎨 Skia Icons Generator v2.0`);
    console.log(`📋 Available themes: ${availableThemes.join(', ')}`);
    console.log(`🔧 Generating: ${themesToGenerate.join(', ')}`);
    
    await LoadSkiaWeb();
    const { Skia } = getSkiaExports();

    // Ensure assets directory exists
    const assetsDir = path.join(__dirname, '../assets');
    if (!fs.existsSync(assetsDir)) {
      fs.mkdirSync(assetsDir, { recursive: true });
    }

    // Generate icons for each theme
    for (const themeName of themesToGenerate) {
      try {
        console.log(`\n🎯 Generating ${themeName} icon...`);

        // Dynamically import the theme component
        const themePath = path.join(__dirname, 'icons', themeName);
        const IconComponent = require(themePath).iOSHomeGridIcon || 
                             require(themePath)[`${themeName}Icon`] ||
                             require(themePath).default;

        if (!IconComponent) {
          console.error(`❌ No icon component found in ${themeName}/index.tsx`);
          continue;
        }

        // Create surface
        const surface = makeOffscreenSurface(ICON_SIZE, ICON_SIZE);
        
        const iconImage = await drawOffscreen(
          surface,
          React.createElement(IconComponent)
        );

        // Save the image
        const base64Image = iconImage.encodeToBase64();
        const buffer = Buffer.from(base64Image, 'base64');
        const fileName = `${themeName}.png`;
        const filePath = path.join(assetsDir, fileName);
        
        fs.writeFileSync(filePath, buffer);
        console.log(`✅ Saved: assets/${fileName}`);

        // Clean up
        iconImage.dispose();
        surface.dispose();

      } catch (error) {
        console.error(`❌ Error generating ${themeName}:`, error);
      }
    }

    console.log(`\n🎉 Icon generation complete!`);
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
})(); 
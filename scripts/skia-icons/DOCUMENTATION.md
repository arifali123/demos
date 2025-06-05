# Skia Icons Generator v2.0 - Current System

## Overview

This is a simple icon generation system using Headless Skia rendering. Each theme generates a single 1024x1024 PNG icon with zero configuration required.

## Current Architecture

### Project Structure
```
scripts/skia-icons/
├── src/
│   ├── icons/
│   │   └── ios-home-grid/     # First theme
│   │       └── index.tsx      # Simple React component
│   ├── shared/
│   │   ├── constants.ts       # ICON_SIZE = 1024
│   │   └── types.ts           # CommandLineArgs interface
│   └── generator.ts           # Main generation script
├── assets/
│   ├── SF-Pro-Rounded-Bold.otf  # Font file (currently unused)
│   └── ios-home-grid.png      # Generated icon
├── build/                     # Compiled TypeScript output
├── package.json
└── tsconfig.json
```

### Current Components

#### Icons
Each icon is a simple React component that:
- Takes no parameters
- Uses ICON_SIZE (1024) from shared constants
- Renders directly with Skia components
- Is automatically discovered by the generator

#### Generator (`src/generator.ts`)
- Scans `src/icons/` for theme folders
- Dynamically imports icon components
- Creates 1024x1024 surfaces
- Saves PNG files to `assets/`

### Key Features

#### Simplicity
- **No Configuration**: Just create a folder with index.tsx
- **No Parameters**: Icons are pure components
- **Auto Discovery**: Generator finds themes automatically
- **Fixed Size**: All icons are 1024x1024 pixels

#### Technical Implementation
- **Headless Rendering**: Uses @shopify/react-native-skia headless mode
- **Dynamic Imports**: Components loaded at runtime
- **Error Handling**: Individual theme failures don't stop generation
- **Memory Management**: Properly disposes of surfaces and images

## Dependencies

- `@shopify/react-native-skia`: v2.0.0-next.4 - Skia rendering engine
- `react`: v19.0.0 - React for component structure
- `typescript`: v5.5.4 - TypeScript compilation
- `@types/node`: ^22.5.4 - Node.js type definitions

## Usage

1. **Install dependencies**: `yarn install`
2. **Build project**: `yarn build` or `npx tsc`
3. **Generate all icons**: `node build/generator.js`
4. **Generate specific theme**: `node build/generator.js --theme=ios-home-grid`

## Output

Generated icons are saved to `skia-icons/assets/`:
- `{theme-name}.png` - 1024x1024 PNG file

## Adding New Themes

1. Create folder: `src/icons/your-theme-name/`
2. Create file: `src/icons/your-theme-name/index.tsx`
3. Export component named after your theme: `YourThemeNameIcon`
4. Use `ICON_SIZE` from `../../shared/constants`
5. Run generator - theme will be auto-discovered

## Example Theme

```tsx
// src/icons/simple-circle/index.tsx
import { Group, Circle } from '@shopify/react-native-skia/lib/commonjs/headless';
import React from 'react';
import { ICON_SIZE } from '../../shared/constants';

export const SimpleCircleIcon: React.FC = () => {
  return (
    <Group>
      <Circle 
        cx={ICON_SIZE / 2} 
        cy={ICON_SIZE / 2} 
        r={ICON_SIZE / 3} 
        color="#3498db" 
      />
    </Group>
  );
};
```

This will generate `assets/simple-circle.png` when you run the generator.

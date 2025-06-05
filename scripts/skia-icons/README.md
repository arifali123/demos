# Skia Icons Generator v2.0

A simple and powerful icon generation system using Headless Skia.

## 🎨 Features

- **Multiple Themes**: Each theme is a simple folder with an index.tsx file
- **Headless Rendering**: Fast, server-side icon generation
- **TypeScript**: Full type safety and modern development experience
- **Fixed Size**: All icons are generated as 1024x1024 PNG files
- **Zero Configuration**: No config files, just pure icon components

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Generate all icons
yarn generate

# Generate specific theme
yarn generate:ios-home-grid
```

## 📁 Project Structure

```
src/
├── icons/
│   └── ios-home-grid/          # iOS-style rounded square icon
│       └── index.tsx           # Simple icon component
├── shared/
│   └── types.ts                # Shared TypeScript types
└── generator.ts                # Main generation script
```

## 🎯 Available Themes

### iOS Home Grid
Simple iOS-style rounded square icon with metallic gradient and depth effects.

## 🛠 Usage

### Generate All Icons
```bash
yarn generate
```

### Generate Specific Theme
```bash
yarn generate:ios-home-grid
# or
node build/generator.js --theme=ios-home-grid
```

## 📦 Output

Generated icons are saved in `skia-icons/assets/`:
- `ios-home-grid.png` (1024x1024)

## 🔧 Development

```bash
# Watch mode for development
yarn dev

# Clean build artifacts
yarn clean

# Build project
yarn build
```

## 🚀 Adding New Themes

1. Create a new folder in `src/icons/your-theme-name/`
2. Create an `index.tsx` file with your icon component
3. Export a component that accepts `IconGenerationProps`
4. Run `yarn generate` and your icon will be automatically discovered

Example:
```tsx
// src/icons/my-theme/index.tsx
import { Group, Circle } from '@shopify/react-native-skia/lib/commonjs/headless';
import React from 'react';
import type { IconGenerationProps } from '../../shared/types';

export const MyThemeIcon: React.FC<IconGenerationProps> = ({ Skia }) => {
  return (
    <Group>
      <Circle cx={512} cy={512} r={400} color="#FF6B6B" />
    </Group>
  );
};
```

## 📄 License

MIT 
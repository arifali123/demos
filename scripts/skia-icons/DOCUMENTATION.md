# Skia Icons Generator

## Overview

This project generates app icons using Headless Skia rendering. It creates various icon formats (standard icon, splash screen, adaptive icon) with procedural spiral patterns and text overlays.

## Current Architecture

### Project Structure
```
scripts/skia-icons/
├── src/
│   ├── app-icon/
│   │   ├── index.tsx      # Main AppIcon component
│   │   ├── spiral.tsx     # Logarithmic spiral generation
│   │   └── grid.tsx       # Grid overlay component
│   └── scripts/
│       └── icons-set.tsx  # Icon generation script
├── assets/
│   └── SF-Pro-Rounded-Bold.otf  # Font file
├── build/                 # Compiled TypeScript output
├── package.json
└── tsconfig.json
```

### Current Components

#### AppIcon (`src/app-icon/index.tsx`)
Main component that combines all visual elements:
- **Props**: `width`, `height`, `Skia`, `grid`, `background`, `fadedSpiral`, `randomFactor`, `font`, `text`, `fontSize`, `scaleSpiral`
- **Features**:
  - Blue gradient background (#0290FE to #0048EC)
  - Optional grid overlay
  - Logarithmic spiral pattern
  - Text with blur effects and stroke

#### Spiral (`src/app-icon/spiral.tsx`)
Generates procedural logarithmic spiral patterns:
- **Algorithm**: Uses logarithmic spiral formula with exponential growth
- **Customization**: Supports scaling, fading, and randomization
- **Rendering**: Creates circles along the spiral path with varying radii

#### Grid (`src/app-icon/grid.tsx`)
Creates a dashed grid overlay:
- **Pattern**: 4x4 grid with dashed lines
- **Styling**: White color with 30% opacity
- **Effects**: Uses DashPathEffect for dashed appearance

### Icon Generation (`src/scripts/icons-set.tsx`)

#### Generated Icons
1. **icon** (1024x1024) - Standard app icon with faded spiral
2. **splash** (1284x2778) - Splash screen without grid/background, scaled spiral
3. **adaptive-icon** (1024x1024) - Adaptive icon without background

#### Command Line Interface
```bash
yarn generate-icons --value="Custom Text"
```
- Accepts `--value` parameter for custom text (defaults to ":)")
- Uses SF Pro Rounded Bold font at 500px size
- Applies random factor for spiral variation

### Key Features

#### Visual Elements
- **Gradient Background**: Linear gradient from light to dark blue
- **Spiral Pattern**: Procedurally generated logarithmic spiral with 3000 points
- **Text Rendering**: Custom text with stroke, blur, and shadow effects
- **Grid Overlay**: Optional dashed grid for visual structure

#### Technical Implementation
- **Headless Rendering**: Uses @shopify/react-native-skia headless mode
- **Surface Management**: Creates offscreen surfaces for each icon
- **File Output**: Exports PNG files to assets directory
- **Memory Management**: Properly disposes of surfaces and images

## Dependencies

- `@shopify/react-native-skia`: v2.0.0-next.4 - Skia rendering engine
- `react`: v19.0.0 - React for component structure
- `typescript`: v5.5.4 - TypeScript compilation
- `@types/node`: ^22.5.4 - Node.js type definitions

## Usage

1. **Install dependencies**: `yarn install`
2. **Build project**: `yarn build`
3. **Generate icons**: `yarn generate-icons --value="Your Text"`

## Output

Generated icons are saved to `../../assets/` directory:
- `icon.png` - 1024x1024 standard icon
- `splash.png` - 1284x2778 splash screen
- `adaptive-icon.png` - 1024x1024 adaptive icon

## Mathematical Foundation

The spiral generation uses the logarithmic spiral equation:
```
r = a * e^(k*θ)
x = r * cos(θ)
y = r * sin(θ)
```

Where:
- `a` = index/4 (scaling factor)
- `k` = 0.005 (growth rate)
- `θ` = angle * index (rotation)

This creates organic, naturally-flowing spiral patterns with mathematical precision.

---

## Future Refactor Vision

The project will be restructured to support multiple icon themes, with each theme in its own folder:

### New Architecture
```
scripts/skia-icons/
├── src/
│   ├── icons/
│   │   ├── ios-home-grid/    # iOS-inspired rounded squares
│   │   ├── material-design/  # Material Design icons
│   │   ├── minimalist/       # Clean, simple designs
│   │   └── ...               # Additional themes
│   ├── shared/
│   │   ├── utils/           # Common utilities
│   │   └── types.ts         # Shared TypeScript types
│   └── generator.ts         # Main generation script
```

Each icon theme will contain its own complete implementation with customizable parameters and unique visual styles.

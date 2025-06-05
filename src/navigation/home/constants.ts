/**
 * Collection of gradient color combinations for home screen app icons
 * These colors provide good contrast and visual appeal on dark backgrounds
 */
export const HOME_GRID_COLORS = [
  // Vibrant Blues
  { colors: ['#4A90E2', '#357ABD', '#2E5C8A'] },
  { colors: ['#5FAEF0', '#4A96D4', '#3B7FB8'] },
  { colors: ['#6BB6FF', '#5A9EE6', '#4A86CC'] },

  // Dynamic Purples
  { colors: ['#A569BD', '#8E44AD', '#7D3C98'] },
  { colors: ['#BB8FCE', '#A569BD', '#8E44AD'] },
  { colors: ['#D7BDE2', '#BB8FCE', '#A569BD'] },

  // Fresh Greens
  { colors: ['#58D68D', '#2ECC71', '#27AE60'] },
  { colors: ['#7DCEA0', '#58D68D', '#2ECC71'] },
  { colors: ['#A3E4D7', '#7DCEA0', '#58D68D'] },

  // Warm Oranges
  { colors: ['#F39C12', '#E67E22', '#D35400'] },
  { colors: ['#F8C471', '#F39C12', '#E67E22'] },
  { colors: ['#FDEAA7', '#F8C471', '#F39C12'] },

  // Elegant Reds
  { colors: ['#E74C3C', '#C0392B', '#A93226'] },
  { colors: ['#EC7063', '#E74C3C', '#C0392B'] },
  { colors: ['#F1948A', '#EC7063', '#E74C3C'] },

  // Cool Teals
  { colors: ['#48C9B0', '#17A2B8', '#138496'] },
  { colors: ['#76D7C4', '#48C9B0', '#17A2B8'] },
  { colors: ['#A3E4D7', '#76D7C4', '#48C9B0'] },

  // Sunset Yellows
  { colors: ['#F7DC6F', '#F4D03F', '#F1C40F'] },
  { colors: ['#FCF3CF', '#F7DC6F', '#F4D03F'] },
  { colors: ['#FDEAA7', '#FCF3CF', '#F7DC6F'] },

  // Deep Pinks
  { colors: ['#FF6B9D', '#E91E63', '#C2185B'] },
  { colors: ['#FF8A80', '#FF6B9D', '#E91E63'] },
  { colors: ['#FFB3BA', '#FF8A80', '#FF6B9D'] },

  // Ocean Blues
  { colors: ['#3498DB', '#2980B9', '#1F618D'] },
  { colors: ['#5DADE2', '#3498DB', '#2980B9'] },
  { colors: ['#85C1E9', '#5DADE2', '#3498DB'] },

  // Forest Greens
  { colors: ['#229954', '#1E8449', '#196F3D'] },
  { colors: ['#52C41A', '#229954', '#1E8449'] },
  { colors: ['#7CB342', '#52C41A', '#229954'] },

  // Metallic Gradients
  { colors: ['#BDC3C7', '#95A5A6', '#7F8C8D'] },
  { colors: ['#D5DBDB', '#BDC3C7', '#95A5A6'] },
  { colors: ['#EAEDED', '#D5DBDB', '#BDC3C7'] },

  // Cosmic Purples
  { colors: ['#9B59B6', '#8E44AD', '#7D3C98'] },
  { colors: ['#AF7AC5', '#9B59B6', '#8E44AD'] },
  { colors: ['#C39BD3', '#AF7AC5', '#9B59B6'] },

  // Vibrant Magentas
  { colors: ['#E91E63', '#C2185B', '#AD1457'] },
  { colors: ['#F06292', '#E91E63', '#C2185B'] },
  { colors: ['#F8BBD9', '#F06292', '#E91E63'] },

  // Electric Blues
  { colors: ['#00BCD4', '#0097A7', '#00838F'] },
  { colors: ['#26C6DA', '#00BCD4', '#0097A7'] },
  { colors: ['#4DD0E1', '#26C6DA', '#00BCD4'] },

  // Warm Corals
  { colors: ['#FF7043', '#FF5722', '#E64A19'] },
  { colors: ['#FF8A65', '#FF7043', '#FF5722'] },
  { colors: ['#FFAB91', '#FF8A65', '#FF7043'] },
] as const;

/**
 * Get a color palette for a given index, cycling through available colors
 */
export const getColorForIndex = (index: number) => {
  return HOME_GRID_COLORS[index % HOME_GRID_COLORS.length];
};

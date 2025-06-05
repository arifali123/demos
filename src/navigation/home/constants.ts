/**
 * Collection of gradient color combinations for home screen app icons
 * These colors provide good contrast and visual appeal on dark backgrounds
 */
export const HOME_GRID_COLORS = [
  // Dark Greys for dark backgrounds
  { colors: ['#2C2C2C', '#1F1F1F', '#0F0F0F'] },
  { colors: ['#3A3A3A', '#2D2D2D', '#1A1A1A'] },
  { colors: ['#404040', '#333333', '#202020'] },
  { colors: ['#4A4A4A', '#3D3D3D', '#252525'] },
  { colors: ['#555555', '#484848', '#2B2B2B'] },

  // Medium Dark Greys
  { colors: ['#606060', '#535353', '#303030'] },
  { colors: ['#6A6A6A', '#5D5D5D', '#353535'] },
  { colors: ['#757575', '#686868', '#3A3A3A'] },
  { colors: ['#808080', '#737373', '#404040'] },
  { colors: ['#8A8A8A', '#7D7D7D', '#454545'] },

  // Darker Charcoal Tones
  { colors: ['#1A1A1A', '#0D0D0D', '#000000'] },
  { colors: ['#262626', '#191919', '#050505'] },
  { colors: ['#333333', '#262626', '#0A0A0A'] },
  { colors: ['#424242', '#353535', '#151515'] },
  { colors: ['#525252', '#454545', '#1F1F1F'] },
] as const;

/**
 * Light greys and whites for light theme backgrounds
 * These colors complement light backgrounds while maintaining visual appeal
 */
export const LIGHT_THEME_COLORS = [
  // Pure Whites
  { colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF'] },
  { colors: ['#FEFEFE', '#FEFEFE', '#FEFEFE'] },
  { colors: ['#FDFDFD', '#FDFDFD', '#FDFDFD'] },
  { colors: ['#FCFCFC', '#FCFCFC', '#FCFCFC'] },
  { colors: ['#FBFBFB', '#FBFBFB', '#FBFBFB'] },

  // Metallic Whites
  { colors: ['#F9F9F9', '#F7F7F7', '#F5F5F5'] },
  { colors: ['#F8F8F8', '#F6F6F6', '#F4F4F4'] },
  { colors: ['#F7F7F7', '#F5F5F5', '#F3F3F3'] },
  { colors: ['#F6F6F6', '#F4F4F4', '#F2F2F2'] },
  { colors: ['#F5F5F5', '#F3F3F3', '#F1F1F1'] },

  // Soft Metallic Greys
  { colors: ['#F4F4F4', '#F2F2F2', '#F0F0F0'] },
  { colors: ['#F3F3F3', '#F1F1F1', '#EFEFEF'] },
  { colors: ['#F2F2F2', '#F0F0F0', '#EEEEEE'] },
  { colors: ['#F1F1F1', '#EFEFEF', '#EDEDED'] },
  { colors: ['#F0F0F0', '#EEEEEE', '#ECECEC'] },
] as const;

/**
 * Mixed theme colors - balanced greys
 */
export const MIXED_THEME_COLORS = [
  // Balanced Medium Greys
  { colors: ['#909090', '#808080', '#707070'] },
  { colors: ['#959595', '#858585', '#757575'] },
  { colors: ['#9A9A9A', '#8A8A8A', '#7A7A7A'] },
  { colors: ['#9F9F9F', '#8F8F8F', '#7F7F7F'] },
  { colors: ['#A4A4A4', '#949494', '#848484'] },
  { colors: ['#A9A9A9', '#999999', '#898989'] },
] as const;

/**
 * Get a color palette for a given item based on its theme and index
 */
export const getColorForItem = (
  item: { theme?: string; name?: string },
  index: number,
) => {
  const theme = item.theme || 'dark'; // Default to dark if no theme specified

  // Debug logging
  console.log(
    `Getting color for item: ${
      item.name || 'Unknown'
    }, theme: ${theme}, index: ${index}`,
  );

  let colorArray;
  switch (theme) {
    case 'light':
      colorArray = LIGHT_THEME_COLORS;
      break;
    case 'mixed':
      colorArray = MIXED_THEME_COLORS;
      break;
    case 'dark':
    default:
      colorArray = HOME_GRID_COLORS;
      break;
  }

  const selectedColor = colorArray[index % colorArray.length];
  console.log(`Selected color palette:`, selectedColor);

  return selectedColor;
};

/**
 * Get a color palette for a given index, cycling through available colors
 * @deprecated Use getColorForItem instead
 */
export const getColorForIndex = (index: number) => {
  return HOME_GRID_COLORS[index % HOME_GRID_COLORS.length];
};

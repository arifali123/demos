"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaletteById = exports.getRandomPalette = exports.METALLIC_PALETTES = void 0;
/**
 * Collection of metallic gradient color combinations for iOS-style app icons
 * Each color array represents [highlight, shadow, mid-tone] colors
 */
exports.METALLIC_PALETTES = [
    // Brushed Steel
    { colors: ['#E8E9ED', '#B8B9BD', '#D1D2D6'], id: 0 },
    // Dark Silver
    { colors: ['#C8CBD0', '#9A9DA2', '#B4B7BC'], id: 1 },
    // Charcoal Platinum
    { colors: ['#DEDEDE', '#A8A8A8', '#C6C6C6'], id: 2 },
    // Brushed Chrome
    { colors: ['#E8E8E8', '#B8B8B8', '#D0D0D0'], id: 3 },
    // Gunmetal
    { colors: ['#595C63', '#2A2D33', '#424548'], id: 4 },
    // Dark Satin
    { colors: ['#CCCCCC', '#969696', '#B1B1B1'], id: 5 },
    // Metallic Gray
    { colors: ['#B4B7BC', '#7F8287', '#9A9DA2'], id: 6 },
    // Smoky Pearl
    { colors: ['#e2e2e2', '#BABABA', '#D5D5D5'], id: 7 },
    // Titanium Gray
    { colors: ['#DEE3ED', '#A5AAB3', '#C2C7D0'], id: 8 },
    // Nickel
    { colors: ['#9B9B9E', '#636366', '#818184'], id: 9 },
    // Mercury
    { colors: ['#808080', '#B8BBC0', '#D6D9DD'], id: 10 },
    // Pewter
    { colors: ['#B3B5B1', '#7D7F7B', '#989A96'], id: 11 },
    // Aluminum
    { colors: ['#D0D3D8', '#9CA0A5', '#B6B9BE'], id: 12 },
    // Dark Stainless
    { colors: ['#DADADA', '#A4A4A4', '#BFBFBF'], id: 13 },
    // Matte Silver
    { colors: ['#D6D6D6', '#A0A0A0', '#BCBCBC'], id: 14 },
    // Palladium
    { colors: ['#CDD0D4', '#959AA0', '#B3B6BA'], id: 15 },
    // Rhodium
    { colors: ['#C4C4C4', '#8F8F8F', '#ABABAB'], id: 16 },
    // Iridium
    { colors: ['#cdcdcd', '#B5B7BA', '#CED0D3'], id: 17 },
    // Osmium
    { colors: ['#A6A9AD', '#6D7074', '#8C8F93'], id: 18 },
    // Ruthenium
    { colors: ['#97999C', '#5F6164', '#7D7F82'], id: 19 },
    // Brushed Nickel
    { colors: ['#C7CBD2', '#939AA4', '#ADB1C7'], id: 20 },
    // Polished Steel
    { colors: ['#d2d2d2', '#B4B6B8', '#DCDDDF'], id: 21 },
    // Antique Gold
    { colors: ['#E6E6E8', '#B0B0B3', '#CBCBCE'], id: 22 },
    // Platinum Matte
    { colors: ['#E2E5E8', '#A1A4A7', '#C9CCD0'], id: 23 },
];
/**
 * Get a random color palette from the metallic collection
 */
const getRandomPalette = () => {
    const randomIndex = Math.floor(Math.random() * exports.METALLIC_PALETTES.length);
    return exports.METALLIC_PALETTES[randomIndex];
};
exports.getRandomPalette = getRandomPalette;
/**
 * Get a specific palette by ID
 */
const getPaletteById = (id) => {
    return exports.METALLIC_PALETTES[id % exports.METALLIC_PALETTES.length];
};
exports.getPaletteById = getPaletteById;

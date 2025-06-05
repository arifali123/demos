"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const LoadSkiaWeb_1 = require("@shopify/react-native-skia/lib/commonjs/web/LoadSkiaWeb");
const headless_1 = require("@shopify/react-native-skia/lib/commonjs/headless");
const react_1 = __importDefault(require("react"));
const constants_1 = require("./shared/constants");
// Dynamically discover available themes
const getAvailableThemes = () => {
    const iconsDir = path_1.default.join(__dirname, 'icons');
    if (!fs_1.default.existsSync(iconsDir)) {
        return [];
    }
    return fs_1.default.readdirSync(iconsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
};
// Parse command line arguments
const args = process.argv.slice(2);
const parsedArgs = {};
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
        await (0, LoadSkiaWeb_1.LoadSkiaWeb)();
        const { Skia } = (0, headless_1.getSkiaExports)();
        // Ensure assets directory exists
        const assetsDir = path_1.default.join(__dirname, '../assets');
        if (!fs_1.default.existsSync(assetsDir)) {
            fs_1.default.mkdirSync(assetsDir, { recursive: true });
        }
        // Generate icons for each theme
        for (const themeName of themesToGenerate) {
            try {
                console.log(`\n🎯 Generating ${themeName} icon...`);
                // Dynamically import the theme component
                const themePath = path_1.default.join(__dirname, 'icons', themeName);
                const moduleExports = require(themePath);
                // Try multiple naming patterns for icon components
                const IconComponent = moduleExports.iOSHomeGridIcon ||
                    moduleExports.ThreeDScrollTransitionIcon ||
                    moduleExports[`${themeName}Icon`] ||
                    moduleExports[`${themeName.replace(/-/g, '')}Icon`] ||
                    moduleExports.default ||
                    Object.values(moduleExports).find((exp) => typeof exp === 'function' && exp.name && exp.name.includes('Icon'));
                if (!IconComponent) {
                    console.error(`❌ No icon component found in ${themeName}/index.tsx`);
                    console.error(`Available exports:`, Object.keys(moduleExports));
                    continue;
                }
                // Create surface
                const surface = (0, headless_1.makeOffscreenSurface)(constants_1.ICON_SIZE, constants_1.ICON_SIZE);
                const iconImage = await (0, headless_1.drawOffscreen)(surface, react_1.default.createElement(IconComponent));
                // Save the image
                const base64Image = iconImage.encodeToBase64();
                const buffer = Buffer.from(base64Image, 'base64');
                const fileName = `${themeName}.png`;
                const filePath = path_1.default.join(assetsDir, fileName);
                fs_1.default.writeFileSync(filePath, buffer);
                console.log(`✅ Saved: assets/${fileName}`);
                // Clean up
                iconImage.dispose();
                surface.dispose();
            }
            catch (error) {
                console.error(`❌ Error generating ${themeName}:`, error);
            }
        }
        console.log(`\n🎉 Icon generation complete!`);
    }
    catch (error) {
        console.error('❌ Fatal error:', error);
        process.exit(1);
    }
})();

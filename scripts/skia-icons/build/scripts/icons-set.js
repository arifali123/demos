"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
const fs_1 = __importDefault(require("fs"));
const LoadSkiaWeb_1 = require("@shopify/react-native-skia/lib/commonjs/web/LoadSkiaWeb");
const headless_1 = require("@shopify/react-native-skia/lib/commonjs/headless");
const react_1 = __importDefault(require("react"));
const app_icon_1 = require("../app-icon");
const Icons = [
    {
        name: 'icon',
        width: 1024,
        height: 1024,
        fadedSpiral: true,
    },
    {
        name: 'splash',
        width: 1284,
        height: 2778,
        grid: false,
        background: false,
        fadedSpiral: true,
        scaleSpiral: 3,
    },
    {
        name: 'adaptive-icon',
        width: 1024,
        height: 1024,
        background: false,
        fadedSpiral: true,
    },
];
// Get command line arguments starting from index 2 (first two elements are node and script path)
const args = process.argv.slice(2);
// Parse the arguments
const parsedArgs = {};
args.forEach(arg => {
    const [key, value] = arg.split('=');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    parsedArgs[key.replace('--', '')] = value;
});
const { value: text } = parsedArgs;
// Add default value if text is undefined
const displayText = text || ':)';
(async () => {
    await (0, LoadSkiaWeb_1.LoadSkiaWeb)();
    // Once that CanvasKit is loaded, you can access Skia via getSkiaExports()
    const { Skia } = (0, headless_1.getSkiaExports)();
    const randomFactor = Math.random();
    const data = Skia.Data.fromBytes(fs_1.default.readFileSync(require.resolve('../../assets/SF-Pro-Rounded-Bold.otf')));
    const tf = Skia.Typeface.MakeFreeTypeFaceFromData(data);
    const fontSize = 500;
    const font = Skia.Font(tf, fontSize);
    for (const icon of Icons) {
        const surface = (0, headless_1.makeOffscreenSurface)(icon.width, icon.height);
        const icon_image = await (0, headless_1.drawOffscreen)(surface, react_1.default.createElement(app_icon_1.AppIcon, { text: displayText, fontSize: fontSize, font: font, Skia: Skia, ...icon, randomFactor: randomFactor }));
        const base64Image = icon_image.encodeToBase64();
        const buffer = Buffer.from(base64Image, 'base64');
        fs_1.default.writeFileSync(`../../assets/${icon.name}.png`, buffer);
        icon_image.dispose();
        surface.dispose();
    }
})();

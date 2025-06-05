"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppIcon = void 0;
const headless_1 = require("@shopify/react-native-skia/lib/commonjs/headless");
const react_1 = __importStar(require("react"));
const spiral_1 = require("./spiral");
const grid_1 = require("./grid");
const AppIcon = ({ width, height, Skia, grid = true, background = true, fadedSpiral = false, randomFactor = Math.random(), font, text, fontSize, scaleSpiral = 1, }) => {
    const size = Math.max(width, height);
    const textY = (0, react_1.useMemo)(() => {
        const textHeight = fontSize;
        return height / 2 + textHeight / 3.2;
    }, [fontSize, height]);
    const textX = (0, react_1.useMemo)(() => {
        // font.measureText is not supported in Headless mode
        const textWidth = font.getTextWidth(text);
        return width / 2 - textWidth / 2;
    }, [font, width, text]);
    return (react_1.default.createElement(headless_1.Group, null,
        background && (react_1.default.createElement(headless_1.Fill, null,
            react_1.default.createElement(headless_1.LinearGradient, { start: { x: 0, y: 0 }, end: { x: 0, y: size }, colors: ['#0290FE', '#0048EC'] }))),
        grid && react_1.default.createElement(grid_1.Grid, { size: size, Skia: Skia }),
        react_1.default.createElement(spiral_1.Spiral, { Skia: Skia, width: width, height: height, faded: fadedSpiral, randomFactor: randomFactor, scale: scaleSpiral }),
        react_1.default.createElement(headless_1.Text, { x: textX, y: textY, color: "rgba(255,255,255,0.5)", text: text, font: font }),
        react_1.default.createElement(headless_1.Text, { x: textX, y: textY, color: 'white', style: 'stroke', strokeWidth: 8, text: text, font: font },
            react_1.default.createElement(headless_1.BlurMask, { blur: 5, style: "solid" }))));
};
exports.AppIcon = AppIcon;

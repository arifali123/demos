"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iOSHomeGridIcon = void 0;
const headless_1 = require("@shopify/react-native-skia/lib/commonjs/headless");
const react_1 = __importDefault(require("react"));
const iOSHomeGridIcon = ({ width, height, Skia, }) => {
    const size = 1024; // Fixed size
    const cornerRadius = 180; // iOS-style corner radius for 1024px icon
    return (react_1.default.createElement(headless_1.Group, null,
        react_1.default.createElement(headless_1.RoundedRect, { x: 0, y: 0, width: size, height: size, r: cornerRadius },
            react_1.default.createElement(headless_1.LinearGradient, { start: { x: 0, y: 0 }, end: { x: 0, y: size }, colors: ['#E8E9ED', '#B8B9BD'] })),
        react_1.default.createElement(headless_1.RoundedRect, { x: 0, y: 0, width: size, height: size * 0.5, r: cornerRadius },
            react_1.default.createElement(headless_1.LinearGradient, { start: { x: 0, y: 0 }, end: { x: 0, y: size * 0.5 }, colors: [
                    '#E8E9ED40', // 25% opacity highlight
                    '#E8E9ED10', // 6% opacity
                ] })),
        react_1.default.createElement(headless_1.RoundedRect, { x: 2, y: 2, width: size - 4, height: size - 4, r: cornerRadius - 2, style: "stroke", strokeWidth: 1, color: "#E8E9ED30" }),
        react_1.default.createElement(headless_1.RoundedRect, { x: 0, y: 0, width: size, height: size, r: cornerRadius, style: "stroke", strokeWidth: 1, color: "#B8B9BD60" })));
};
exports.iOSHomeGridIcon = iOSHomeGridIcon;

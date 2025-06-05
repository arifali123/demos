"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iOSHomeGridIcon = void 0;
const headless_1 = require("@shopify/react-native-skia/lib/commonjs/headless");
const react_1 = __importDefault(require("react"));
const constants_1 = require("../../shared/constants");
const iOSHomeGridIcon = () => {
    return (react_1.default.createElement(headless_1.Group, null,
        react_1.default.createElement(headless_1.Rect, { x: 0, y: 0, width: constants_1.ICON_SIZE, height: constants_1.ICON_SIZE },
            react_1.default.createElement(headless_1.LinearGradient, { start: { x: 0, y: 0 }, end: { x: 0, y: constants_1.ICON_SIZE }, colors: ['#E8E9ED', '#B8B9BD'] })),
        react_1.default.createElement(headless_1.Rect, { x: 0, y: 0, width: constants_1.ICON_SIZE, height: constants_1.ICON_SIZE * 0.5 },
            react_1.default.createElement(headless_1.LinearGradient, { start: { x: 0, y: 0 }, end: { x: 0, y: constants_1.ICON_SIZE * 0.5 }, colors: [
                    '#E8E9ED40', // 25% opacity highlight
                    '#E8E9ED10', // 6% opacity
                ] })),
        react_1.default.createElement(headless_1.Rect, { x: 2, y: 2, width: constants_1.ICON_SIZE - 4, height: constants_1.ICON_SIZE - 4, style: "stroke", strokeWidth: 1, color: "#E8E9ED30" }),
        react_1.default.createElement(headless_1.Rect, { x: 0, y: 0, width: constants_1.ICON_SIZE, height: constants_1.ICON_SIZE, style: "stroke", strokeWidth: 1, color: "#B8B9BD60" })));
};
exports.iOSHomeGridIcon = iOSHomeGridIcon;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreeDScrollTransitionIcon = void 0;
const headless_1 = require("@shopify/react-native-skia/lib/commonjs/headless");
const react_1 = __importDefault(require("react"));
const constants_1 = require("../../shared/constants");
const ThreeDScrollTransitionIcon = () => {
    const center = constants_1.ICON_SIZE / 2;
    const layerHeight = constants_1.ICON_SIZE / 8;
    const layerWidth = constants_1.ICON_SIZE * 0.7;
    const layerStartX = (constants_1.ICON_SIZE - layerWidth) / 2;
    return (react_1.default.createElement(headless_1.Group, null,
        react_1.default.createElement(headless_1.Rect, { x: 0, y: 0, width: constants_1.ICON_SIZE, height: constants_1.ICON_SIZE, color: "#000000" }),
        Array.from({ length: 7 }, (_, i) => {
            const layerIndex = i;
            const yPosition = center - (layerHeight * 3.5) + (layerHeight * layerIndex);
            // Calculate 3D perspective scaling and opacity based on distance from center
            const distanceFromCenter = Math.abs(layerIndex - 3);
            const scale = 1 - (distanceFromCenter * 0.15);
            const opacity = 1 - (distanceFromCenter * 0.25);
            const skew = distanceFromCenter * 0.1;
            const actualWidth = layerWidth * scale;
            const actualHeight = layerHeight * scale;
            const actualX = center - (actualWidth / 2);
            return (react_1.default.createElement(headless_1.Group, { key: layerIndex, transform: [
                    { translateX: actualX },
                    { translateY: yPosition },
                    { skewX: layerIndex < 3 ? -skew : layerIndex > 3 ? skew : 0 },
                ] },
                react_1.default.createElement(headless_1.Group, { layer: distanceFromCenter > 0 ? (react_1.default.createElement(headless_1.Paint, null,
                        react_1.default.createElement(headless_1.Blur, { blur: distanceFromCenter * 2 }))) : undefined },
                    react_1.default.createElement(headless_1.Rect, { x: 0, y: 0, width: actualWidth, height: actualHeight, opacity: opacity },
                        react_1.default.createElement(headless_1.SweepGradient, { c: { x: actualWidth / 2, y: actualHeight / 2 }, colors: [
                                '#00FFFF', // cyan
                                '#FF00FF', // magenta  
                                '#FFFF00', // yellow
                                '#00FFFF', // cyan
                            ] })),
                    layerIndex === 3 && (react_1.default.createElement(headless_1.Rect, { x: 0, y: 0, width: actualWidth, height: actualHeight / 3, opacity: 0.3 },
                        react_1.default.createElement(headless_1.LinearGradient, { start: { x: 0, y: 0 }, end: { x: 0, y: actualHeight / 3 }, colors: ['#FFFFFF80', '#FFFFFF00'] }))))));
        }),
        react_1.default.createElement(headless_1.Group, { transform: [{ translateX: constants_1.ICON_SIZE * 0.9 }, { translateY: constants_1.ICON_SIZE * 0.2 }] },
            react_1.default.createElement(headless_1.Rect, { x: 0, y: 0, width: 8, height: constants_1.ICON_SIZE * 0.6, color: "#333333" }),
            react_1.default.createElement(headless_1.Rect, { x: 2, y: constants_1.ICON_SIZE * 0.2, width: 4, height: constants_1.ICON_SIZE * 0.2, color: "#00FFFF" })),
        Array.from({ length: 3 }, (_, i) => (react_1.default.createElement(headless_1.Group, { key: i, transform: [{ translateX: constants_1.ICON_SIZE * 0.05 }] },
            react_1.default.createElement(headless_1.Rect, { x: i * 15, y: center - 50 + (i * 30), width: 30, height: 2, opacity: 0.4, color: "#00FFFF" }),
            react_1.default.createElement(headless_1.Rect, { x: i * 15, y: center + 50 + (i * 30), width: 25, height: 2, opacity: 0.3, color: "#FF00FF" }))))));
};
exports.ThreeDScrollTransitionIcon = ThreeDScrollTransitionIcon;

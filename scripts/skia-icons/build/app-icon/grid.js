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
exports.Grid = void 0;
const headless_1 = require("@shopify/react-native-skia/lib/commonjs/headless");
const react_1 = __importStar(require("react"));
const Grid = ({ size, Skia }) => {
    const grid = (0, react_1.useMemo)(() => {
        const skPath = Skia.Path.Make();
        // add a grid of lines
        const numberOfLines = 4;
        const lineWidth = size / numberOfLines;
        for (let i = 0; i < numberOfLines; i++) {
            skPath.lineTo(0, i * lineWidth);
            skPath.lineTo(size, i * lineWidth);
            skPath.moveTo(0, i * lineWidth);
        }
        for (let i = 0; i < numberOfLines; i++) {
            skPath.lineTo(i * lineWidth, 0);
            skPath.lineTo(i * lineWidth, size);
            skPath.moveTo(i * lineWidth, 0);
        }
        return skPath;
    }, [size, Skia]);
    return (react_1.default.createElement(headless_1.Path, { path: grid, style: "stroke", strokeWidth: 1, color: "white", opacity: 0.3 },
        react_1.default.createElement(headless_1.DashPathEffect, { intervals: [4, 4] })));
};
exports.Grid = Grid;

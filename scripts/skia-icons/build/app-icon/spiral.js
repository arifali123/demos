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
exports.Spiral = void 0;
const headless_1 = require("@shopify/react-native-skia/lib/commonjs/headless");
const react_1 = __importStar(require("react"));
const interpolate = (value, inputRange, outputRange) => {
    'worklet';
    if (inputRange.length !== outputRange.length) {
        throw new Error('inputRange and outputRange must have the same length');
    }
    if (value <= inputRange[0]) {
        return outputRange[0];
    }
    if (value >= inputRange[inputRange.length - 1]) {
        const lastIndex = inputRange.length - 1;
        return outputRange[lastIndex];
    }
    for (let i = 1; i < inputRange.length; i++) {
        if (value < inputRange[i]) {
            const t = (value - inputRange[i - 1]) / (inputRange[i] - inputRange[i - 1]);
            return outputRange[i - 1] + t * (outputRange[i] - outputRange[i - 1]);
        }
    }
    // This should never happen
    return outputRange[outputRange.length - 1];
};
// The logarithmic spiral will depend on the index
const logarithmicSpiral = ({ angle, index, }) => {
    'worklet';
    const a = index / 4;
    const k = 0.005;
    return {
        x: a * Math.exp(k * angle) * Math.cos(angle * index),
        y: a * Math.exp(k * angle) * Math.sin(angle * index),
    };
};
const Spiral = ({ Skia, width, height, faded = true, randomFactor = Math.random(), scale = 1, }) => {
    const MAX_DISTANCE_FROM_CENTER = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
    const angle = (Math.PI * randomFactor) / 2;
    const path = (0, react_1.useMemo)(() => {
        const circles = Skia.Path.Make();
        for (let index = 0; index < 3000; index++) {
            const { x, y } = logarithmicSpiral({
                angle,
                index,
            });
            const distanceFromCenter = Math.sqrt(x ** 2 + y ** 2);
            const radius = interpolate(distanceFromCenter, [0, MAX_DISTANCE_FROM_CENTER], [0, 7]);
            circles.addCircle(x, y, radius);
        }
        return circles;
    }, [MAX_DISTANCE_FROM_CENTER, Skia.Path, angle]);
    return (react_1.default.createElement(headless_1.Group, { transform: [
            {
                translateX: width / 2,
            },
            {
                translateY: height / 2,
            },
            {
                scale: scale,
            },
        ] },
        react_1.default.createElement(headless_1.Path, { path: path, color: 'white' }, faded && (react_1.default.createElement(headless_1.RadialGradient, { c: { x: 0, y: 0 }, r: width * 0.5, colors: [
                'rgba(255,255,255,0)',
                'rgba(255,255,255,0.8)',
                'rgba(255,255,255,1)',
            ] })))));
};
exports.Spiral = Spiral;

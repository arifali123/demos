"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFont = exports.loadData = void 0;
const commonjs_1 = require("@shopify/react-native-skia/lib/commonjs");
const factoryWrapper = (data2, factory, onError) => {
    const factoryResult = factory(data2);
    if (factoryResult === null) {
        onError && onError(new Error('Could not load data'));
        return null;
    }
    else {
        return factoryResult;
    }
};
const loadData = (source, factory, onError) => {
    if (source === null || source === undefined) {
        return new Promise(resolve => resolve(null));
    }
    else if (source instanceof Uint8Array) {
        return new Promise(resolve => resolve(factoryWrapper(commonjs_1.Skia.Data.fromBytes(source), factory, onError)));
    }
    else {
        if (typeof source !== 'string') {
            throw new Error('Source must be a string');
        }
        // const uri =
        //   typeof source === 'string' ? source : Platform.resolveAsset(source);
        return commonjs_1.Skia.Data.fromURI(source).then(d => factoryWrapper(d, factory, onError));
    }
};
exports.loadData = loadData;
const tfFactory = commonjs_1.Skia.Typeface.MakeFreeTypeFaceFromData.bind(commonjs_1.Skia.Typeface);
const loadFont = async (source, size) => {
    const loadedData = await (0, exports.loadData)(source, tfFactory, error => {
        console.error(error);
    });
    if (!loadedData) {
        throw new Error('Could not load font');
    }
    console.log({ loadedData });
    return commonjs_1.Skia.Font(loadedData, size);
};
exports.loadFont = loadFont;

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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var webstudio_shopify_1 = require("webstudio-shopify");
var CollectionHero = function (props) {
    var _a;
    var handle = props.handle, _b = props.editing, editing = _b === void 0 ? false : _b, _c = props.textVariant, textVariant = _c === void 0 ? 'h3' : _c, handleClick = props.handleClick, _d = props.height, height = _d === void 0 ? 400 : _d, _e = props.objectFit, objectFit = _e === void 0 ? 'cover' : _e, _f = props.alt, alt = _f === void 0 ? 'image' : _f, _g = props.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = props.enableOverlay, enableOverlay = _h === void 0 ? false : _h, _j = props.opacity, opacity = _j === void 0 ? 0.5 : _j, _k = props.alignItems, alignItems = _k === void 0 ? 'center' : _k, _l = props.bgcolor, bgcolor = _l === void 0 ? '#FFFFFF' : _l, href = props.href;
    var _m = (0, webstudio_shopify_1.useCollections)(), collection = _m.collection, fetchCollection = _m.fetchCollection;
    (0, react_1.useEffect)(function () {
        if (handle) {
            fetchCollection(handle);
        }
    }, [handle]);
    if (!collection)
        return null;
    return (react_1.default.createElement(components_1.CoverImage, { editing: editing, enableOverlay: enableOverlay, enableGradient: enableGradient, opacity: opacity, bgcolor: bgcolor, height: height, textVariant: textVariant, title: collection === null || collection === void 0 ? void 0 : collection.title, description: collection === null || collection === void 0 ? void 0 : collection.description, image: (_a = collection === null || collection === void 0 ? void 0 : collection.image) === null || _a === void 0 ? void 0 : _a.url, objectFit: objectFit, alt: alt, alignItems: alignItems, href: href, handleClick: handleClick }));
};
exports.default = CollectionHero;

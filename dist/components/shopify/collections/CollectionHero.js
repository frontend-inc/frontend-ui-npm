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
var frontend_shopify_1 = require("frontend-shopify");
var CollectionHero = function (props) {
    var _a;
    var handle = props.handle, _b = props.editing, editing = _b === void 0 ? false : _b, handleClick = props.handleClick, _c = props.height, height = _c === void 0 ? 400 : _c, _d = props.objectFit, objectFit = _d === void 0 ? 'cover' : _d, _e = props.alt, alt = _e === void 0 ? 'image' : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = props.opacity, opacity = _h === void 0 ? 0.5 : _h, _j = props.alignItems, alignItems = _j === void 0 ? 'center' : _j, _k = props.overlayColor, overlayColor = _k === void 0 ? '#000000' : _k, href = props.href;
    var _l = (0, frontend_shopify_1.useCollections)(), collection = _l.collection, findCollection = _l.findCollection;
    (0, react_1.useEffect)(function () {
        if (handle) {
            findCollection(handle);
        }
    }, [handle]);
    if (!collection)
        return null;
    return (react_1.default.createElement(components_1.CoverImage, { editing: editing, enableOverlay: enableOverlay, enableGradient: enableGradient, opacity: opacity, overlayColor: overlayColor, height: height, title: collection === null || collection === void 0 ? void 0 : collection.title, description: collection === null || collection === void 0 ? void 0 : collection.description, image: (_a = collection === null || collection === void 0 ? void 0 : collection.image) === null || _a === void 0 ? void 0 : _a.url, objectFit: objectFit, alt: alt, alignItems: alignItems, href: href, handleClick: handleClick }));
};
exports.default = CollectionHero;

'use client';
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
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var CollectionCover = function (props) {
    var _a;
    var handleClick = props.handleClick, _b = props.height, height = _b === void 0 ? 400 : _b, _c = props.alt, alt = _c === void 0 ? 'image' : _c, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? true : _e, _f = props.alignItems, alignItems = _f === void 0 ? 'items-center' : _f, collectionId = props.collectionId;
    var _g = (0, hooks_1.useCollections)(), collection = _g.collection, findCollection = _g.findCollection;
    (0, react_1.useEffect)(function () {
        if (collectionId) {
            findCollection(collectionId);
        }
    }, [collectionId]);
    if (!collection)
        return null;
    return (react_1.default.createElement(frontend_js_1.ResourceProvider, { name: "collection", url: "/cms/collections/".concat(collectionId), resource: collection },
        react_1.default.createElement(__1.Cover, { height: height, title: collection === null || collection === void 0 ? void 0 : collection.title, subtitle: collection === null || collection === void 0 ? void 0 : collection.description, image: (_a = collection === null || collection === void 0 ? void 0 : collection.image) === null || _a === void 0 ? void 0 : _a.url, alt: alt, alignItems: alignItems, handleClick: handleClick, enableOverlay: enableOverlay, enableGradient: enableGradient, actions: react_1.default.createElement(__1.ShowButton, null, "Browse") }),
        react_1.default.createElement(__1.CollectionShow, null)));
};
exports.default = CollectionCover;

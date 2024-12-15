'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var hooks_1 = require("../../../../hooks");
function SwipeableShopifyProductImages(_a) {
    var _b, _c;
    var product = _a.product, _d = _a.height, height = _d === void 0 ? 320 : _d, handleClick = _a.handleClick, _e = _a.disableBorderRadius, disableBorderRadius = _e === void 0 ? false : _e;
    // @ts-ignore
    var images = ((_c = (_b = product === null || product === void 0 ? void 0 : product.images) === null || _b === void 0 ? void 0 : _b.edges) === null || _c === void 0 ? void 0 : _c.map(function (edge) { return edge === null || edge === void 0 ? void 0 : edge.node; })) || [];
    var _f = (0, hooks_1.useClickOrDrag)({
        onClick: handleClick,
    }), onMouseDown = _f.onMouseDown, onMouseUp = _f.onMouseUp;
    return (react_1.default.createElement(components_1.Swipeable, { enableDots: true }, images.map(function (image, index) { return (react_1.default.createElement("div", { key: index, className: "w-full overflow-hidden", onMouseDown: onMouseDown, onMouseUp: onMouseUp },
        react_1.default.createElement(components_1.Image, { src: image === null || image === void 0 ? void 0 : image.url, alt: product === null || product === void 0 ? void 0 : product.title, height: height, disableBorderRadius: disableBorderRadius, aspectRatio: 1.0 }))); })));
}
exports.default = SwipeableShopifyProductImages;

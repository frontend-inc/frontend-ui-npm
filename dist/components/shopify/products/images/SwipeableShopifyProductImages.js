'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var hooks_1 = require("../../../../hooks");
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
function SwipeableShopifyProductImages(props) {
    var _a, _b;
    var _c = props || {}, product = _c.product, _d = _c.height, height = _d === void 0 ? 320 : _d, handleClick = _c.handleClick, _e = _c.disableBorderRadius, disableBorderRadius = _e === void 0 ? false : _e;
    // @ts-ignore
    var images = ((_b = (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b.map(function (edge) { return edge === null || edge === void 0 ? void 0 : edge.node; })) || [];
    var _f = (0, hooks_1.useClickOrDrag)({
        onClick: handleClick,
    }), onMouseDown = _f.onMouseDown, onMouseUp = _f.onMouseUp;
    return (react_1.default.createElement(components_1.Swipeable, { enableDots: true }, images.map(function (image, index) { return (react_1.default.createElement("div", { className: "relative", key: index, onMouseDown: onMouseDown, onMouseUp: onMouseUp },
        react_1.default.createElement(frontend_shadcn_1.AspectRatio, { ratio: 1.0 },
            react_1.default.createElement(react_2.Image, { radius: "none", removeWrapper: true, key: index, src: image === null || image === void 0 ? void 0 : image.url, alt: product === null || product === void 0 ? void 0 : product.title, className: "object-cover" })))); })));
}
exports.default = SwipeableShopifyProductImages;

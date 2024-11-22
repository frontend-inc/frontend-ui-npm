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
var __2 = require("../..");
var Images = function (props) {
    var _a = props || {}, items = _a.items, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(), activeImage = _c[0], setActiveImage = _c[1];
    var handleClick = function (image) {
        setActiveImage(image);
        setOpen(true);
    };
    return (react_1.default.createElement("div", { className: "w-full justify-center flex flow-row p-2" },
        react_1.default.createElement("div", { className: "container mx-auto max-w-screen-2xl" },
            react_1.default.createElement("div", { className: 'w-full justify-center grid grid-cols-1 sm:grid-cols-3 gap-6' }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement(__2.BlurFade, { delay: 0.25 + idx * 0.05, key: idx },
                react_1.default.createElement(__1.Image, { label: item === null || item === void 0 ? void 0 : item.label, src: item === null || item === void 0 ? void 0 : item.image, handleClick: function () { return handleClick(item); }, enableGradient: enableGradient, enableOverlay: enableOverlay }))); })),
            (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-collage-fill", title: "No images yet.", description: "Images will appear here." }))),
        react_1.default.createElement(__1.ImageModal, { open: open, handleClose: function () { return setOpen(false); }, 
            //@ts-ignore
            src: activeImage === null || activeImage === void 0 ? void 0 : activeImage.image, title: activeImage === null || activeImage === void 0 ? void 0 : activeImage.title })));
};
exports.default = Images;

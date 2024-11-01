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
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var components_2 = require("../../../components");
function ShopifyCollectionCard(_a) {
    var collection = _a.collection, handleClick = _a.handleClick, buttonText = _a.buttonText, _b = _a.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = _a.enableOverlay, enableOverlay = _c === void 0 ? false : _c;
    var _d = collection || {}, label = _d.label, title = _d.title, image = _d.image;
    var _e = (0, react_1.useState)(false), open = _e[0], setOpen = _e[1];
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else {
            setOpen(true);
        }
    };
    return (react_1.default.createElement(frontend_shadcn_1.Card, { className: "relative w-full rounded-lg" },
        react_1.default.createElement("div", { className: "relative w-full h-full" },
            react_1.default.createElement(components_2.Image
            // @ts-ignore
            , { 
                // @ts-ignore
                src: image === null || image === void 0 ? void 0 : image.url, alt: title || 'Collection image', label: label, aspectRatio: 1.0, objectFit: "cover", enableGradient: enableGradient, enableOverlay: enableOverlay })),
        react_1.default.createElement("div", { className: "dark absolute bottom-0 left-0 w-full p-4 z-10" },
            react_1.default.createElement("div", { className: "flex items-center justify-between w-full" },
                react_1.default.createElement("div", { className: "flex flex-col items-start justify-center" },
                    react_1.default.createElement(core_1.Typography, { variant: "body1", className: "font-bold" }, (0, helpers_1.truncate)(title || '', 60))),
                buttonText && (react_1.default.createElement(components_1.Button, { variant: "secondary", size: "sm", onClick: handleItemClick, className: "bg-white text-black hover:bg-white/90" }, "Browse"))))));
}
exports.default = ShopifyCollectionCard;

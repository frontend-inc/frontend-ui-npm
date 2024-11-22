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
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_2 = require("../../../components");
var components_3 = require("../../../components");
var helpers_1 = require("../../../helpers");
var components_4 = require("../../../components");
function ShopifyCollectionCard(props) {
    var collection = props.collection, buttonText = props.buttonText, _a = props.enableGradient, enableGradient = _a === void 0 ? false : _a, _b = props.enableOverlay, enableOverlay = _b === void 0 ? false : _b, _c = props.enableAddToCart, enableAddToCart = _c === void 0 ? false : _c, _d = props.enableQuantity, enableQuantity = _d === void 0 ? false : _d, _e = props.enableSorting, enableSorting = _e === void 0 ? false : _e;
    var _f = collection || {}, handle = _f.handle, title = _f.title, image = _f.image;
    var _g = (0, react_1.useState)(false), open = _g[0], setOpen = _g[1];
    var handleShowClick = function () {
        setOpen(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(frontend_shadcn_1.Card, { className: "relative w-full rounded-lg" },
            react_1.default.createElement("div", { className: "relative cursor-pointer w-full h-full" },
                react_1.default.createElement(components_4.Image
                // @ts-ignore
                , { 
                    // @ts-ignore
                    src: image === null || image === void 0 ? void 0 : image.url, alt: title || 'Collection image', aspectRatio: 1.0, objectFit: "cover", enableGradient: enableGradient, enableOverlay: enableOverlay, handleClick: handleShowClick })),
            react_1.default.createElement("div", { className: "dark absolute bottom-0 left-0 w-full p-4 z-10" },
                react_1.default.createElement("div", { className: "flex items-center justify-between w-full" },
                    react_1.default.createElement("div", { className: "flex flex-col items-start justify-center" },
                        react_1.default.createElement(components_1.Typography, { variant: "body1", className: "font-bold" }, (0, helpers_1.truncate)(title || '', 60))),
                    buttonText && (react_1.default.createElement(components_2.Button, { variant: "secondary", size: "sm", onClick: handleShowClick, className: "bg-white text-black hover:bg-white/90" }, "Browse"))))),
        react_1.default.createElement(components_3.ShopifyProductCollectionModal, { open: open, handleClose: function () { return setOpen(false); }, collection: collection, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity, enableSort: enableSorting })));
}
exports.default = ShopifyCollectionCard;

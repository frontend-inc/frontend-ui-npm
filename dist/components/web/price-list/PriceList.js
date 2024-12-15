'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var PriceListItem_1 = __importDefault(require("./PriceListItem"));
var PriceList = function (props) {
    var _a = props || {}, variant = _a.variant, items = _a.items;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(null), activeItem = _c[0], setActiveItem = _c[1];
    var handleImageClick = function (item) {
        setActiveItem(item);
        setOpen(true);
    };
    return (react_1.default.createElement("div", { className: "w-full justify-center flex flow-row" },
        react_1.default.createElement("div", { className: "container mx-auto max-w-screen-2xl" },
            react_1.default.createElement("ul", { className: "list-none w-full flex flex-col space-y-2" }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement(__2.BlurFade, { delay: 0.25 + idx * 0.05, key: idx },
                react_1.default.createElement(PriceListItem_1.default, __assign({}, item, { variant: variant, handleImageClick: function () { return handleImageClick(item); } })))); })),
            (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-list-unordered-line", title: "No prices yet", description: "Your prices will appear here." }))),
        react_1.default.createElement(__2.ImageModal, { open: open, handleClose: function () { return setOpen(false); }, 
            //@ts-ignore
            src: activeItem === null || activeItem === void 0 ? void 0 : activeItem.image, title: activeItem === null || activeItem === void 0 ? void 0 : activeItem.title })));
};
exports.default = PriceList;

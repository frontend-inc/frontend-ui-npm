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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../..");
var components_1 = require("../../../components");
var ShopifySortList_1 = __importDefault(require("./ShopifySortList"));
var frontend_shopify_1 = require("frontend-shopify");
var lucide_react_1 = require("lucide-react");
var ShopifyProductSortButton = function (props) {
    var _a;
    var _b = props.sortKey, sortKey = _b === void 0 ? 'RELEVANCE' : _b, reverse = props.reverse, handleClick = props.handleClick;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var handleOpen = function () { return setOpen(!open); };
    var handleSortClick = function (sortKey, reverse) {
        handleClick(sortKey, reverse);
        setOpen(false);
    };
    var currentSortLabel = (_a = frontend_shopify_1.PRODUCT_SORT_OPTIONS.find(function (option) { return option.value === sortKey; })) === null || _a === void 0 ? void 0 : _a.label;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.Button, { variant: "secondary", className: "w-full", onClick: handleOpen },
            currentSortLabel,
            react_1.default.createElement(lucide_react_1.ArrowUpDown, { className: "ml-2 h-4 w-4" })),
        react_1.default.createElement(components_1.Sheet, { title: "Sort by", open: open, handleClose: function () { return setOpen(false); } },
            react_1.default.createElement("div", { className: "w-full py-2" },
                react_1.default.createElement(ShopifySortList_1.default, { enableIcons: true, value: sortKey, reverse: reverse, options: frontend_shopify_1.PRODUCT_SORT_OPTIONS, handleClick: handleSortClick })))));
};
exports.default = ShopifyProductSortButton;

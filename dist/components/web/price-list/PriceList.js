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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var PriceListItem_1 = __importDefault(require("./PriceListItem"));
var PriceList = function (props) {
    var _a = props || {}, variant = _a.variant, items = _a.items;
    return (react_1.default.createElement("div", { className: "w-full justify-center flex flow-row" },
        react_1.default.createElement("div", { className: "container mx-auto max-w-screen-2xl" },
            react_1.default.createElement("ul", { className: "list-none w-full flex flex-col space-y-2" }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement(__2.BlurFade, { delay: 0.25 + idx * 0.05, key: idx },
                react_1.default.createElement(PriceListItem_1.default, __assign({}, item, { variant: variant })))); })),
            (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-list-unordered-line", title: "No items yet.", description: "Your items will appear here." })))));
};
exports.default = PriceList;

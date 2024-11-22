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
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var TableCard = function (props) {
    var _a = props || {}, label = _a.label, primary = _a.primary, secondary = _a.secondary, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _b = _a.height, height = _b === void 0 ? 240 : _b, _c = _a.slots, slots = _c === void 0 ? {
        item: {},
        image: {},
    } : _c;
    return (react_1.default.createElement("div", __assign({ className: (0, frontend_shadcn_1.cn)('w-full flex flex-row flex-nowrap pt-1 pb-2 overflow-hidden border-b border-border justify-between') }, slots.item),
        react_1.default.createElement("div", { className: "w-full sm:grid sm:grid-cols-[repeat(auto-fill,140px)] gap-3 flex flex-col" },
            react_1.default.createElement("div", { className: "flex flex-row justify-center items-center w-full h-full" },
                react_1.default.createElement("div", { className: "w-[100px] max-w-[100px] h-full" },
                    react_1.default.createElement("button", { className: "w-full h-full focus:outline-none", onClick: handleClick },
                        react_1.default.createElement(__1.Image, __assign({ src: image, height: height, alt: primary, className: "w-full h-full object-cover" }, slots.image))))),
            react_1.default.createElement("div", { className: "flex flex-row justify-start items-center max-w-[140px] min-w-[140px]" },
                react_1.default.createElement(components_1.Typography, { variant: "body1" }, primary)),
            secondary),
        react_1.default.createElement("div", { className: "flex flex-row justify-end" }, secondaryAction)));
};
exports.default = TableCard;
